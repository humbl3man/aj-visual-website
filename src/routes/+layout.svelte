<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { PreviewMode, VisualEditing } from '@sanity/sveltekit';
	import { getSiteMetaData } from '$lib/api/settings.remote';
	import Header from '$lib/components/Header.svelte';

	let { children, data } = $props();
	const { previewEnabled } = data;
	const {
		metadata: { siteTitle }
	} = await getSiteMetaData();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin={'use-credentials'} />
	<link
		href="https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap"
		rel="stylesheet"
	/>
</svelte:head>
<PreviewMode enabled={previewEnabled}>
	<VisualEditing enabled={previewEnabled}>
		<Header {siteTitle} />
		<main>{@render children()}</main>
	</VisualEditing>
</PreviewMode>
