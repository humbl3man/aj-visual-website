import { getProjectBySlug } from '$lib/api/project.remote';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const data = await getProjectBySlug(params.slug);

	if (!data.project)
		error(404, {
			message: 'Project not found'
		});

	return {
		metaProjectTitle: data.project.title || ''
	};
};
