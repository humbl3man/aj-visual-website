import { getLandingPageData } from '$lib/api/landing.remote';

export const load = async () => {
	const { landingPage } = await getLandingPageData();
	return {
		landingPage
	};
};
