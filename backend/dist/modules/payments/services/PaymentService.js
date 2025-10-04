"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentService = void 0;
const StripePayment_1 = require("./providers/StripePayment");
const PaymentRepository_1 = require("../repositories/PaymentRepository");
const SubscriptionRepository_1 = require("@/modules/subscriptions/repositories/SubscriptionRepository");
const mongoose_1 = require("mongoose");
const enums_1 = require("@/common/types/enums");
const date_fns_1 = require("date-fns");
class PaymentService {
    constructor(paymentRepo = new PaymentRepository_1.PaymentRepository(), subscriptionRepo = new SubscriptionRepository_1.SubscriptionRepository()) {
        this.paymentRepo = paymentRepo;
        this.subscriptionRepo = subscriptionRepo;
        this.providers = {
            stripe: new StripePayment_1.StripePayment(process.env.STRIPE_SECRET),
            // razorpay: new RazorpayPayment(process.env.RAZORPAY_KEY!, process.env.RAZORPAY_SECRET!),
            // paypal: new PaypalPayment(process.env.PAYPAL_CLIENT_ID!, process.env.PAYPAL_SECRET!),
        };
    }
    async processPayment(req) {
        const provider = this.providers[req.paymentMethod];
        if (!provider)
            throw new Error("Unsupported payment method");
        const result = await provider.processPayment(req);
        const payment = await this.recordPayment(req, result);
        await this.handleSubscription(req, payment._id);
        return result;
    }
    /** Save payment details in DB */
    async recordPayment(req, result) {
        return this.paymentRepo.create({
            ...req,
            transactionId: result.transactionId,
            status: result.status === "success" ? "success" : "failure",
        });
    }
    /** Create or schedule subscription */
    async handleSubscription(req, paymentId) {
        const [startDate, status] = await this.determineStartDate(req.clientId);
        const endDate = this.calculateEndDate(startDate, req.planInterval);
        const subscription = await this.subscriptionRepo.create({
            clientId: new mongoose_1.Types.ObjectId(req.clientId),
            packageId: new mongoose_1.Types.ObjectId(req.packageId),
            paymentId: new mongoose_1.Types.ObjectId(paymentId),
            status,
            startDate,
            endDate,
            isTrial: false,
        });
        await subscription.save();
    }
    /** Check existing active subscription and return correct start date */
    async determineStartDate(clientId) {
        const existingSubscription = await this.subscriptionRepo.findOne({
            clientId: new mongoose_1.Types.ObjectId(clientId),
            isTrial: false,
            status: enums_1.SubscriptionStatus.ACTIVE,
            endDate: { $gte: new Date() },
        }, { endDate: -1 });
        if (existingSubscription?.endDate &&
            (0, date_fns_1.isAfter)(existingSubscription.endDate, new Date())) {
            const nextDay = new Date(existingSubscription.endDate);
            nextDay.setDate(nextDay.getDate() + 1);
            return [nextDay, enums_1.SubscriptionStatus.SCHEDULED];
        }
        return [new Date(), enums_1.SubscriptionStatus.ACTIVE];
    }
    calculateEndDate(startDate, planInterval) {
        return planInterval === "monthly"
            ? (0, date_fns_1.addMonths)(startDate, 1)
            : (0, date_fns_1.addYears)(startDate, 1);
    }
}
exports.PaymentService = PaymentService;
//# sourceMappingURL=PaymentService.js.map