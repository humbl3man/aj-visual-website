<script lang="ts">
	import { ArrowLeftIcon } from '@lucide/svelte';
	import SanityImage from '../../../components/SanityImage.svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Carousel from '$lib/components/ui/carousel';
	import { cn } from '$lib/utils';
	import type { PageProps } from './$types';

	const { data }: PageProps = $props();
	const { title, images, description } = $derived(data.project);
	const galleryImages = $derived(images?.slice(1));
</script>

<svelte:head>
	<title>{`${data.metaProjectTitle} | ${data.metadata.siteTitle}`}</title>
</svelte:head>

<div class="flex flex-col gap-4">
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
					width={1600}
					ratio={1}
					alt=""
					class="block h-full w-full object-cover brightness-55"
				/>
				<div class="absolute bottom-4 left-4 z-2 p-2 sm:bottom-5 sm:left-5 md:bottom-10 md:left-10">
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

	{#if galleryImages?.length}
		<section class="container mx-auto max-w-7xl px-4 sm:px-16">
			<Carousel.Root
				opts={{
					align: 'center',
					containScroll: 'keepSnaps'
				}}
			>
				<Carousel.Content>
					{#each galleryImages as image}
						<Carousel.Item
							class={cn('basis-[60%]', {
								'md:basis-1/5': galleryImages.length > 6,
								'md:basis-1/4': galleryImages.length > 4 || galleryImages.length <= 6,
								'md:basis-1/3': galleryImages.length <= 4
							})}
						>
							{#if image?.asset}
								<SanityImage asset={image?.asset} alt="" width={600} />
							{/if}
						</Carousel.Item>
					{/each}
				</Carousel.Content>
				<Carousel.Previous class="hidden sm:flex" />
				<Carousel.Next class="hidden sm:flex" />
			</Carousel.Root>
			<div class="grid grid-cols-2 gap-4 md:grid-cols-4"></div>
		</section>
	{/if}
</div>
