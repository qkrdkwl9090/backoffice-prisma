import { company, companyQuery } from "./_company";
import { product, productQuery } from "./_product";
import { sale, saleQuery } from "./_sale";
import { team, teamQuery } from "./_team";
import { user, userQuery } from "./_user";
import { employee, employeeQuery } from "./_employee";
import { sessionMutation } from "./session";

export const types = {
  company,
  product,
  sale,
  team,
  user,
  employee,
};
export const query = {
  companyQuery,
  productQuery,
  saleQuery,
  teamQuery,
  userQuery,
  employeeQuery,
};
export const mutation = { sessionMutation };
