import { nexusPrisma } from 'nexus-plugin-prisma'
import { makeSchema } from 'nexus'
import * as types from './graphql'
import { join } from 'path'

const ext = process.env.AS_JAVASCRIPT === "true" ? "js" : "ts";
export const schema = makeSchema({
  types,
  plugins: [nexusPrisma({experimentalCRUD: true})],
  outputs: {
    typegen: join(__dirname, '..', 'nexus-typegen.ts'),
    schema: join(__dirname, '..', 'schema.graphql'),
  },
  contextType: {                                    
    module: join(__dirname, `./context.${ext}`),        
    export: "Context",                              
  },
})