<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>


<div class="prose p-10">
	<h1>{data.total_posts}</h1>
	<ul>
		{#await data.posts}
			<h2>Loading posts...</h2>
		{:then posts}
			{#each posts as post}
				<li>
					<h2>
						<a href="/blog/{post.slug}">{post.title}</a>
					</h2>
					<span>{post.publish_date} &bull; Justin Kempton</span>
				</li>
			{/each}
		{:catch error}
			<h2 class="text-red-500">An error occuurred while fetching the posts.</h2>
		{/await}
	</ul>
</div>
