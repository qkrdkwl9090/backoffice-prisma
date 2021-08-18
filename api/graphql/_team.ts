import { objectType } from 'nexus'

export const team = objectType({
  name: 'team',            
  definition(t) {
    t.model.id();
    t.model.name();
  },
})