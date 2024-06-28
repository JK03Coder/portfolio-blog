<script lang="ts">
	import { page } from '$app/stores';
	import { MetaTags } from 'svelte-meta-tags';

	const { data } = $props();
</script>

<MetaTags
	title="Justin Kempton"
	description="I'm a software developer based in NZ. I build web apps with Svelte and SvelteKit."
	canonical={$page.url.toString()}
/>

<article class="prose mx-auto max-w-prose">
	{@html data.global.about}
</article>
