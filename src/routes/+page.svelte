<script lang="ts">
	import { getLandingPageData } from '$lib/api/landing.remote';
	import { buttonVariants } from '$lib/components/ui/button';
	import Image from '../components/SanityImage.svelte';

	const { landingPage } = await getLandingPageData();
</script>

<!-- hero -->
<section>
	<div class="relative z-1 flex items-center justify-center py-32 lg:min-h-[80dvh]">
		<div
			class="absolute top-0 left-0 -z-1 h-full w-full bg-cover brightness-40"
			style={`background-image: url("${landingPage.heroImage.asset.url}")`}
		></div>
		<div class="mx-auto max-w-[90dvw] text-white md:max-w-[800px]">
			<h1 class="mb-8 text-center font-serif text-3xl font-bold sm:text-6xl lg:text-7xl">
				{landingPage.heroHeadline}
			</h1>
			<p class="text-center text-xl lg:text-2xl">{landingPage.heroSubtext}</p>
			<div class="mt-8 flex items-center justify-center gap-4">
				<a
					href="/contact"
					class={buttonVariants({
						variant: 'secondary',
						size: 'lg'
					})}>{landingPage.ctaText || 'Book a Session'}</a
				>
			</div>
		</div>
		<!-- <Image
			asset={landingPage.heroImage?.asset}
			width={2000}
			height={2000}
			aria-hidden={true}
			ratio={screenWidth > 600 ? 1.5 : 1}
			class={cn('block w-full max-w-full rounded-none object-cover brightness-60 sm:max-h-[80dvh]')}
		/> -->
	</div>
</section>
