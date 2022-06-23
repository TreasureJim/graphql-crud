import { extendType, nonNull, nullable, objectType, stringArg } from "nexus";
import { Product } from "./Product";

export const Store = objectType({
	name: "Store",
	definition(t) {
		t.string("id");
		t.string("name");
		t.string("description");
		t.string("imageUrl");

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

		t.field("storeById", {
			type: Store,
			args: {
				id: nonNull(stringArg()),
			},
			resolve(_parent, args, ctx) {
				const store = ctx.prisma.store.findFirst({
					where: {
						id: args.id,
					},
				});

				if (!store) throw new Error(`Could not find store with id: ${args.id}`);
				return store;
			},
		});
	},
});

export const StoreMutation = extendType({
	type: "Mutation",
	definition(t) {
		t.nonNull.field("createStore", {
			type: Store,
			args: {
				name: nonNull(stringArg()),
				description: nullable(stringArg()),
				imageUrl: nullable(stringArg()),
			},
			async resolve(_parent, args, ctx) {
				if (!ctx.user) {
					throw new Error("You need to be logged in to create a store");
				}

				const newStore = {
					name: args.name,
					description: args.description,
					userId: ctx.userId!,
				};

				return await ctx.prisma.store.create({
					data: newStore,
				});
			},
		});
	},
});
