<script lang="ts">
	import type { PageData } from './$types';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import * as Card from '$lib/components/ui/card';

	export let data: PageData;

	// e.g. 2022-01-31 -> January 31st, 2022
	function formatDate(dateStr: string) {
		const date = new Date(dateStr),
			day = date.getDate(),
			suffix = ['th', 'st', 'nd', 'rd'][
				day % 10 > 3 || [11, 12, 13].includes(day % 100) ? 0 : day % 10
			];
		return date
			.toLocaleString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })
			.replace(String(day), day + suffix);
	}
</script>

{#await data.posts}
	{#each Array(data.total_posts) as _, index}
		<Card.Root class="mb-4">
			<Card.Header>
				<Card.Title tag="h2">
					<Skeleton
						class="h-[40px] rounded-full"
						style="max-width: {Math.min(8, (index*4+6)%10+2)}00px"
					/>
				</Card.Title>
				<Card.Description>
					<Skeleton class="h-[20px] w-[270px] rounded-full" />
				</Card.Description>
			</Card.Header>
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
			</Card.Root>
		</a>
	{/each}
{:catch error}
	<h2 class="text-red-500">An error occurred while fetching the posts.</h2>
{/await}
