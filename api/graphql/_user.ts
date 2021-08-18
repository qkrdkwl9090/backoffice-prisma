import { objectType } from 'nexus'

export const user = objectType({
  name: 'user',            
  definition(t) {
    t.model.id();
    t.model.companyId();
    t.model.teamId();
    t.model.name();
    t.model.birthday();
    t.model.email();
    t.model.saleCount();
  },
})