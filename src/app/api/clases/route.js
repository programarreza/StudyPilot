import { NextResponse } from "next/server";
import ConnectDB from "@/lib/ConnectDB";
import Clases from "@/models/addClass";

// GET all class teacher dashboard
export async function GET() {
  await ConnectDB();
  try {
    const allClass = await Clases.find();
    return NextResponse.json(allClass);
  } catch (error) {
    console.error("Error fetching class:", error);
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
// POST all class teacher dashboard
export async function POST(req) {
  const { title, description, author, image, price } = await req.json();
  const db = await ConnectDB();
  await Clases.create({ title, description, author, image, price });
  return NextResponse.json({ message: "Class Created" }, { status: 201 });
}

// DELETE class teacher dashboard
export async function DELETE(req) {
  const id = req.nextUrl.searchParams.get("id");
  await ConnectDB();
  await Clases.findByIdAndDelete(id);
  return NextResponse.json({ message: "class deleted" }, { status: 203 });
}


