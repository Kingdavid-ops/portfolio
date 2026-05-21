import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongoose";
import { BlogPost } from "@/models/BlogPost";
import { getAllArticles } from "@/lib/blog";

export async function GET() {
  try {
    if (process.env.MONGODB_URI) {
      await connectToDatabase();
      const posts = await BlogPost.find().sort({ publishedAt: -1 }).lean();
      if (posts.length > 0) {
        return NextResponse.json({ source: "database", posts });
      }
    }
    return NextResponse.json({ source: "static", posts: getAllArticles() });
  } catch (error) {
    console.error("[blog]", error);
    return NextResponse.json({ source: "static", posts: getAllArticles() });
  }
}
