import { Schema, model, Document, Types } from "mongoose";

export interface IProject extends Document {
  title: string;
  description: string;
  skillsRequired: string[];
  clientId: Types.ObjectId;
  packageType: "Basic" | "Standard" | "Premium";
  agreementFileUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    skillsRequired: [{ type: String, required: true }],
    clientId: { type: Schema.Types.ObjectId, ref: "User", required: true },
    packageType: {
      type: String,
      enum: ["Basic", "Standard", "Premium"],
      required: true,
    },
    agreementFileUrl: { type: String },
  },
  { timestamps: true }
);

export default model<IProject>("Project", ProjectSchema);
