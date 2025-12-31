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
    *[_type == "project"] { _id, title, slug, images}
  `);
	const { previewEnabled, client } = sanity;
	const options = { stega: previewEnabled ? true : false };
	const projects = await client.fetch<Project[]>(query, {}, options);
	return { projects };
});
