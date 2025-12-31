<script lang="ts">
	import type { SanityImageAssetReference } from '$lib/sanity.schema';
	import { urlFor } from '$lib/sanityImageUrl';
	import type { SanityAsset, SanityImageObject, SanityImageSource } from '@sanity/image-url';

	const {
		image,
		asset,
		alt,
		width,
		height
	}: {
		asset: SanityImageAssetReference;
		image?: SanityImageObject;
		width: number;
		height: number;
		alt?: string;
	} = $props();
</script>

{#if asset}
	<img src={urlFor(asset).width(width).height(height).url()} alt={alt || ''} />
{:else if image}
	<img src={urlFor(image).width(width).height(height).url()} alt={alt || ''} />
{/if}
