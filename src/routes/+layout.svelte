<script lang="ts">
	import './layout.css';
	import favicon from '$lib/assets/favicon.svg';
	import { PreviewMode, VisualEditing } from '@sanity/sveltekit';

	let { children, data } = $props();
	const { previewEnabled } = data;
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<PreviewMode enabled={previewEnabled}>
	<VisualEditing enabled={previewEnabled}>
		{@render children()}
	</VisualEditing>
</PreviewMode>
