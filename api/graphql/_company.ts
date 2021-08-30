import { objectType, stringArg, intArg, extendType } from "nexus";

export const company = objectType({
  name: "company",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.domain();
    t.model.team();
    t.model.employee();
  },
});
export const companyQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("company", {
      type: "company",
      args: {
        name: stringArg(),
      },
      resolve: async (_root, args, ctx) => {
        const { name } = args;
        if (name) {
          return await ctx.prisma.company.findMany({
            where: {
              name,
            },
          });
        } else {
          return await ctx.prisma.company.findMany();
        }
      },
    });
  },
});
