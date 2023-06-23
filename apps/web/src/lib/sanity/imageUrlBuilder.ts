import { client } from './client.server';
import imageUrlBuilder from '@sanity/image-url';

export const builder = imageUrlBuilder(client);
