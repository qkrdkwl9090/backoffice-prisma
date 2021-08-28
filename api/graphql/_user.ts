import { extendType, intArg, objectType } from "nexus";

export const user = objectType({
  name: "user",
  definition(t) {
    t.model.id();
    t.model.companyId();
    t.model.teamId();
    t.model.name();
    t.model.birthday();
    t.model.email();
    t.model.saleCount();
  },
});
export const userQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("user", {
      type: "user",
      args: {
        id: intArg(),
        companyId: intArg(),
        teamId: intArg(),
      },
      resolve: async (_root, args, ctx) => {
        const { id, companyId, teamId } = args;
        return await ctx.prisma.user.findMany({
          where: {
            id,
            companyId,
            teamId,
          },
        });
      },
    });
  },
});
