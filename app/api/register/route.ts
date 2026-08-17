import connectDB from "@/lib/db";
import User from "@/lib/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { name, email, password } = await req.json();

    // চেক করছি সব field দেওয়া হয়েছে কিনা
    if (!name || !email || !password) {
      return NextResponse.json(
        { success: false, message: "সব ফিল্ড দিতে হবে" },
        { status: 400 }
      );
    }

    // চেক করছি এই email দিয়ে আগে থেকে account আছে কিনা
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { success: false, message: "এই ইমেইল দিয়ে আগেই অ্যাকাউন্ট আছে" },
        { status: 400 }
      );
    }

    // password hash করছি (plain text সেভ করা নিরাপদ না)
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      { success: true, message: "অ্যাকাউন্ট তৈরি হয়েছে" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    );
  }
}