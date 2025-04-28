import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

export const POST = async (req) => {
  //find database
  //Find the user in database
  //check password validation
  //Retunr the response with token
  //If password invalid return error response
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return NextResponse.json(
        {
          error: "Name,Email and Password are required ",
        },
        { status: 400 }
      );
    }
    const client = await clientPromise();
    const db = client.db("sample_mflix");

    const existingUser = await db.collection("users").findOne({ email });

    console.log("Is existing User", existingUser);

    return NextResponse.json({ success: true, name, email });
  } catch (error) {
    console.log("MONGODB ERROR", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
