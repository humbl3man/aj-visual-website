<script lang="ts">
	import { getProjectBySlug } from '$lib/api/project.remote';
	import SanityImage from '../../../components/SanityImage.svelte';

	const { params } = $props();
	const { project } = $derived(await getProjectBySlug(params.slug));
	const [heroImage] = project?.images || [];
	const [, ...projectImages] = project?.images || [];
	$inspect(project);
</script>

<div class="flex flex-col gap-16">
	<header class="container mx-auto max-w-7xl px-4">
		<div class="mb-8">
			<SanityImage asset={heroImage.asset} width={1400} alt="" />
		</div>
		<div class="max-w-3xl">
			<h1 class="mb-6 font-serif text-5xl tracking-tighter md:text-7xl">
				{project.title}
			</h1>

			{#if project.description?.length && project.description[0].children}
				<div class="prose prose-stone text-lg leading-relaxed text-muted-foreground md:text-xl">
					<p>{project.description[0]?.children[0]?.text}</p>
				</div>
			{/if}
		</div>
	</header>

	<section class="container mx-auto max-w-7xl px-4">
		<div class="grid grid-cols-2 gap-4 md:grid-cols-4">
			{#each projectImages as image}
				<SanityImage asset={image.asset} alt={project.title} width={600} />
			{/each}
		</div>
	</section>

	<footer class="border-t bg-secondary/20 py-20">
		<div class="container mx-auto flex flex-col items-center px-6 text-center">
			<p class="mb-4 text-sm tracking-widest text-muted-foreground uppercase">Next Project</p>
			<a href="/projects/next-slug" class="group">
				<h2
					class="font-serif text-4xl italic transition-all group-hover:italic md:text-6xl md:not-italic"
				>
					The Next Adventure →
				</h2>
			</a>
		</div>
	</footer>
</div>
