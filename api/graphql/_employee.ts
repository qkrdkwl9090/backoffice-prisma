import { extendType, intArg, objectType } from "nexus";

export const employee = objectType({
  name: "employee",
  definition(t) {
    t.model.id();
    t.model.companyId();
    t.model.company();
    t.model.teamId();
    t.model.team();
    t.model.name();
    t.model.birthday();
    t.model.email();
    t.model.saleCount();
    t.model.sale();
  },
});
export const employeeQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("employee", {
      type: "employee",
      args: {
        companyId: intArg(),
        teamId: intArg(),
      },
      async resolve(_root, args, ctx) {
        const { companyId, teamId } = args;
        if (companyId && teamId) {
          return await ctx.prisma.employee.findMany({
            where: {
              companyId,
              teamId,
            },
          });
        } else if (companyId) {
          return await ctx.prisma.employee.findMany({
            where: {
              companyId,
            },
          });
        } else if (teamId) {
          return await ctx.prisma.employee.findMany({
            where: {
              teamId,
            },
          });
        } else {
          return await ctx.prisma.employee.findMany();
        }
      },
    });
  },
});
