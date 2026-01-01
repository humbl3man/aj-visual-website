import { query } from '$app/server';
import getSanityFromRequest from '$lib/helpers/getSanityFromRequest';
import type { LandingPage } from '$lib/sanity.schema';
import { defineQuery } from '@sanity/sveltekit';

export const getLandingPageData = query(async () => {
	const query = defineQuery(`
    *[_type == "landingPage"]
    `);

	const sanity = getSanityFromRequest();
	const { client } = sanity;
	const [result] = await client.fetch<LandingPage[]>(query);

	return {
		landingPage: result
	};
});
