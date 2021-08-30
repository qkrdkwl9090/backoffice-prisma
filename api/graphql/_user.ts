import { extendType, intArg, objectType, stringArg } from "nexus";

export const user = objectType({
  name: "user",
  definition(t) {
    t.model.id();
    t.model.email();
    t.model.password();
    t.model.name();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
export const userQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("user", {
      type: "user",
      args: {
        email: stringArg(),
        name: stringArg(),
      },
      resolve: async (_root, args, ctx) => {
        const { email, name } = args;
        if (email) {
          return await ctx.prisma.user.findMany({
            where: {
              email,
            },
          });
        } else if (name) {
          return await ctx.prisma.user.findMany({
            where: {
              name,
            },
          });
        } else {
          return await ctx.prisma.user.findMany();
        }
      },
    });
  },
});
