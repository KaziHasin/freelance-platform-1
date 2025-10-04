"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
const User_1 = require("../models/User");
class UserRepository {
    create(data) {
        return User_1.User.create(data);
    }
    findById(id) {
        return User_1.User.findById(id);
    }
    findOne(filter) {
        return User_1.User.findOne(filter);
    }
    findByEmail(email) {
        return User_1.User.findOne({ email });
    }
    findByPhone(phone) {
        return User_1.User.findOne({ phone });
    }
    find(filter, page = 1, limit = 20) {
        return User_1.User.find(filter).skip((page - 1) * limit).limit(limit).sort({ createdAt: -1 });
    }
    count(filter) {
        return User_1.User.countDocuments(filter);
    }
    update(id, data) {
        return User_1.User.findByIdAndUpdate(id, data, { new: true });
    }
    delete(id) {
        return User_1.User.findByIdAndDelete(id);
    }
}
exports.UserRepository = UserRepository;
//# sourceMappingURL=UserRepository.js.map