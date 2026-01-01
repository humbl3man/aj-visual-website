import { getRequestEvent, query } from '$app/server';
import type { Settings } from '$lib/sanity.schema';
import { defineQuery } from '@sanity/sveltekit';

function getSanityObject() {
	const {
		locals: { sanity }
	} = getRequestEvent();
	return sanity;
}

export const getSiteMetaData = query(async () => {
	const sanity = getSanityObject();
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
