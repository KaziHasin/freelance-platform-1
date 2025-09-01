import { DevLevel } from '@/common/types/enums';
import { Developer } from '../models/Developer';
import type { IDeveloper } from '../models/Developer';

export class DeveloperRepository {
    create(data: Partial<IDeveloper>) {
        return Developer.create(data);
    }
    findById(id: string) {
        return Developer.findById(id).populate('userId', 'email phone roles status');
    }
    find(filter: any, page = 1, limit = 20) {
        return Developer.find(filter)
            .populate('userId', 'email phone roles status')
            .skip((page - 1) * limit)
            .limit(limit)
            .sort({ createdAt: -1 });
    }
    count(filter: any) {
        return Developer.countDocuments(filter);
    }
    update(id: string, data: Partial<IDeveloper>) {
        return Developer.findByIdAndUpdate(id, data, { new: true });
    }
    delete(id: string) {
        return Developer.findByIdAndDelete(id);
    }

    /**
     * Find candidate developers based on required skills and level
     */
    async candidates(
        requiredSkillIds: string[],
        level?: DevLevel,
        excludeIds: string[] = []
    ) {
        const match: any = {
            _id: { $nin: excludeIds }, // exclude already tried developers
        };

        if (level) {
            match.level = level;
        }

        // Aggregate pipeline for skill matching
        return Developer.aggregate([
            { $match: match },
            {
                $addFields: {
                    matchedSkills: {
                        $size: {
                            $setIntersection: ["$profile.skills", requiredSkillIds],
                        },
                    },
                },
            },
            { $match: { matchedSkills: { $gt: 0 } } }, // only keep those with at least 1 match
            { $sort: { matchedSkills: -1, createdAt: -1 } }, // sort by most matches, then recency
        ]);
    }
}
