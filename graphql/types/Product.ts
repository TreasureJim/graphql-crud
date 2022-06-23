import { extendType, nonNull, objectType, stringArg } from "nexus";
import { Store } from "./Store";

export const Product = objectType({
	name: "Product",
	definition(t) {
		t.string("id");
		t.string("name");
		t.string("description");
		t.float("price");
		t.string("imageUrl");

		t.field("store", {
			type: Store,
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
		t.field("productById",
			{
				type: Product,
				args: {
					id: nonNull(stringArg()),
				},
				resolve(_parent, args, ctx) {
					const product = ctx.prisma.product.findFirst({
						where: {
							id: args.id,
						},
					});
					if (!product) throw new Error(`Could not find Product with id: ${args.id}`);

					return product;
				},
			},
		);
	},
});
