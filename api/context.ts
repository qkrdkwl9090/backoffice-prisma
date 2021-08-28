import { PrismaClient } from "@prisma/client";
import jwt from "jsonwebtoken";
import { JWT_TOKEN_KEY } from "./constants";

export type tUser = {
  email: string;
  userId: number;
  name: string;
  iss: string;
};

const prisma = new PrismaClient({
  rejectOnNotFound: true,
});

export interface iContext {
  prisma: PrismaClient;
  currentUser: tUser | null;
}
const getUserByJWT = (token: string): tUser | null => {
  try {
    if (token) {
      process.env.JWT_SECRET;
      const payload = jwt.verify(token, JWT_TOKEN_KEY) as tUser;
      return payload || null;
    }
    return null;
  } catch (err) {
    console.log(err);
    return null;
  }
};
export function context(req: any): iContext {
  const header = req.headers["authorizationr"].split(" ");
  const token = header.length > 1 ? header[1] : "";
  const currentUser = getUserByJWT(token) || null;
  return {
    currentUser,
    prisma,
  };
}
