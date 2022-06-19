import { extendType, objectType } from "nexus";
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

export const UsersQuery = extendType({
	type: "Query",
	definition(t) {
		t.nonNull.field("user", {
			type: User,
			resolve(_parent, _args, ctx) {
				if (!ctx.user || !ctx.user.email) return Error("You must be logged in to get your user details");
				return ctx.prisma.user.findFirst({
					where: {
						email: ctx.user?.email,
					},
				});
			},
		});
	},
});
