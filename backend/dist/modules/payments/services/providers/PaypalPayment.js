"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaypalPayment = void 0;
const paypal_server_sdk_1 = __importDefault(require("@paypal/paypal-server-sdk"));
class PaypalPayment {
    constructor(clientId, clientSecret, isSandbox = true) {
        const environment = isSandbox
            ? new paypal_server_sdk_1.default.core.SandboxEnvironment(clientId, clientSecret)
            : new paypal_server_sdk_1.default.core.LiveEnvironment(clientId, clientSecret);
        this.paypalClient = new paypal_server_sdk_1.default.core.PayPalHttpClient(environment);
    }
    async processPayment(req) {
        try {
            const request = new paypal_server_sdk_1.default.orders.OrdersCreateRequest();
            request.requestBody({
                intent: "CAPTURE",
                purchase_units: [
                    {
                        amount: {
                            currency_code: req.currency,
                            value: req.amount.toFixed(2),
                        },
                        description: req.packageTitle,
                    },
                ],
            });
            const order = await this.paypalClient.execute(request);
            return {
                status: "success",
                transactionId: order.result.id,
            };
        }
        catch (error) {
            console.error("PayPal payment error:", error);
            // Generate a temporary transactionId (or empty string) for failed payments
            return {
                status: "failure",
                transactionId: "", // required by interface
            };
        }
    }
}
exports.PaypalPayment = PaypalPayment;
//# sourceMappingURL=PaypalPayment.js.map