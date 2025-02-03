import { MongoClient } from "mongodb";

const clientPromise = () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  const option = {};

  if (!MONGODB_URI) {
    throw new error('invalid/Missing envirament veriable:"MONGODB_URI"');
  }
  const client = new MongoClient(MONGODB_URI, option);
  return client.connect();
};

export default clientPromise;
