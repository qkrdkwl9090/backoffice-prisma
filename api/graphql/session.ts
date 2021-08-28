import { extendType, stringArg, nonNull } from "nexus";
import brcypt from "bcrypt";
import { generateAuthToken } from "../plugins/generateAuthToken";
import { session } from "./types/session";
import { verifyAuthentication } from "./services/verifyAuthentication";

export const sessionMutation = extendType({
  type: "Mutation",
  definition(t) {
    t.field("signIn", {
      type: session,
      args: {
        email: nonNull(stringArg()),
        password: nonNull(stringArg()),
      },
      resolve: async (_root, args, ctx) => {
        const { email, password } = args;
        const user = await ctx.prisma.user.findUnique({
          where: { email },
        });
        if (user === null) {
          throw new Error(`No user found for email: ${email}`);
        }
        const passwordValid = password;
        const passwordCompare = await brcypt.compare(
          passwordValid,
          user.password
        );
        if (!passwordValid) {
          throw new Error("Invalid password");
        } else if (!passwordCompare) {
          throw new Error("Password do not match");
        }
        const token: string = await generateAuthToken(user);

        return {
          success: true,
          token,
        };
      },
    });
    t.field("refreshUserToken", {
      type: session,
      resolve: async (_root, _args, ctx) => {
        verifyAuthentication(ctx);
        try {
          const token = await generateAuthToken(ctx.currentUser);
          return {
            success: true,
            token,
          };
        } catch (err) {
          console.log(err);
          return {
            success: false,
            token: "",
          };
        }
      },
    });
  },
});
