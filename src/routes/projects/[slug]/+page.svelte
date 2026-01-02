<script lang="ts">
	import { getProjectBySlug } from '$lib/api/project.remote';
	import Image from '../../../components/Image.svelte';

	const { params } = $props();
	const { project } = $derived(await getProjectBySlug(params.slug));
	const [heroImage] = project?.images || [];
	$inspect(project);
</script>

<div class="container mx-auto max-w-7xl px-4">
	{#if heroImage}
		<Image
			asset={heroImage.asset!}
			width={1200}
			height={500}
			alt=""
			aria-hidden={true}
			class="mb-8 block w-full"
		/>
	{/if}
	<h1 class="mb-8 text-4xl font-semibold">{project.title}</h1>
</div>
