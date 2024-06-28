import getDirectusInstance, { type post } from '$lib/directus';
import { readItems, aggregate } from '@directus/sdk';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const directus = getDirectusInstance(fetch);

	const total_posts = await directus.request(
		aggregate('posts', {
			aggregate: { count: '*' }
		})
	);

	return {
		total_posts: total_posts[0].count,
		// Stream this promise to the front end so it can await over there.
		posts: directus.request<post[]>(
			readItems('posts', {
				fields: ['slug', 'title', 'publish_date', 'description'],
				sort: ['-publish_date']
			})
		)
	};
}) satisfies PageLoad;
