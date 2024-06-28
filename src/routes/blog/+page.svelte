<script lang="ts">
	import { Skeleton } from '$lib/components/ui/skeleton';
	import * as Card from '$lib/components/ui/card';
	import { formatDate } from '$lib/utils';
	import { page } from '$app/stores';
	import { MetaTags } from 'svelte-meta-tags';

	const { data } = $props();
</script>

<MetaTags
	title="Justin Kempton | Blog"
	description="All my blogs are sorted by published date with the newest first."
	canonical={$page.url.toString()}
/>

{#await data.posts}
	{#each Array(Number(data.total_posts)) as _}
		<Card.Root class="mb-4">
			<Card.Header>
				<Card.Title tag="h2">
					<Skeleton
						class="h-[30px] rounded-full"
						style="max-width: {Math.floor(Math.random() * 7) + 2}00px"
					/>
				</Card.Title>
				<Card.Description>
					<Skeleton class="h-[16px] w-[270px] rounded-full" />
				</Card.Description>
			</Card.Header>
			<Card.Content>
				<Skeleton
					class="h-[16px] rounded-full"
					style="max-width: {Math.floor(Math.random() * 7) + 2}00px"
				/>
			</Card.Content>
		</Card.Root>
	{/each}
{:then posts}
	{#each posts as post}
		<a href="/blog/{post.slug}">
			<Card.Root class="mb-4">
				<Card.Header>
					<Card.Title tag="h2" class="text-3xl">{post.title}</Card.Title>
					<Card.Description class="text-md"
						>{formatDate(post.publish_date)} &bull; Justin Kempton</Card.Description
					>
				</Card.Header>
				<Card.Content>
					{post.description}
				</Card.Content>
			</Card.Root>
		</a>
	{/each}
{:catch error}
	<h2 class="text-red-500">An error occurred while fetching the posts.</h2>
{/await}
