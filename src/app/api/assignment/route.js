import ConnectDB from "@/lib/ConnectDB";

//import { JoyConnectDb } from "@/lib/joyDbConnect";
import Assignment from "@/models/addAssignment";
import { NextResponse } from "next/server";

export async function POST(req) {
    const { email, title, description, deadline, classId } = await req.json();

    console.log({ title, description,email })
    await ConnectDB();
    await Assignment.create({ title, description, email, deadline, classId });
    return NextResponse.json({ message: "assignment added" }, { status: 201 });
}