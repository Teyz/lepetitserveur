import { client } from "./contentful";

export const primeQueries = {
	getPrimes: async () => {
		return await client.getEntries({
            content_type: "prime",
        });
	},
};