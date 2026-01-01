<script lang="ts">
	import type { SanityImageAssetReference } from '$lib/sanity.schema';
	import { urlFor } from '$lib/sanityImageUrl';
	import type { SanityAsset, SanityImageObject, SanityImageSource } from '@sanity/image-url';
	import type { HTMLAttributes } from 'svelte/elements';

	type ImageProps = HTMLAttributes<HTMLImageElement> & {
		asset: SanityImageAssetReference;
		image?: SanityImageObject;
		width: number;
		height: number;
		alt?: string;
	};

	const { image, asset, width, height, alt, ...rest }: ImageProps = $props();
</script>

{#if asset}
	<img src={urlFor(asset).width(width).height(height).url()} alt={alt || ''} {...rest} />
{:else if image}
	<img src={urlFor(image).width(width).height(height).url()} alt={alt || ''} {...rest} />
{/if}
