<script lang="ts">
	import { getProjects } from '$lib/api/project.remote';
	import { resolve } from '$app/paths';
	import Image from '../../components/SanityImage.svelte';
	import { page } from '$app/state';

	const { projects } = await getProjects();
</script>

<svelte:head>
	<title>Photography Portfolio | {page.data.metadata.siteTitle}</title>
</svelte:head>

<div class="container mx-auto max-w-7xl px-4">
	<h1 class="mb-8 font-serif text-4xl font-semibold">Portfolio</h1>
	{#if projects?.length}
		<section class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{#each projects as project}
				{@const projectThumbnail = project.images && project?.images[0].asset}
				{@const projectUrl = project.slug?.current}
				<a href={resolve(`/projects/${projectUrl}`)}>
					<article class="group asd-hidden relative z-1">
						<div
							class="absolute top-[50%] left-[50%] z-10 flex -translate-x-[50%] -translate-y-[50%] flex-col gap-4"
						>
							<div class="text-center font-semibold text-white sm:text-xl md:text-2xl">
								{project.title}
							</div>
						</div>
						{#if projectThumbnail}
							<Image
								asset={projectThumbnail!}
								width={600}
								class="block h-full w-full object-cover brightness-50 transition duration-500 group-hover:brightness-75"
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
