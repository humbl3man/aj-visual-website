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
		<h1
			class="absolute top-[50%] left-[50%] z-10 mb-5 -translate-x-[50%] -translate-y-[50%] text-center text-4xl font-bold text-white sm:text-5xl md:text-6xl lg:text-7xl"
		>
			{landingPage.heroHeadline}
		</h1>
		<Image
			asset={landingPage.heroImage?.asset!}
			width={1600}
			height={800}
			aria-hidden={true}
			class={cn(
				'block aspect-auto h-fit max-h-75 w-full max-w-full object-cover brightness-60 sm:max-h-85 md:max-h-90 lg:max-h-100'
			)}
		/>
	</div>
</section>
<section class="bg-indigo-50">
	<div class="container mx-auto max-w-5xl px-4 py-24">
		<p class="text-center text-xl">{landingPage.heroSubtext}</p>
		<div class="mt-4 flex items-center justify-center gap-4">
			<a
				href="/contact"
				class={buttonVariants({
					variant: 'default',
					size: 'lg'
				})}>Book a Session</a
			>
		</div>
	</div>
</section>
