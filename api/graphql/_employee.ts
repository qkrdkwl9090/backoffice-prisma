import { extendType, intArg, objectType } from "nexus";

export const employee = objectType({
  name: "employee",
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
export const employeeQuery = extendType({
  type: "Query",
  definition(t) {
    t.list.field("employee", {
      type: "employee",
      args: {
        id: intArg(),
        companyId: intArg(),
        teamId: intArg(),
      },
      resolve: async (_root, args, ctx) => {
        const { id, companyId, teamId } = args;
        return await ctx.prisma.employee.findMany({
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
