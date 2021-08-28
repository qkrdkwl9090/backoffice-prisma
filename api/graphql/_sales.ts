import { objectType, extendType, intArg } from "nexus";

export const sales = objectType({
  name: "sales",
  definition(t) {
    t.model.id();
    t.model.employeeId();
    t.model.productId();
  },
});
export const salesQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("sales", {
      type: "sales",
      args: {
        id: intArg(),
        employeeId: intArg(),
        productId: intArg(),
      },
      resolve: async (_root, args, ctx) => {
        const { id, employeeId, productId } = args;
        return await ctx.prisma.sales.findMany({
          where: {
            id,
            employeeId,
            productId,
          },
        });
      },
    });
  },
});
