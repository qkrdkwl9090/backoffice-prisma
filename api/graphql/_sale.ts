import { objectType, extendType, intArg } from "nexus";

export const sale = objectType({
  name: "sale",
  definition(t) {
    t.model.id();
    t.model.employeeId();
    t.model.employee();
    t.model.product();
    t.model.productId();
    t.model.createdAt();
    t.model.updatedAt();
  },
});
export const saleQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("sale", {
      type: "sale",
      args: {
        employeeId: intArg(),
        productId: intArg(),
      },
      resolve: async (_root, args, ctx) => {
        const { employeeId, productId } = args;
        if (employeeId && productId) {
          return await ctx.prisma.sale.findMany({
            where: {
              employeeId,
              productId,
            },
          });
        } else if (employeeId) {
          return await ctx.prisma.sale.findMany({
            where: {
              employeeId,
            },
          });
        } else if (productId) {
          return await ctx.prisma.sale.findMany({
            where: {
              productId,
            },
          });
        } else {
          return await ctx.prisma.sale.findMany();
        }
      },
    });
  },
});
