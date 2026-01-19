import { getProjects } from '$lib/api/project.remote';

export const load = async () => {
	const { projects } = await getProjects();
	return {
		projects
	};
};
