import clientPromise from "@/lib/mongodb";

//Movies related server actions
export const createMovie = async (movie) => {
  try {
    const client = await clientPromise(); //mongodb client
    const db = client.db("sample_mflix"); //database instance

    //create movie quary
    const result = await db.collection("movies-new").insertOne(movie);
    console.log("A movie was inserted with the _id: ${result.insertedId}");
  } catch {
    console.log("Mongodb insert failed!");
  }
};
