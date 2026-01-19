<script lang="ts">
	import { getProjects } from '$lib/api/project.remote';
	import { resolve } from '$app/paths';
	import Image from '../../components/SanityImage.svelte';
	import { page } from '$app/state';
	import type { PageProps } from './$types';
	import { cn } from '$lib/utils';

	// const { projects } = getProjects();
	const { data }: PageProps = $props();
	const { projects } = $derived(data);
</script>

<svelte:head>
	<title>Photography Portfolio | {page.data.metadata.siteTitle}</title>
</svelte:head>

<div class="container mx-auto max-w-7xl px-4">
	{#if projects?.length}
		<h1 class="mb-8 font-serif text-4xl font-semibold">Portfolio</h1>
		<section
			class={cn('grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4', {
				'lg:grid-cols-3': projects.length <= 3
			})}
		>
			{#each projects as project}
				{@const projectThumbnail = project.images && project?.images[0].asset}
				{@const projectUrl = project.slug?.current}
				<a href={resolve(`/projects/${projectUrl}`)}>
					<article class="group relative z-1">
						<div
							class="absolute top-[50%] left-[50%] z-10 flex -translate-x-[50%] -translate-y-[50%] flex-col gap-4"
						>
							<div
								class="translate-y-0.5 text-center font-semibold text-white sm:text-xl md:text-2xl md:opacity-0 md:transition md:duration-400 md:group-hover:translate-y-0 md:group-hover:opacity-100"
							>
								{project.title}
							</div>
						</div>
						{#if projectThumbnail}
							<Image
								asset={projectThumbnail!}
								width={800}
								class="block h-full w-full object-cover brightness-70 transition duration-500 group-hover:brightness-65"
								alt=""
							/>
						{:else}
							<div>Image Not Found</div>
						{/if}
					</article>
				</a>
			{/each}
		</section>
	{:else}
		<div>
			Currently, there are no projects to display. Please check back later as I continue to update
			my portfolio.
		</div>
	{/if}
</div>
