import { DevLevel } from "@/common/types/enums";
import { Schema, model, Document, Types } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  requiredSkillIds: Types.ObjectId[]
  clientId: Types.ObjectId;
  preferredLevel?: DevLevel;
  packageId: Types.ObjectId;
  agreementFileUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const projectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    requiredSkillIds: [{ type: Schema.Types.ObjectId, ref: 'Skill', index: true }],
    clientId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    preferredLevel: { type: String, enum: Object.values(DevLevel), required: false },
    packageId: { type: Schema.Types.ObjectId, red: 'Package', required: true },
    agreementFileUrl: { type: String },
  },
  { timestamps: true }
);

export const Project = model<IProject>('Project', projectSchema);
