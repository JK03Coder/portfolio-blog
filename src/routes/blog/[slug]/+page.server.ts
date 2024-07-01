import getDirectusInstance, { type post } from '$lib/directus';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { readItem } from '@directus/sdk';

export const load = (async ({ fetch, params }) => {
	const directus = getDirectusInstance(fetch);
	try {
		return {
			post: directus.request<post>(readItem('posts', params.slug, {}))
		};
	} catch (err) {
		error(404, 'Post not found');
	}
}) satisfies PageServerLoad;
