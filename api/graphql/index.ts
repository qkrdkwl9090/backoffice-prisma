import { company, companyQuery } from "./_company";
import { product, productQuery } from "./_product";
import { sales, salesQuery } from "./_sales";
import { team, teamQuery } from "./_team";
import { user, userQuery } from "./_user";
import { employee, employeeQuery } from "./_employee";
import { sessionMutation } from "./session";

export const types = {
  company,
  product,
  sales,
  team,
  user,
  employee,
};
export const query = {
  companyQuery,
  productQuery,
  salesQuery,
  teamQuery,
  userQuery,
  employeeQuery,
};
export const mutation = { sessionMutation };
