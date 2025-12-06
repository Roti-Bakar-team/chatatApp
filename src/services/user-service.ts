import { PrismaClient } from "@/generated/prisma/client";
import { CreatedUser } from "@/types";
import { PrismaPg } from "@prisma/adapter-pg";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
  },
});

export const userService = {
  create: async (data: CreatedUser) => {
    await auth.api.signUpEmail({
      body: {
        email: data.email,
        password: data.password,
        name: data.name,
      },
      asResponse: false,
    });
    return true;
  },
  getAll: async () => {
    return await prisma.user.findMany();
  },
  getOne: async (id: string) => {
    return await prisma.user.findUnique({
      where: { id },
    });
  },
  delete: async (id: string) => {
    return await prisma.user.delete({
      where: { id },
    });
  },
};
