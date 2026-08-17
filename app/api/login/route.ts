import connectDB from "@/lib/db";
import User from "@/lib/models/User";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { success: false, message: "সব ফিল্ড দিতে হবে" },
        { status: 400 }
      );
    }

    // এই email দিয়ে user আছে কিনা খুঁজছি
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { success: false, message: "ভুল ইমেইল বা পাসওয়ার্ড" },
        { status: 400 }
      );
    }

    // password মিলছে কিনা check করছি (hash এর সাথে compare)
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return NextResponse.json(
        { success: false, message: "ভুল ইমেইল বা পাসওয়ার্ড" },
        { status: 400 }
      );
    }

    // token বানাচ্ছি, যাতে login state মনে রাখা যায়
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET as string,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({
      success: true,
      message: "লগইন সফল হয়েছে",
      user: { name: user.name, email: user.email },
    });

    // token কে cookie তে সেভ করছি
    response.cookies.set("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60, // ৭ দিন
      path: "/",
    });

    return response;
  } catch (error) {
    return NextResponse.json(
      { success: false, message: (error as Error).message },
      { status: 500 }
    );
  }
}