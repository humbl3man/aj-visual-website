<script lang="ts">
	import * as AspectRatio from '$lib/components/ui/aspect-ratio';
	import { cn } from '$lib/utils';

	type ImageProps = {
		asset: {
			url: string;
			metadata?: {
				dimensions?: {
					aspectRatio: number;
				};
				lqip?: string;
			};
		};
		alt?: string;
		width?: number;
		ratio?: number;
		class?: string;
		imgClass?: string;
		[key: string]: any;
	};

	let {
		asset,
		alt,
		width = 800,
		ratio, // e.g., 1 for square, 1.5 for landscape
		class: className, // container class
		imgClass, // image-specific class
		...rest
	}: ImageProps = $props();

	let isLoaded = $state(false);

	// Fallback to natural metadata if no ratio is passed
	const derivedRatio = $derived(ratio || asset?.metadata?.dimensions?.aspectRatio || 1);
	const src = $derived(asset?.url ? `${asset.url}?w=${width}&auto=format` : '');
</script>

<div class={cn('overflow-hidden rounded-lg bg-muted', className)}>
	<AspectRatio.Root ratio={derivedRatio}>
		{#if asset?.metadata?.lqip}
			<img
				src={asset.metadata.lqip}
				alt={alt || ''}
				class="absolute inset-0 h-full w-full scale-110 object-cover blur-xl"
				class:hidden={isLoaded}
			/>
		{/if}

		<img
			{src}
			{alt}
			class={cn(
				'h-full w-full object-cover transition-all duration-700',
				isLoaded ? 'opacity-100' : 'opacity-0',
				imgClass
			)}
			onload={() => (isLoaded = true)}
			{...rest}
		/>
	</AspectRatio.Root>
</div>
