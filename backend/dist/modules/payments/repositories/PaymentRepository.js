"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentRepository = void 0;
const Payment_1 = require("../models/Payment");
class PaymentRepository {
    async create(data) {
        return await Payment_1.Payment.create(data);
    }
    async findById(id) {
        return await Payment_1.Payment.findById(id);
    }
    async findAll() {
        return await Payment_1.Payment.find().sort({ createdAt: -1 });
    }
}
exports.PaymentRepository = PaymentRepository;
//# sourceMappingURL=PaymentRepository.js.map