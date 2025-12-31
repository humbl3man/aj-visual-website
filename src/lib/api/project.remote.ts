import { getRequestEvent, query } from '$app/server';
import type { Project } from '$lib/sanity.schema';
import { defineQuery } from '@sanity/sveltekit';

function getSanityObject() {
	const {
		locals: { sanity }
	} = getRequestEvent();
	return sanity;
}

export const getProjects = query(async () => {
	const sanity = getSanityObject();
	const query = defineQuery(`
    *[_type == "project"] { _id, title, description, slug, images}
  `);
	const { previewEnabled, client } = sanity;
	const options = { stega: previewEnabled ? true : false };
	const result = await client.fetch<Project[]>(query, {}, options);
	const projects = result;

	return { projects };
});
