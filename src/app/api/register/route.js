import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { connectMongoDB } from "../../../../lib/mongodb";

import User from "../../../../models/user";

export async function POST(req) {
  try {
    // Receive user info from the request body
    const { name, email, password, image } = await req.json();
    console.log({ name, email, password, image });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log({ hashedPassword });

    // Connect to the MongoDB database
    const db = await connectMongoDB();
    console.log(db);

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
