"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageRepository = void 0;
const Package_1 = require("../models/Package");
class PackageRepository {
    create(data) {
        return Package_1.Package.create(data);
    }
    findById(id) {
        return Package_1.Package.findById(id);
    }
    findOne(filter) {
        return Package_1.Package.findOne(filter);
    }
    find(filter, page = 1, limit = 20) {
        return Package_1.Package.find(filter)
            .sort({ createdAt: -1 })
            .skip((page - 1) * limit)
            .limit(limit);
    }
    count(filter) {
        return Package_1.Package.countDocuments(filter);
    }
    update(id, data) {
        return Package_1.Package.findByIdAndUpdate(id, data, { new: true });
    }
    delete(id) {
        return Package_1.Package.findByIdAndDelete(id);
    }
}
exports.PackageRepository = PackageRepository;
//# sourceMappingURL=PackageRepository.js.map