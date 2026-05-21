import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

const BlogPostSchema = new Schema(
  {
    slug: { type: String, required: true, unique: true, trim: true },
    title: { type: String, required: true, trim: true },
    excerpt: { type: String, required: true, trim: true },
    content: { type: String, required: true },
    category: { type: String, required: true, trim: true },
    tags: [{ type: String, trim: true }],
    featured: { type: Boolean, default: false },
    publishedAt: { type: Date, default: Date.now },
    readTime: { type: Number, default: 5 },
    coverImage: { type: String },
  },
  { timestamps: true },
);

export type BlogPostDocument = InferSchemaType<typeof BlogPostSchema>;

export const BlogPost: Model<BlogPostDocument> =
  mongoose.models.BlogPost ??
  mongoose.model<BlogPostDocument>("BlogPost", BlogPostSchema);
