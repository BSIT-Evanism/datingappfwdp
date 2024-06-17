import { PrismaAdapter } from "@lucia-auth/adapter-prisma";
import prisma from "./db";


export const adapter = new PrismaAdapter(prisma.session, prisma.user)