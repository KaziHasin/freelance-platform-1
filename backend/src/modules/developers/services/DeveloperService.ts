import { SkillService } from '@/modules/projects/services/SkillService';
import { DeveloperRepository } from '../repositories/DeveloperRepository';
import { VerificationStatus } from '@/common/types/enums';
import { Types, UpdateQuery } from 'mongoose';
import { IDeveloper } from '../models/Developer';

export class DeveloperService {
    constructor(private repo = new DeveloperRepository(), private skillService = new SkillService()) { }

    async create(data: any) {
        // const skills = await this.skillService.resolveSkillIds(data.profile.skills);
        // const toCreate = {
        //     ...data,
        //     profile: {
        //         ...data.profile,
        //         skills: skills,
        //     },
        // };
        return this.repo.create(data);
    }
    get(id: string) {
        return this.repo.findById(id);
    }
    async list(q?: string, status?: string, page = 1, limit = 20) {
        const filter: any = {};
        if (q) {
            filter.$or = [
                { email: new RegExp(q, 'i') },
                { phone: new RegExp(q, 'i') },
                { name: new RegExp(q, 'i') }
            ];
        }
        if (status) {
            filter.status = status.toUpperCase();
        }

        const [items, total] = await Promise.all([this.repo.find(filter, page, limit), this.repo.count(filter)]);
        return { items, total, page, limit };
    }
    async update(id: string, data: any, files?: {
        docFile?: Express.Multer.File | undefined;
        idFile?: Express.Multer.File | undefined;
    }) {
        const skills = await this.skillService.resolveSkillIds(data.profile?.skills || []);

        let verification: any = {};
        if (data.verification) {
            verification = { ...data.verification };

            if (files?.docFile) {
                verification.docFile = `/uploads/${files.docFile.filename}`;
                verification.docUrl = undefined;
            } else if (data.verification.docUrl) {
                verification.docUrl = data.verification.docUrl;
                verification.docFile = undefined;
            }

            if (files?.idFile) {
                verification.idType = `/uploads/${files.idFile.filename}`;
            } else if (data.verification.idType) {
                verification.idType = data.verification.idType;
            }
        }

        const toUpdate = {
            ...data,
            verification,
            profile: {
                ...data.profile,
                skills,
            },
        };

        const updated = await this.repo.update(id, toUpdate);

        return updated;
    }


    async updateVerificationStatus(
        id: string,
        status: keyof typeof VerificationStatus,
        adminId: Types.ObjectId
    ) {
        const update = {
            $set: {
                "verification.status": VerificationStatus[status],
                "verification.reviewedBy": adminId,
                "verification.reviewedAt": new Date(),
            }
        };

        return this.repo.update(id, update);
    }


    remove(id: string) {
        return this.repo.delete(id);
    }
}
