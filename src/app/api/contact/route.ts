import { NextResponse } from "next/server";
import { z } from "zod";
import { connectToDatabase } from "@/lib/mongoose";
import { Contact } from "@/models/Contact";

const contactSchema = z.object({
  name: z.string().min(2).max(120),
  email: z.string().email(),
  message: z.string().min(10).max(5000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    if (!process.env.MONGODB_URI) {
      return NextResponse.json(
        {
          error:
            "Database not configured. Add MONGODB_URI to .env.local to persist messages.",
        },
        { status: 503 },
      );
    }

    await connectToDatabase();
    const contact = await Contact.create(parsed.data);

    return NextResponse.json(
      { success: true, id: contact._id },
      { status: 201 },
    );
  } catch (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Failed to submit contact form" },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({
    message: "Contact API — POST { name, email, message }",
  });
}
