import { createDirectus, rest } from '@directus/sdk';
import { DIRECTUS_URL } from '$env/static/private';

function getDirectusInstance(fetch: any) {
	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus<Schema>(DIRECTUS_URL, options).with(rest());
	return directus;
}

export default getDirectusInstance;

// Directus Schema for typescript and Sveltekit

interface Schema {
	global: global;
	posts: post[];
}

export interface global {
	id: number;
	about: string;
}

export interface post {
	id: number;
	slug: string;
	title: string;
	description: string;
	content: string;
	publish_date: string;
}
