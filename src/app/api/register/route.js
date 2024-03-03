import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import ConnectDB from "@/lib/ConnectDB";
import User from "@/models/user";

export async function POST(req) {
  try {
    const { name, email, password, image } = await req.json();
    if (!name || !email) {
      return NextResponse.json(
        { message: "Name and Email are required fields" },
        { status: 400 }
      );
    }
    await ConnectDB();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "Email is already in use. Please use a different email." },
        { status: 400 }
      );
    }
    let hashedPassword = null;
    if (password) {
      hashedPassword = await bcrypt.hash(password, 10);
    }
    await User.create({ name, email, password: hashedPassword, image });
    return NextResponse.json(
      { message: "User registered successfully." },
      { status: 201 }
    );
  } catch (error) {
    console.log("Error registering user:", error);
    return NextResponse.json(
      {
        message: "An error occurred while registering the user",
      },
      { status: 500 }
    );
  }
}
