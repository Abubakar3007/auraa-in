import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET(req: Request, context: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await context.params;
        if (!id) {
            return NextResponse.json(
                { error: "ID is required" },
                { status: 400 }
            );
        }

        const join = await prisma.join.findUnique({
            where: { id },
            include: {
                images: true,
                measurements: true,
            },
        });

        if (!join) {
            return NextResponse.json(
                { error: "Model not found" },
                { status: 404 }
            );
        }

        return NextResponse.json({ data: join }, { status: 200 });

    } catch (error) {
        console.error("❌ ERROR:", error);

        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}