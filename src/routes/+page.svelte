<script lang="ts">
	import { page } from '$app/stores';
	import { MetaTags } from 'svelte-meta-tags';
	import { Button } from '$lib/components/ui/button/index';

	// const { data } = $props();
</script>

<MetaTags
	title="Justin Kempton"
	description="I'm a software developer based in NZ. I build web apps with Svelte and SvelteKit."
	canonical={$page.url.toString()}
/>

<article class="prose mx-auto max-w-prose">
	<!-- {@html data.global.about} -->
	<img src="profile-picture.jpg" alt="profile" class="float-left mb-8 mr-8" />
	<h1>Hello my name is Justin Kempton</h1>
	<p>
		I'm a software developer based in NZ. I build web apps with Svelte and SvelteKit but I am currently learning more about Laravel the PHP web framework. I am currently
		into Web Development and Indie hacking. I am actively learning Japanese, 1000+ kanji and
		counting.
	</p>

	<h2>Latest project</h2>
	<div class="mt-4 rounded-lg border bg-green-200/50 p-4 text-accent-foreground shadow-sm">
		<img src="robografx.png" alt="roblox avatar" class="float-right ml-4 w-56 object-contain" />
		<h1 style="font-size: 2rem;">Robografx</h1>
		<p class="mb-8">
			Create stunning Roblox avatar images for profiles, banners, or game icons in just a few clicks
			with our fun, easy, and completely free tool!
		</p>
		<Button
			variant="outline"
			class="border-green-500 bg-green-300 hover:bg-green-300/50"
			style="color: black; text-decoration: none; font-weight: 600;"
			target="_blank"
			href="https://robografx.com/">Check it out!</Button
		>
	</div>
</article>
