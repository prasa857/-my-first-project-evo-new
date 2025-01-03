import { NextResponse } from "next/server";

const MOVIES = [
  { id: 1, Title: "Harry Potter" },
  { id: 2, Title: "Load of the Rings" },
  { id: 3, Title: "Spider Man" },
  { id: 4, Title: "X-MAN" },
  { id: 5, Title: "Flash" },
  { id: 6, Title: "Speed" },
  { id: 7, Title: "Rambo" },
];

export const GET = async (req) => {
  return NextResponse.json({ success: true, movies: MOVIES });
};
