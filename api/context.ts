import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
  rejectOnNotFound: true,
});

export interface iContext {
  prisma: PrismaClient;
}
export const context: iContext = {
  prisma,
};
