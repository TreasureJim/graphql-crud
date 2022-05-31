import { objectType } from "nexus";
import { Store } from "./Store";

export const User = objectType({
  name: "User",
  definition(t) {
    t.string("id");
    t.string("email");
    t.field("store", {
      type: Store,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.user
          .findUnique({
            where: {
              id: parent.id!,
            },
          })
          .store();
      },
    });
  },
});
