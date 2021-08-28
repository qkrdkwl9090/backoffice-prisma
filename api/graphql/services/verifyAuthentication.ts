import { iContext } from "../../context";

export function verifyAuthentication(context: iContext) {
  if (context?.currentUser?.email) return;
  throw new Error("Invalid Authentication");
}
