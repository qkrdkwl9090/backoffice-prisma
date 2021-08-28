import { sign } from "jsonwebtoken";
import { tUser } from "../context";
import { JWT_TOKEN_KEY } from "../constants";

export const generateAuthToken = async (user: any) => {
  const userId = user.id;
  const inputPayload: tUser = {
    email: user.email,
    userId,
    name: user.name,
    iss: "BackOffice",
  };
  const token = sign(inputPayload, JWT_TOKEN_KEY, {
    expiresIn: "300m",
  });
  return token;
};
