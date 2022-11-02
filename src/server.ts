import { PrismaClient } from "@prisma/client";
import cors from "@fastify/cors";
import Fastify from "fastify";

const prisma = new PrismaClient({
	log: ["query"],
});

async function bootstrap() {
	const fastify = Fastify({ logger: true });

	await fastify.register(cors, {
		origin: true, // allow all origins - not recommended in production
	});

	fastify.get("/pools/count", async () => {
		return {
			// count: await prisma.table.count(),
			count: 1,
		};
	});

	await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();
