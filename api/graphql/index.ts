import { company, companyQuery } from "./_company";
import { product, productQuery } from "./_product";
import { sales, salesQuery } from "./_sales";
import { team, teamQuery } from "./_team";
import { user, userQuery } from "./_user";

export const types = {
  company,
  product,
  sales,
  team,
  user,
};
export const query = {
  companyQuery,
  productQuery,
  salesQuery,
  teamQuery,
  userQuery,
};
export const mutation = {};
