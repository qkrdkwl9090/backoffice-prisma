import { objectType, stringArg, intArg, extendType } from "nexus";

export const company = objectType({
  name: "company",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.domain();
  },
});
export const companyQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("company", {
      type: "company",
      args: {
        id: intArg(),
        name: stringArg(),
      },
      resolve: async (_root, args, ctx) => {
        const { id, name } = args;
        return await ctx.prisma.company.findMany({
          where: {
            id,
            name,
          },
        });
      },
    });
  },
});
