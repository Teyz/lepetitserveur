import { primeQueries } from "$lib/queries/prime";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const primes = await primeQueries.getPrimes();

	return {
		primes: primes.items
	};
};