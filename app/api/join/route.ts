import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { v2 as cloudinary } from "cloudinary";

// ✅ Cloudinary config
cloudinary.config({
  secure: true,
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;

    const bust = formData.get("measurements.bust") as string;
    const waist = formData.get("measurements.waist") as string;
    const hip = formData.get("measurements.hip") as string;
    const shoes = formData.get("measurements.shoes") as string;
    const hair = formData.get("measurements.hair") as string;
    const eyes = formData.get("measurements.eyes") as string;

    const age = formData.get("age") as string;
    const height = formData.get("height") as string;
    const gender = formData.get("gender") as string;
    const country = formData.get("country") as string;
    const city = formData.get("city") as string;
    const experience = formData.get("experience") as string;
    const instagram = formData.get("instagram") as string;
    const about = formData.get("about") as string;

    const files = formData.getAll("images") as File[];

    // 🛑 Validation
    if (
      !firstName || !lastName || !email || !phone ||
      !age || !height || !gender || !country ||
      !city || !experience || !instagram || !about
    ) {
      return NextResponse.json({ error: "All fields are required" }, { status: 400 });
    }

    if (!bust || !waist || !hip || !shoes || !hair || !eyes) {
      return NextResponse.json({ error: "All measurements required" }, { status: 400 });
    }

    if (!files || files.length === 0) {
      return NextResponse.json({ error: "Images required" }, { status: 400 });
    }

    // check existing user
    const existingUser = await prisma.join.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // 🔥 Cloudinary Upload
    const imageUrls: string[] = [];

    for (const file of files) {
      if (!file || typeof file === "string") continue;

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const base64 = buffer.toString("base64");
      const dataURI = `data:${file.type};base64,${base64}`;

      const uploadRes = await cloudinary.uploader.upload(dataURI, {
        folder: "auraa-models",
      });

      imageUrls.push(uploadRes.secure_url);
    }

    // 💾 Save in DB
    const join = await prisma.join.create({
      data: {
        firstName,
        lastName,
        email,
        phone,
        measurements: {
          create: { bust, waist, hip, shoes, hair, eyes },
        },
        age,
        height,
        gender,
        country,
        city,
        experience,
        instagram,
        about,
        images: {
          create: imageUrls.map((url) => ({ url })),
        },
      },
      include: {
        images: true,
        measurements: true,
      },
    });

    return NextResponse.json({ message: "Success", data: join }, { status: 201 });

  } catch (error) {
    console.error("❌ ERROR:", error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : "Unknown",
      },
      { status: 500 }
    );
  }
}

// get all join applications
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const gender = searchParams.get("gender");
    console.log("🔍 SEARCH PARAMS:", searchParams, "GENDER:", gender)

    const joins = await prisma.join.findMany({
      include: {
        images: true,
        measurements: true,
      },
      orderBy: {
        createdAt: "desc",
      },
      where: gender ? { gender } : undefined,
    });

    return NextResponse.json({ data: joins }, { status: 200 });
  } catch (error) {
    console.error("❌ ERROR:", error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
        details: error instanceof Error ? error.message : "Unknown",
      },
      { status: 500 }
    );
  }
}