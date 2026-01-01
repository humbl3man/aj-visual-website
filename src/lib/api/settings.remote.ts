import { query } from '$app/server';
import getSanityFromRequest from '$lib/helpers/getSanityFromRequest';
import type { Settings } from '$lib/sanity.schema';
import { defineQuery } from '@sanity/sveltekit';

export const getSiteMetaData = query(async () => {
	const sanity = getSanityFromRequest();
	const query = defineQuery(`
    *[_type == "settings"]
  `);
	const { previewEnabled, client } = sanity;
	const options = { stega: previewEnabled ? true : false };
	const [result] = await client.fetch<Settings[]>(query, {}, options);
	return {
		metadata: result
	};
});
