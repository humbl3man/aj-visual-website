<script lang="ts">
	import { getProjects } from '$lib/api/project.remote';
	import Image from '../../components/Image.svelte';

	const { projects } = await getProjects();
</script>

<div class="container mx-auto mt-8 px-4">
	<h1 class="mb-8 text-6xl font-bold">Projects</h1>

	<section class="grid grid-cols-4 gap-6">
		{#each projects as project}
			<article class="rounded-sm border border-gray-200 p-4 shadow-2xl">
				<div class="mb-4 text-xl font-bold">{project.title}</div>
				{#if project.images?.length}
					<div class="project-image-row grid grid-cols-4 gap-4">
						{#each project.images as image}
							<div class="object-fit">
								<Image asset={image?.asset!} width={300} height={300} />
							</div>
						{/each}
					</div>
				{/if}
			</article>
		{/each}
	</section>
</div>

<style lang="postcss">
	.project-image-row > img {
		@apply block w-full max-w-75 object-center;
	}
</style>
