<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { PreviewMode, VisualEditing } from '@sanity/sveltekit';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children, data } = $props();
	const siteTitle = $derived(data.metadata.siteTitle);
</script>

<svelte:head>
	<title>Family & Lifestyle Photographer in Los Angeles | {siteTitle}</title>
	<meta
		name="description"
		content="Natural, timeless photography for families, couples, and milestones in Los Angeles. Book a relaxed, stress-free photo session."
	/>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<div class="flex min-h-dvh flex-col">
	<Header {siteTitle} />
	<main class="flex-1">{@render children()}</main>
	<Footer {siteTitle} />
</div>
