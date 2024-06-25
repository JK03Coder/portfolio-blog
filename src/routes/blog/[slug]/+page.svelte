<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="prose p-10">
	{#await data.post}
		<h1>Loading post...</h1>
	{:then post}
		<h1>{post.title}</h1>
		<span>{post.publish_date}</span>
		{@html post.content}
	{:catch error}
		{JSON.stringify(error)}
		<h1 class="text-red-500">Something went wrong while loading the post.</h1>
	{/await}
</div>