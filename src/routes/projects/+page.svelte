<script lang="ts">
	import { getProjects } from '$lib/api/project.remote';
	import Image from '../../components/Image.svelte';

	const { projects } = await getProjects();
</script>

<div class="container mx-auto max-w-7xl px-4">
	<h1 class="mb-8 text-4xl font-semibold">Projects</h1>

	<section class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
		{#each projects as project}
			{@const thumbnailImageAsset = project.images && project?.images[0].asset}
			{@const url = project.slug?.current}
			<a href={`/projects/${url}`}>
				<article class="group relative z-1 overflow-hidden">
					<div
						class="absolute top-[50%] left-[50%] z-10 flex -translate-x-[50%] -translate-y-[50%] flex-col gap-4"
					>
						<div class="text-center font-semibold text-white sm:text-xl md:text-2xl">
							{project.title}
						</div>
					</div>
					<Image
						asset={thumbnailImageAsset!}
						width={600}
						height={600}
						class="block h-full w-full object-cover brightness-50 transition duration-500 group-hover:brightness-75"
					/>
				</article>
			</a>
		{/each}
	</section>
</div>
