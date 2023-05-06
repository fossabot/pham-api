import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';
import { BASE_URL } from '$env/static/private';
const photos = import.meta.glob('$/static/photos/*.*');

export const GET = (() => {
	const photoPaths = Object.keys(photos);
	const random = Math.floor(Math.random() * photoPaths.length);
	const randomPhoto = photoPaths[random].substring(7);

	return json(
		{
			src: new URL(randomPhoto, BASE_URL).toString()
		},
		{
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		}
	);
}) satisfies RequestHandler;
