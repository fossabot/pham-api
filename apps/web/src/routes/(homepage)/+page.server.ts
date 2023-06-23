import type { PageServerLoad } from './$types';
import { client } from '$lib/sanity/client';
import groq from 'groq';

export const load = (async () => {
	const count = await client.fetch<number>(
		groq`count(*[_type == "photo" && !(_id in path("drafts.**")) && hide == false])`
	);

	return { count };
}) satisfies PageServerLoad;
