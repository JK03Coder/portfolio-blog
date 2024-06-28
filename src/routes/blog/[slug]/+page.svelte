<script lang="ts">
	import type { PageData } from './$types';
	import { formatDate } from '$lib/utils';
	import LoaderCircle from 'lucide-svelte/icons/loader-circle';

	export let data: PageData;
</script>

{#await data.post}
	<div class="mt-36 flex justify-center">
		<LoaderCircle class="h-16 w-16 animate-spin" />
	</div>
{:then post}
	<div class="prose mx-auto max-w-prose text-lg">
		<h1 aria-label="Post Title">{post.title}</h1>
		<div aria-label="Date of Publication" class="text-md mb-6 mt-2 text-muted-foreground">
			{formatDate(post.publish_date)} &bull; Justin Kempton
		</div>
		{@html post.content}
		<footer class="text-center">
			<small>&copy; 2024 Justin Kempton</small>
		</footer>
	</div>
{:catch error}
	<h2 class="text-red-500">Something went wrong while loading the post.</h2>
{/await}
