import { getSiteMetaData } from '$lib/api/settings.remote';

export const load = async () => {
	const { metadata } = await getSiteMetaData();
	return { metadata };
};
