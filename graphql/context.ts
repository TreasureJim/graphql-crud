import { User } from './types/User';
import { getSession } from "next-auth/react";
import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma";
import { DefaultSession } from "next-auth";

export type Context = {
	user?: DefaultSession["user"];
	userId?: string;
	prisma: PrismaClient;
};

// eslint-disable-next-line require-jsdoc
export async function createContext({ req, res }: any): Promise<Context> {
	const session = await getSession({ req: req });
	if (!session) return { prisma };

	const { user } = session;

	const userId = (await prisma.user.findFirst({
		where: {
			email: user?.email!,
		},
		select: {
			id: true,
		},
	}))?.id;

	return {
		user,
		userId,
		prisma,
	};
}
