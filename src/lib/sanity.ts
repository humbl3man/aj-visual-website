import { createClient } from '@sanity/sveltekit';
import {
	PUBLIC_SANITY_DATASET,
	PUBLIC_SANITY_PROJECT_ID,
	PUBLIC_SANITY_STUDIO_URL
} from '$env/static/public';
import { dev } from '$app/environment';

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	apiVersion: '2025-10-01',
	useCdn: true,
	stega: {
		enabled: dev ? true : false,
		studioUrl: PUBLIC_SANITY_STUDIO_URL
	}
});
