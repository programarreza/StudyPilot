import { NextRequest, NextResponse } from "next/server";
import connectMongoDB from "../../../lib/mongodb";
import clases from "../../../models/addClass";

// GET all class teacher dashboard 
export async function GET(){
	await connectMongoDB()
	try {
		const allClass = await clases.find();
		return NextResponse.json(allClass)
	} catch (error) {
		console.error("Error fetching class:", error)
		return NextResponse.json({message: error}, {status: 500})
	}
}

export async function POST(req) {
  const { title, description, author, image, price } = await req.json();
  console.log({title, description, author, image, price});
  console.log(req);

  const db = await connectMongoDB();
  console.log(db);
  await clases.create({ title, description, author, image, price });
  return NextRequest.json({ message: "Class Created" }, { status: 201 });
}
