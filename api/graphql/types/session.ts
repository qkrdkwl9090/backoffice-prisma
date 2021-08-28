import { objectType } from "nexus";

export const session = objectType({
  name: "session",
  definition(t) {
    t.boolean("success");
    t.string("token");
    t.string("header");
  },
});
