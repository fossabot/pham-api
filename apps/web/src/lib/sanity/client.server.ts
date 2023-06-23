import { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } from '$env/static/public';
import { SANITY_TOKEN } from '$env/static/private';
import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: PUBLIC_SANITY_PROJECT_ID,
	dataset: PUBLIC_SANITY_DATASET,
	token: SANITY_TOKEN,
	useCdn: true,
	apiVersion: '2023-05-06'
});
