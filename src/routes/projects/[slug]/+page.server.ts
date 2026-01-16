import { getProjectBySlug } from '$lib/api/project.remote';

export const load = async ({ params }) => {
	const data = await getProjectBySlug(params.slug);
	return {
		metaProjectTitle: data.project.title || ''
	};
};
