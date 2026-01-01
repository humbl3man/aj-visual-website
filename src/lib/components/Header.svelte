<script lang="ts">
	import { cn } from '$lib/utils';
	import MenuIcon from '@lucide/svelte/icons/menu';

	type HeaderProps = {
		siteTitle?: string;
	};
	const { siteTitle }: HeaderProps = $props();
	const navlinks = [
		{
			href: '/projects',
			title: 'Projects'
		},
		{
			href: '/about',
			title: 'About'
		},
		{
			href: '/contact',
			title: 'Contact'
		}
	];

	let isNavigationOpen = $state(false);
	let headerParentElement: HTMLDivElement;
	let navigationYOffset: number = $state(0);
	$effect(() => {
		navigationYOffset = headerParentElement.clientHeight;
	});

	$inspect(`nav offset value -- ${navigationYOffset}`);
</script>

<div class="relative" bind:this={headerParentElement}>
	<div class="container mx-auto max-w-7xl">
		<div class="flex justify-between gap-2 px-4 py-6">
			<div class="text-xl font-bold md:text-2xl">{siteTitle}</div>
			<button
				class={cn(['sm:hidden', 'cursor-pointer'])}
				onclick={() => (isNavigationOpen = !isNavigationOpen)}><MenuIcon /></button
			>
			<!-- mobile navigation -->
			<nav
				class={cn([`absolute left-0 z-100 w-dvw bg-indigo-800 pt-8`, 'sm:hidden'], {
					hidden: !isNavigationOpen,
					block: isNavigationOpen
				})}
				style={`top: ${navigationYOffset}px; height:calc(100dvh - ${navigationYOffset}px)`}
			>
				<ul class={cn(['grid gap-2'])}>
					{#each navlinks as { href, title }}
						<li>
							<a
								onclick={() => (isNavigationOpen = false)}
								class={cn([
									'block rounded-md px-3 py-2 text-center font-normal text-white transition duration-200 hover:bg-indigo-700'
								])}
								{href}>{title}</a
							>
						</li>
					{/each}
				</ul>
			</nav>
			<!-- desktop navigation -->
			<nav class="hidden sm:block">
				<ul class={cn(['grid auto-cols-max grid-flow-col gap-4'])}>
					{#each navlinks as { href, title }}
						<li>
							<a
								onclick={() => (isNavigationOpen = false)}
								class={cn([
									'block rounded-md px-3 py-2 font-normal transition duration-200 hover:bg-indigo-700 hover:text-white'
								])}
								{href}>{title}</a
							>
						</li>
					{/each}
				</ul>
			</nav>
		</div>
	</div>
</div>
