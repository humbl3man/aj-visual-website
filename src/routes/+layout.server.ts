import { getSiteMetaData } from '$lib/api/settings.remote';

export const load = async ({ locals: { sanity } }) => {
	const { previewEnabled } = sanity;
	const { metadata } = await getSiteMetaData();
	return { previewEnabled, metadata };
};
