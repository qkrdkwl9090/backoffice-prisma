import { objectType } from 'nexus'

export const company = objectType({
  name: 'company',            
  definition(t) {
    t.model.id();
    t.model.name();
    t.model.domain();
  },
})