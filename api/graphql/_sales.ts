import { objectType } from 'nexus'

export const sales = objectType({
  name: 'sales',            
  definition(t) {
    t.model.id();
    t.model.userId();
    t.model.productId();
  },
})