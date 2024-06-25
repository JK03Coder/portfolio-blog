<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { dev } from '$app/environment';
</script>

<svelte:head>
	{#if dev === false}
		<script
			defer
			src="https://umami.jkem.xyz/script.js"
			data-website-id="2f94d844-0f0d-4372-8ca2-47f4b439cc92"
		></script>
	{/if}
</svelte:head>

<slot></slot>
<ModeWatcher disableTransitions={false}></ModeWatcher>

<div class="custom-gradient fixed inset-0 -z-50" aria-hidden="true" role="presentation"></div>
