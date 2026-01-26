import { getProjectBySlug } from '$lib/api/project.remote';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	const { project } = await getProjectBySlug(params.slug);

	if (!project)
		error(404, {
			message: 'Project not found'
		});

	return {
		project,
		metaProjectTitle: project.title || ''
	};
};
