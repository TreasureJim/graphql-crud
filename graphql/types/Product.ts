import { extendType, objectType } from "nexus";
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

export const ProductsQuery = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.field("products",
			{
				type: Product,
				resolve(_parent, _args, ctx) {
					return ctx.prisma.product.findMany();
				},
			});
	},
});
