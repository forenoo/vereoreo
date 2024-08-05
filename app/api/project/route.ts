import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { title, image, category } = await request.json();
  await prisma.project.create({
    data: {
      title: title,
      image: image,
      category: category,
    },
  });

  return NextResponse.json({ message: "Project created" }, { status: 201 });
}

export async function GET() {
  const data = await prisma.project.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(data);
}
