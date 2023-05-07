import type { RequestHandler } from './$types';
import { error } from '@sveltejs/kit';
import { client } from '$lib/sanity/client';
import { builder } from '$lib/sanity/imageUrlBuilder';
import groq from 'groq';

export const GET = (async ({ params: { id } }) => {
	type Response = {
		image: {
			_type: 'image';
			asset: {
				_type: 'reference';
				_ref: string;
			};
		};
	} | null;
	const photoUrl = await client.fetch<Response>(
		groq`
			*[_id == $id && !(_id in path("drafts.**")) && hide == false][0] {
				image
			}
		`,
		{ id }
	);

	if (!photoUrl) throw error(404, 'Not found');

	const photo = await fetch(builder.image(photoUrl.image).url());

	return photo;
}) satisfies RequestHandler;
