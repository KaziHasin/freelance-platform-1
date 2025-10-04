"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeveloperRepository = void 0;
const Developer_1 = require("../models/Developer");
const mongoose_1 = require("mongoose");
const User_1 = require("@/modules/users/models/User");
class DeveloperRepository {
    create(data) {
        return Developer_1.Developer.create(data);
    }
    findById(id) {
        return User_1.User.findById(id)
            .populate({
            path: "developer",
            populate: [
                {
                    path: "assignments",
                    populate: { path: "projectId", select: "title description createdAt" }
                },
                {
                    path: "notRepliedAssignments",
                    populate: { path: "projectId" }
                },
                {
                    path: "verification.reviewedBy",
                    select: "name avatar email"
                },
                {
                    path: "profile.skills",
                    select: "name label"
                }
            ]
        });
    }
    find(filter, page = 1, limit = 20) {
        return User_1.User.find({ ...filter, role: "DEVELOPER" })
            .select("name email phone status provider createdAt")
            .populate({
            path: "developer",
        })
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ createdAt: -1 });
    }
    count(filter) {
        return Developer_1.Developer.countDocuments(filter);
    }
    update(id, data) {
        return Developer_1.Developer.findByIdAndUpdate(id, data, { new: true });
    }
    delete(id) {
        return Developer_1.Developer.findByIdAndDelete(id);
    }
    /**
     * Find candidate developers based on required skills and level
     */
    async candidates(requiredSkillIds, level, excludeIds = []) {
        const match = {
            _id: { $nin: excludeIds.map(id => new mongoose_1.Types.ObjectId(id)) },
        };
        if (level) {
            match.level = level;
        }
        const skillObjectIds = requiredSkillIds.map(id => new mongoose_1.Types.ObjectId(id));
        return Developer_1.Developer.aggregate([
            { $match: match },
            {
                $addFields: {
                    matchedSkills: {
                        $size: { $setIntersection: ["$profile.skills", skillObjectIds] },
                    },
                },
            },
            { $match: { matchedSkills: { $gt: 0 } } },
            { $sort: { matchedSkills: -1, createdAt: -1 } },
        ]);
    }
}
exports.DeveloperRepository = DeveloperRepository;
//# sourceMappingURL=DeveloperRepository.js.map