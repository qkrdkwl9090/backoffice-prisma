import { objectType, extendType, stringArg, intArg } from "nexus";

export const team = objectType({
  name: "team",
  definition(t) {
    t.model.id();
    t.model.name();
  },
});
export const teamQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("team", {
      type: "team",
      args: {
        id: intArg(),
        name: stringArg(),
      },
      resolve: async (_root, args, ctx) => {
        const { id, name } = args;
        return await ctx.prisma.team.findMany({
          where: {
            id,
            name,
          },
        });
      },
    });
  },
});
