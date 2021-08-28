import { objectType, extendType, intArg, stringArg } from "nexus";

export const product = objectType({
  name: "product",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.createdAt();
  },
});
export const productQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("product", {
      type: "product",
      args: {
        id: intArg(),
        name: stringArg(),
      },
      resolve: async (_root, args, ctx) => {
        const { id, name } = args;
        return await ctx.prisma.product.findMany({
          where: {
            id,
            name,
          },
        });
      },
    });
  },
});
