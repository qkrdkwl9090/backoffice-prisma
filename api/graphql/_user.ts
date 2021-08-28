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
        id: intArg(),
        email: stringArg(),
        name: stringArg(),
      },
      resolve: async (_root, args, ctx) => {
        const { id, email, name } = args;
        return await ctx.prisma.user.findMany({
          where: {
            id,
            email,
            name,
          },
        });
      },
    });
  },
});
