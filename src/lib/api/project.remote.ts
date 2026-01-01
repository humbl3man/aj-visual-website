import { query } from '$app/server';
import getSanityFromRequest from '$lib/helpers/getSanityFromRequest';
import type { Project } from '$lib/sanity.schema';
import { defineQuery } from '@sanity/sveltekit';

export const getProjects = query(async () => {
	const sanity = getSanityFromRequest();
	const query = defineQuery(`
    *[_type == "project"] { _id, title, description, slug, images}
  `);
	const { previewEnabled, client } = sanity;
	const options = { stega: previewEnabled ? true : false };
	const result = await client.fetch<Project[]>(query, {}, options);
	const projects = result;

	return { projects };
});
