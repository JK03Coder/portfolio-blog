<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { dev } from '$app/environment';

	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';

	import { resetMode, setMode } from 'mode-watcher';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { Button } from '$lib/components/ui/button/index';
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

<div class="mx-auto flex min-h-screen max-w-[60rem] flex-col">
	<div class="px-1 py-1 sm:px-4">
		<div
			class="flex items-center justify-between rounded-lg border bg-accent p-1 text-accent-foreground shadow-sm"
		>
			<div class="flex gap-2">
				<Button variant="ghost" href="/" class="font-bold tracking-wide hover:bg-secondary"
					>Home</Button
				>
				<Button variant="ghost" href="/blog" class="font-bold tracking-wide hover:bg-secondary"
					>Blog</Button
				>
			</div>
			<DropdownMenu.Root>
				<DropdownMenu.Trigger asChild let:builder>
					<Button builders={[builder]} variant="ghost" size="icon" class="hover:bg-secondary">
						<Sun
							class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0"
						/>
						<Moon
							class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100"
						/>
						<span class="sr-only">Toggle theme</span>
					</Button>
				</DropdownMenu.Trigger>
				<DropdownMenu.Content align="end">
					<DropdownMenu.Item on:click={() => setMode('light')}>Light</DropdownMenu.Item>
					<DropdownMenu.Item on:click={() => setMode('dark')}>Dark</DropdownMenu.Item>
					<DropdownMenu.Item on:click={() => resetMode()}>System</DropdownMenu.Item>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
	<div class="my-2 px-4 sm:px-6 md:mt-4 lg:px-8">
		<slot></slot>
	</div>
</div>

<ModeWatcher disableTransitions={false}></ModeWatcher>

<div class="custom-gradient fixed inset-0 -z-50" aria-hidden="true" role="presentation"></div>
