<script lang="ts">
	import { getLandingPageData } from '$lib/api/landing.remote';
	import { buttonVariants } from '$lib/components/ui/button';
	import Image from '../components/SanityImage.svelte';

	import aboutImage from '$lib/assets/img/april-about.jpg';

	const { landingPage } = await getLandingPageData();
	console.log(landingPage.testimonials);
</script>

<!-- hero -->
<section>
	<div class="relative z-1 flex items-center justify-center py-32 lg:min-h-[70dvh]">
		<div
			class="absolute top-0 left-0 -z-1 h-full w-full bg-cover brightness-60"
			style={`background-image: url("${landingPage.heroImage.asset.url}")`}
		></div>
		<div class="mx-auto max-w-[90dvw] text-white md:max-w-[800px]">
			<h1 class="mb-8 font-serif text-3xl font-bold sm:text-5xl md:text-6xl">
				{landingPage.heroHeadline}
			</h1>
			<p class="text-xl lg:text-2xl">{landingPage.heroSubtext}</p>
			<div class="mt-8 flex items-center gap-4">
				<a
					href="/contact"
					class={buttonVariants({
						variant: 'accent',
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

<!-- how it works -->
<section class="container mx-auto my-16 max-w-7xl px-4">
	<h2 class="mb-6 font-serif text-2xl font-semibold md:text-3xl">What to expect</h2>
	<div class="grid gap-8 md:grid-cols-3">
		<div class="rounded-sm border-2 border-accent p-5 shadow-xs">
			<div class="mb-2 text-2xl font-semibold text-accent">Step 1: Reach out</div>
			<div>Send a message with the type of session you’re looking for and a preferred date.</div>
		</div>
		<div class="rounded-sm border-2 border-accent p-5 shadow-xs">
			<div class="mb-2 text-2xl font-semibold text-accent">Step 2: Plan your session</div>
			<div>We’ll choose a location, time, and vibe that feels right for you.</div>
		</div>
		<div class="rounded-sm border-2 border-accent p-5 shadow-xs">
			<div class="mb-2 text-2xl font-semibold text-accent">Step 3: Reach out</div>
			<div>Relax and have fun &mdash; I’ll guide you so everything feels natural.</div>
		</div>
	</div>
</section>

<!-- TODO: portfolio reel -->
<section class="container mx-auto my-16 max-w-7xl px-4">
	<h2 class="mb-6 font-serif text-2xl font-semibold md:text-3xl">Portfolio</h2>
</section>

<!-- about -->
<section class="container mx-auto my-16 max-w-280 px-4">
	<div class="grid gap-8 sm:grid-cols-2">
		<div class="max-h-130 overflow-hidden rounded-sm shadow-sm">
			<img
				src={aboutImage}
				class="h-full w-full object-cover"
				alt="Woman holding a camera"
				loading="lazy"
			/>
		</div>
		<div>
			<h3 class="mb-6 font-serif text-2xl font-semibold md:text-3xl">Hi, I am April</h3>
			<p class="mb-2">
				I’m a family and maternity photographer who believes the best photos come from real
				connection, not stiff posing. My sessions are relaxed and guided, so you can be yourself and
				actually enjoy the experience.
			</p>

			<p>
				I focus on capturing natural moments, genuine emotion, and the small details you’ll want to
				remember years from now. Whether it’s a quiet moment or a burst of laughter, my goal is to
				create photos that feel honest, warm, and timeless.
			</p>
		</div>
	</div>
</section>

<!-- testimonials (social proof) -->
{#if landingPage.testimonials && landingPage.testimonials.length > 0}
	<section class="container mx-auto my-16 max-w-7xl px-4">
		<h2 class="mb-6 font-serif text-2xl font-semibold md:text-3xl">Kind words from past clients</h2>
		<div class="grid gap-8 md:grid-cols-3">
			{#each landingPage.testimonials.slice(0, 3) as testimonial (testimonial._key)}
				<div class="rounded-sm bg-white p-5 shadow-xs">
					<div class="mb-2 text-lg italic">"{testimonial.quote}&quot;</div>
					<div class="text-sm font-semibold">- {testimonial.author}</div>
				</div>
			{/each}
		</div>
	</section>
{/if}

<section class="container mx-auto my-24 max-w-7xl px-4">
	<h2 class="mb-2 text-center font-serif text-2xl font-semibold md:text-3xl">
		How about a photo session that’s actually fun?
	</h2>
	<p class="mb-8 text-center text-xl">
		Enjoy a stress-free experience and end up with photos you love.
	</p>
	<div class="flex items-center justify-center">
		<a href="/contact" class={buttonVariants({ variant: 'accent', size: 'lg' })}>
			{landingPage.ctaText || 'Book a Session'}
		</a>
	</div>
</section>
