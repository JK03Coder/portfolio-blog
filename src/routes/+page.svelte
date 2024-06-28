<script lang="ts">
	import type { PageData } from './$types';
	import { page } from '$app/stores';
	import { Head } from 'svead';

	export let data: PageData;
</script>

<Head
	title="Justin Kempton"
	description="I'm a software developer based in NZ. I build web apps with Svelte and SvelteKit."
	url={$page.url.toString()}
/>

<article class="prose mx-auto max-w-prose">
	{@html data.global.about}
</article>
