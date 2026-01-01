<script lang="ts">
	import { getLandingPageData } from '$lib/api/landing.remote';
	import { cn } from '$lib/utils';
	import Image from '../components/Image.svelte';

	const { data } = $props();
	const { siteTitle, heroText } = data.metadata;
	const { landingPage } = await getLandingPageData();
	console.log(landingPage);
</script>

<!-- hero -->
<section class="relative z-1">
	<Image
		asset={landingPage.heroImage?.asset!}
		width={1400}
		height={1400}
		aria-hidden={true}
		class={cn('block h-full max-h-75 w-full object-cover sm:max-h-90 md:max-h-100 lg:max-h-120')}
	/>
	<div class="container mx-auto max-w-5xl px-4 py-24">
		<h1 class="mb-5 text-center text-7xl font-bold">{landingPage.heroHeadline}</h1>
		<p class="text-center text-xl">{landingPage.heroSubtext}</p>
	</div>
</section>
