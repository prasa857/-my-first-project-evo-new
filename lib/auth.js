import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { mongodbClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;
const option = {};

export const auth = betterAuth({
  //...
});
