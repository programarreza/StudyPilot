import ConnectDB from "@/lib/ConnectDB";
import Clases from "@/models/addClass";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    newTitle: title,
    newDescription: description,
    newPrice: price,
  } = await request.json();
  await ConnectDB();
  await Clases.findByIdAndUpdate(id, { title, description, price });
  return NextResponse.json({ message: "class info updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await ConnectDB();
  const cls = await Clases.findOne({ _id: id });
  return NextResponse.json({ cls }, { status: 200 });
}
