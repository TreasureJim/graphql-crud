import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma";

export type Context = {
  prisma: PrismaClient;
};

// eslint-disable-next-line require-jsdoc
export async function createContext({ req, res }: any): Promise<Context> {
	return {
		prisma,
	};
}
