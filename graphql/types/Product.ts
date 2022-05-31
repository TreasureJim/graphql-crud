import { objectType } from "nexus";
import { User } from "./User";

export const Product = objectType({
  name: "Product",
  definition(t) {
    t.string("id");
    t.string("name");
    t.string("description");
    t.float("price");
    t.string("brand");
    t.string("creatorReview");
    t.string("imageUrl");

    t.field("store", {
      type: User,
      async resolve(parent, _args, ctx) {
        return await ctx.prisma.product
          .findFirst({
            where: {
              id: parent.id!,
            },
          })
          .store();
      },
    });
  },
});
