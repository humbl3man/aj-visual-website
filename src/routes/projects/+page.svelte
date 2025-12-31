<script lang="ts">
	import { getProjects } from '$lib/api/project.remote';
	// import { PortableText } from '@portabletext/svelte';
	// import { toHTML } from '@portabletext/to-html';
	import Image from '../../components/Image.svelte';

	const { projects } = await getProjects();
	console.log(projects);
</script>

<div class="container mx-auto mt-8 px-4">
	<h1 class="mb-8 text-6xl font-bold">Projects</h1>

	<section class="grid grid-cols-2 gap-6 lg:grid-cols-3">
		{#each projects as project}
			{@const thumbnailImageAsset = project.images && project?.images[0].asset}
			{@const url = project.slug?.current}
			<a href={`/projects/${url}`}>
				<article
					class="group relative z-1 flex h-full w-full items-center justify-center overflow-hidden rounded-sm bg-gray-100"
				>
					<div
						class="absolute top-[50%] left-[50%] z-20 min-w-[70%] translate-x-[-50%] translate-y-[-50%] p-1 transition-all duration-200 md:opacity-0 md:group-hover:opacity-100"
					>
						<div class="mb-4 text-center text-lg font-bold md:text-2xl">{project.title}</div>
						<!-- <div>
							<PortableText value={project.description} />
						</div> -->
					</div>
					<div
						class="opacity-50 transition-opacity duration-200 md:opacity-100 md:group-hover:opacity-50"
					>
						<Image asset={thumbnailImageAsset!} width={600} height={600} />
					</div>
				</article>
			</a>
		{/each}
	</section>
</div>

<style lang="postcss">
	article img {
		@apply absolute top-0 right-0 bottom-0 left-0 block h-full w-full;
	}
</style>
