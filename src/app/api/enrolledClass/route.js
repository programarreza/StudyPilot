import ConnectDB from "@/lib/ConnectDB";
import { JoyConnectDb } from "@/lib/joyDbConnect";
import EnrolledClass from "@/models/enrolledClass";
import { NextResponse } from "next/server";
export async function GET(){
    await JoyConnectDb()
    try {
       const enrolledClasses = await EnrolledClass.find() 
       return NextResponse.json(enrolledClasses)
    } catch (error) {
        console.log('Error fetching enrolled classes')
        return NextResponse.json({message:error.message},{status:500})
    }
}

export async function POST(req) {
    const { title, description, author, image, price,email } = await req.json();
  console.log({ title, description, author, image, price,email })
    const db = await JoyConnectDb();
    await EnrolledClass.create({ title, description, author, image, price,email });
    return NextResponse.json({ message: "class enrolled" }, { status: 201 });
  }