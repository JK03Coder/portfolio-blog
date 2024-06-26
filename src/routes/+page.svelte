<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article class="prose mx-auto max-w-prose">
	{@html data.global.about}
</article>
