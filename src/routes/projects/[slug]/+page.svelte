<script lang="ts">
	import { ArrowLeftIcon } from '@lucide/svelte';
	import { getProjectBySlug } from '$lib/api/project.remote';
	import SanityImage from '../../../components/SanityImage.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import { Spinner } from '$lib/components/ui/spinner';
	import * as Carousel from '$lib/components/ui/carousel';

	const { params } = $props();
	const projectPromise = $derived(getProjectBySlug(params.slug));
</script>

{#await projectPromise}
	<div class="flex min-h-screen items-center justify-center">
		<Spinner class="size-8" />
	</div>
{:then { project }}
	{@const { title, images, description } = project}
	<div class="flex flex-col gap-6">
		<header class="container mx-auto max-w-7xl px-4">
			<div class="mb-2">
				<a
					data-sveltekit-preload-data="tap"
					href="/projects"
					class={buttonVariants({
						variant: 'link',
						size: 'lg'
					})}><ArrowLeftIcon /> All Projects</a
				>
			</div>
			{#if images?.length && images[0].asset}
				<div class="relative z-1 mb-8 overflow-hidden rounded-sm sm:max-h-125 lg:max-h-150">
					<SanityImage
						asset={images[0].asset}
						width={2000}
						ratio={1}
						alt=""
						class="block h-full w-full object-cover brightness-55"
					/>
					<div
						class="absolute bottom-4 left-4 z-2 p-2 sm:bottom-5 sm:left-5 md:bottom-10 md:left-10"
					>
						<h1
							class="max-w-200 font-serif text-2xl font-semibold tracking-tighter text-background sm:text-4xl md:text-6xl"
						>
							{title}
						</h1>
						{#if description?.length && description[0].children}
							<div
								class="prose prose-stone mt-4 max-w-75 leading-tight text-background/80 md:text-xl"
							>
								<p>{description[0]?.children[0]?.text}</p>
							</div>
						{/if}
					</div>
				</div>
			{/if}
		</header>

		{#if images?.length}
			<section class="container mx-auto max-w-275 px-4">
				<h2 class="mb-4 font-serif text-3xl font-semibold">More Images</h2>
				<Carousel.Root>
					<Carousel.Content>
						{#each images?.slice(1) as image}
							<Carousel.Item class="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
								{#if image?.asset}
									<SanityImage asset={image?.asset} alt="" width={600} />
								{/if}
							</Carousel.Item>
						{/each}
					</Carousel.Content>
					<Carousel.Previous />
					<Carousel.Next />
				</Carousel.Root>
				<div class="grid grid-cols-2 gap-4 md:grid-cols-4"></div>
			</section>
		{/if}
	</div>
{:catch error}
	<div class="flex min-h-screen items-center justify-center">
		<p class="text-destructive">Failed to load project: {error.message}</p>
	</div>
{/await}
