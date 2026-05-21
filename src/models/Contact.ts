import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const ContactSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 120 },
    email: { type: String, required: true, trim: true, lowercase: true },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
    status: {
      type: String,
      enum: ["new", "read", "replied"],
      default: "new",
    },
  },
  { timestamps: true },
);

export type ContactDocument = InferSchemaType<typeof ContactSchema>;

export const Contact: Model<ContactDocument> =
  mongoose.models.Contact ??
  mongoose.model<ContactDocument>("Contact", ContactSchema);
