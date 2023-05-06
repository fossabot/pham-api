import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const photoResponse = await fetch('/api/v1/random');
	const photo: { src: string } = await photoResponse.json();

	return { photo };
}) satisfies PageLoad;
