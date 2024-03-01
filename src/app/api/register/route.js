import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import ConnectDB from "@/lib/ConnectDB";
import User from "@/models/user";

export async function POST(req) {
  try {
    // Receive user info from the request body
    const { name, email, password, image } = await req.json();
    await ConnectDB();
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: "Email is already in user" }, { status: 400 })
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    // Create a new user in the database
    await User.create({ name, email, password: hashedPassword, image });
    // Return a successful response
    return NextResponse.json({ message: "user registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      {
        message: "An error occurred while registering the user",
      },
      { status: 500 }
    );
  }
}
