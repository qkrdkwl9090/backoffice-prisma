import { objectType } from 'nexus'

export const product = objectType({
  name: 'product',            
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.createdAt();
  },
})