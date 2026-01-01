<script lang="ts">
	import { getLandingPageData } from '$lib/api/landing.remote';
	import { buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import Image from '../components/Image.svelte';

	const { data } = $props();
	const { siteTitle, heroText } = data.metadata;
	const { landingPage } = await getLandingPageData();
	console.log(landingPage);
</script>

<!-- hero -->
<section>
	<div class="relative z-1">
		<div
			class="absolute top-[50%] left-[50%] z-10 mb-5 -translate-x-[50%] -translate-y-[50%] text-white"
		>
			<h1 class="mb-4 text-center text-3xl font-bold sm:text-4xl md:text-6xl lg:text-7xl">
				{landingPage.heroHeadline}
			</h1>
			<p class="text-center sm:text-xl">{landingPage.heroSubtext}</p>
			<div class="mt-8 flex items-center justify-center gap-4">
				<a
					href="/contact"
					class={buttonVariants({
						variant: 'secondary',
						size: 'lg'
					})}>Book a Session</a
				>
			</div>
		</div>
		<Image
			asset={landingPage.heroImage?.asset!}
			width={1600}
			height={1600}
			aria-hidden={true}
			class={cn(
				'block aspect-auto h-fit w-full max-w-full object-cover brightness-60 sm:max-h-110 lg:max-h-125'
			)}
		/>
	</div>
</section>
