import type { Serve } from "bun";

export const server = {
	fetch(request) {
		return new Response("Hello World!");
	},
} satisfies Serve;
