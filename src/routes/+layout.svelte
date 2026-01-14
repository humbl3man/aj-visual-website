<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { PreviewMode, VisualEditing } from '@sanity/sveltekit';
	import { getSiteMetaData } from '$lib/api/settings.remote';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children, data } = $props();
	const {
		previewEnabled,
		metadata: { siteTitle }
	} = data;
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Domine:wght@400..700&family=Figtree:ital,wght@0,300..900;1,300..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<PreviewMode enabled={previewEnabled}>
	<VisualEditing enabled={previewEnabled}>
		<Header {siteTitle} />
		<main>{@render children()}</main>
		<Footer {siteTitle} />
	</VisualEditing>
</PreviewMode>
