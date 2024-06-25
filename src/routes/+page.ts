import getDirectusInstance from '$lib/directus';
import type { global } from '$lib/directus';
import { readSingleton } from '@directus/sdk';
import type { PageLoad } from './$types';

export const load = (async () => {
	const directus = getDirectusInstance(fetch);
	return {
		global: await directus.request<global>(readSingleton('global'))
	};
}) satisfies PageLoad;
