import { objectType, extendType, intArg, stringArg } from "nexus";

export const product = objectType({
  name: "product",
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.createdAt();
    t.model.updatedAt();
    t.model.createdAt();
  },
});
export const productQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("product", {
      type: "product",
      args: {
        name: stringArg(),
      },
      resolve: async (_root, args, ctx) => {
        const { name } = args;
        if (name) {
          return await ctx.prisma.product.findMany({
            where: {
              name,
            },
          });
        } else {
          return await ctx.prisma.product.findMany();
        }
      },
    });
  },
});
