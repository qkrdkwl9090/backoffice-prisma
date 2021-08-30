import { objectType, extendType, stringArg, intArg } from "nexus";

export const team = objectType({
  name: "team",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.companyId();
    t.model.company();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.employee();
  },
});
export const teamQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("team", {
      type: "team",
      args: {
        name: stringArg(),
        companyId: intArg(),
      },
      resolve: async (_root, args, ctx) => {
        const { companyId, name } = args;
        if (companyId && name) {
          return await ctx.prisma.team.findMany({
            where: {
              name,
              companyId,
            },
          });
        } else if (companyId) {
          return await ctx.prisma.team.findMany({
            where: {
              companyId,
            },
          });
        } else if (name) {
          return await ctx.prisma.team.findMany({
            where: {
              name,
            },
          });
        } else {
          return await ctx.prisma.team.findMany();
        }
      },
    });
  },
});
