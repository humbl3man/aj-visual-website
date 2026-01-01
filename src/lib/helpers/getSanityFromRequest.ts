import { getRequestEvent } from '$app/server';

export default function getSanityFromRequest() {
	const {
		locals: { sanity }
	} = getRequestEvent();
	return sanity;
}
