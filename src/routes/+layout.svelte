<script>
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import { dev } from '$app/environment';

	import Sun from 'lucide-svelte/icons/sun';
	import Moon from 'lucide-svelte/icons/moon';

	import { resetMode, setMode } from 'mode-watcher';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { Button } from '$lib/components/ui/button/index';

	const { children } = $props();
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
			<div class="flex gap-2">
				<Button
					variant="ghost"
					size="icon"
					class="hover:bg-card"
					href="https://github.com/JK03Coder"
					target="_blank"
					><svg
						viewBox="0 0 256 250"
						width="256"
						height="250"
						fill="currentColor"
						xmlns="http://www.w3.org/2000/svg"
						preserveAspectRatio="xMidYMid"
						class="h-5 w-5"
					>
						<path
							d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z"
						/>
					</svg>
				</Button>
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
	</div>
	<div class="my-2 px-4 sm:px-6 md:mt-4 lg:px-8">
		{@render children()}
	</div>
</div>

<ModeWatcher disableTransitions={false}></ModeWatcher>

<div class="custom-gradient fixed inset-0 -z-50" aria-hidden="true" role="presentation"></div>
