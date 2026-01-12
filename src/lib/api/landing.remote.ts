import { query } from '$app/server';
import getSanityFromRequest from '$lib/helpers/getSanityFromRequest';
import type { LandingPage } from '$lib/sanity.schema';
import { defineQuery } from '@sanity/sveltekit';

export const getLandingPageData = query(async () => {
	const query = defineQuery(`
	*[_type == "landingPage"][0] {
      heroHeadline,
      heroSubtext,
      ctaText,
      "heroImage": heroImage {
        asset->{
          _id,
          url,
          metadata {
            lqip,
            dimensions {
              aspectRatio,
              height,
              width
            }
          }
        }
      }
    }
    `);

	const sanity = getSanityFromRequest();
	const { client } = sanity;
	const landingPage = await client.fetch<LandingPage>(query);

	return {
		landingPage
	};
});
