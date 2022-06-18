import { extendType, objectType } from "nexus";
import { Product } from "./Product";
import { User } from "./User";

export const Store = objectType({
	name: "Store",
	definition(t) {
		t.string("id");
		t.string("name");
		t.string("description");
		t.string("imageUrl");

		// t.field("user", {
		// 	type: User,
		// 	async resolve(parent, _args, ctx) {
		// 		return await ctx.prisma.store
		// 			.findFirst({
		// 				where: {
		// 					id: parent.id!,
		// 				},
		// 			})
		// 			.user();
		// 	},
		// });

		t.list.field("products", {
			type: Product,
			async resolve(parent, _args, ctx) {
				return await ctx.prisma.store
					.findUnique({
						where: {
							id: parent.id!,
						},
					})
					.products();
			},
		});
	},
});

export const StoresQuery = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.list.field("stores", {
			type: Store,
			resolve(_parent, _args, ctx) {
				return ctx.prisma.store.findMany();
			},
		});
	},
});
