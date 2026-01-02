import { query } from '$app/server';
import getSanityFromRequest from '$lib/helpers/getSanityFromRequest';
import type { Project } from '$lib/sanity.schema';
import { defineQuery } from '@sanity/sveltekit';
import {} from 'zod-mini';
import { z } from 'zod/mini';

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

export const getProjectBySlug = query(z.string(), async (slug) => {
	const sanity = getSanityFromRequest();
	const query = defineQuery(`
		*[_type == "project" && slug.current == $slug] { _id, title, description, slug, images }
	`);
	const { client } = sanity;
	const [project] = await client.fetch<Project[]>(query, { slug });
	return {
		project
	};
});
