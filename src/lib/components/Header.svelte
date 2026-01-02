<script lang="ts">
	import { page } from '$app/state';
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

	console.log(page.url.pathname);

	$inspect(`nav offset value -- ${navigationYOffset}`);
</script>

<div
	class={cn('relative z-1', {
		'mb-8': page.url.pathname !== '/'
	})}
	bind:this={headerParentElement}
>
	<div class="container mx-auto max-w-7xl">
		<div class="flex justify-between gap-2 px-4 py-6">
			<a href="/" class="block text-xl font-bold hover:text-indigo-800 md:text-2xl">{siteTitle}</a>
			<button
				class={cn(['sm:hidden', 'cursor-pointer'])}
				onclick={() => (isNavigationOpen = !isNavigationOpen)}><MenuIcon /></button
			>
			<!-- mobile navigation -->
			<nav
				class={cn([`absolute top-full left-0 z-100 w-dvw bg-white py-10 shadow-2xl`, 'sm:hidden'], {
					hidden: !isNavigationOpen,
					block: isNavigationOpen
				})}
			>
				<ul class={cn(['grid gap-2'])}>
					{#each navlinks as { href, title }}
						<li>
							<a
								onclick={() => (isNavigationOpen = false)}
								class={cn([
									'block rounded-md px-3 py-2 text-center text-xl font-normal text-black transition duration-200 hover:text-indigo-700'
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
									'block rounded-md px-3 py-2 font-normal transition duration-200 hover:bg-indigo-700 hover:text-white',
									{
										'bg-indigo-700 text-white': page.url.pathname.includes(href)
									}
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
