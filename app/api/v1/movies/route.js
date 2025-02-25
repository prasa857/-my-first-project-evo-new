import { db } from "@/lib/mongodb";
import { NextResponse } from "next/server";

/*const MOVIES = [
  { id: 1, Title: "Harry Potter" },
  { id: 2, Title: "Load of the Rings" },
  { id: 3, Title: "Spider Man" },
  { id: 4, Title: "X-MAN" },
  { id: 5, Title: "Flash" },
  { id: 6, Title: "Speed" },
  { id: 7, Title: "Rambo" },
];*/

export const GET = async (req) => {
  //Get movies from the MongoDB
  try {
    //fetch movie from the database
    const movies = await db
      .collection("movies")
      .find({})
      .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    return NextResponse.json(movies);
    //console.log("MFLIX MOVIES::", movies);
  } catch (error) {
    console.log("MONGODB ERROR", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
};
