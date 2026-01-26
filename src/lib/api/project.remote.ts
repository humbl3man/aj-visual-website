import { query } from '$app/server';
import getSanityFromRequest from '$lib/helpers/getSanityFromRequest';
import type { Project } from '$lib/sanity.schema';
import { defineQuery } from '@sanity/sveltekit';
import { z } from 'zod';

export const getProjects = query(async () => {
	const sanity = getSanityFromRequest();
	const query = defineQuery(`
  	*[_type == "project"]{
  		title,
  		description,
			slug,
  		"images": images[]{
  			// The '->' is mandatory to access metadata
  			"asset": asset->{
  				_id,
  				url,
  				metadata {
  					lqip,
  					dimensions {
  						aspectRatio,
  						width,
  						height
  					}
  				}
  			}
  		}
  	}
  `);
	const { client } = sanity;
	// useCdn controls whether to use CDN cached results. When preview is enabled
	// we should not use the CDN so edits show immediately.
	const options = { useCdn: true };
	const result = await client.fetch<Project[]>(query, {}, options);
	const projects = result;

	return { projects };
});

export const getProjectBySlug = query(z.string(), async (slug) => {
	const sanity = getSanityFromRequest();
	const query = defineQuery(`
		*[_type == "project" && slug.current == $slug][0]{
			title,
			description,
			"images": images[]{
				// The '->' is mandatory to access metadata
				"asset": asset->{
					_id,
					url,
					metadata {
						lqip,
						dimensions {
							aspectRatio,
							width,
							height
						}
					}
				}
			}
		}
	`);
	const project = await sanity.client.fetch<Project>(query, { slug });
	return {
		project
	};
});
