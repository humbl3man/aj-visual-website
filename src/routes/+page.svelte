<script lang="ts">
	import { MoveRightIcon } from '@lucide/svelte';
	import { resolve } from '$app/paths';
	import { getLandingPageData } from '$lib/api/landing.remote';
	import { buttonVariants } from '$lib/components/ui/button';

	import aboutImage from '$lib/assets/img/april-about.jpg';
	import Image from '../components/SanityImage.svelte';

	const {
		landingPage: { featuredProjects, testimonials, heroHeadline, heroImage, heroSubtext, ctaText }
	} = await getLandingPageData();
</script>

<!-- hero -->
<section>
	<div class="relative z-1 flex items-center justify-center py-32 lg:min-h-[70dvh]">
		{#if heroImage?.asset?.url}
			<div
				class="absolute top-0 left-0 -z-1 h-full w-full bg-cover brightness-60"
				style={`background-image: url("${heroImage.asset.url}")`}
			></div>
		{/if}

		<div class="mx-auto max-w-[90dvw] text-white md:max-w-200">
			<h1 class="mb-8 font-serif text-3xl font-bold sm:text-5xl md:text-6xl">
				{heroHeadline || 'Capturing Genuine Moments'}
			</h1>
			{#if heroSubtext}
				<p class="text-xl lg:text-2xl">{heroSubtext}</p>
			{/if}
			<div class="mt-8 flex items-center gap-4">
				<a
					href={resolve('/contact')}
					class={buttonVariants({
						variant: 'accent',
						size: 'lg'
					})}>{ctaText || 'Book a Session'}</a
				>
			</div>
		</div>
	</div>
</section>

<!-- how it works -->
<section class="container mx-auto my-12 max-w-7xl px-4 md:my-24">
	<h2 class="mb-6 font-serif text-2xl font-semibold md:text-3xl">What to expect</h2>
	<div class="grid gap-8 md:grid-cols-3">
		<div class="rounded-sm bg-background p-5 shadow-xs brightness-105">
			<div class="mb-2 text-lg font-semibold">Step 1: Reach out</div>
			<div>Send a message with the type of session you’re looking for and a preferred date.</div>
		</div>
		<div class="rounded-sm bg-background p-5 shadow-xs brightness-105">
			<div class="mb-2 text-lg font-semibold">Step 2: Plan your session</div>
			<div>We’ll choose a location, time, and vibe that feels right for you.</div>
		</div>
		<div class="rounded-sm bg-background p-5 shadow-xs brightness-105">
			<div class="mb-2 text-lg font-semibold">Step 3: Enjoy the experience</div>
			<div>Relax and have fun &mdash; I’ll guide you so everything feels natural.</div>
		</div>
	</div>
</section>

<section class="container mx-auto my-12 max-w-7xl px-4 md:my-24">
	<h2 class="mb-6 font-serif text-2xl font-semibold md:text-3xl">Portfolio</h2>
	<div class="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
		{#each featuredProjects as project (project._id)}
			{@const image = project.images && project.images[0]}
			<a href={resolve(`/projects/${project.slug?.current}`)} class="relative z-1">
				<div
					class="absolute bottom-2 left-2 z-2 mb-4 px-4 font-serif text-lg font-semibold text-primary-foreground lg:text-sm"
				>
					{project.title}
				</div>
				{#if image?.asset}
					<Image
						asset={image.asset}
						width={600}
						height={600}
						class="block h-full w-full object-cover brightness-75"
						alt=""
					/>
				{:else}
					<div class="flex h-60 w-full items-center justify-center bg-muted">
						<span class="text-muted-foreground">No Image Available</span>
					</div>
				{/if}
			</a>
		{/each}
	</div>
	<div class="mt-8 flex items-center justify-center">
		<a
			href={resolve('/projects')}
			class={`${buttonVariants({
				variant: 'accent',
				size: 'lg'
			})} group w-full sm:w-70`}
			>View full portfolio <MoveRightIcon
				class="transition duration-200 group-hover:translate-x-0.5"
			/>
		</a>
	</div>
</section>

<!-- about -->
<section class="container mx-auto my-12 max-w-280 px-4 md:my-24">
	<div class="grid gap-8 sm:grid-cols-2">
		<div class="max-h-130 overflow-hidden rounded-sm shadow-sm">
			<img
				src={aboutImage}
				class="h-full w-full object-cover"
				alt="Woman holding a camera"
				loading="lazy"
			/>
		</div>
		<div class="sm:pt-8">
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
{#if testimonials && testimonials.length > 0}
	<section class="container mx-auto my-12 max-w-7xl px-4 md:my-24">
		<h2 class="mb-6 font-serif text-2xl font-semibold md:text-3xl">Kind words from past clients</h2>
		<div class="grid gap-8 md:grid-cols-3">
			{#each testimonials.slice(0, 3) as testimonial (testimonial._key)}
				<div class="rounded-sm bg-background p-5 shadow-xs brightness-105">
					<div class="mb-2 text-lg italic">"{testimonial.quote}&quot;</div>
					<div class="text-sm font-semibold">- {testimonial.author}</div>
				</div>
			{/each}
		</div>
	</section>
{/if}

<section class="container mx-auto my-12 max-w-7xl px-4 md:my-24">
	<h2 class="mb-2 font-serif text-2xl font-semibold sm:text-center md:text-3xl">
		How about a photo session that’s actually fun?
	</h2>
	<p class="mb-8 text-xl sm:text-center">
		Enjoy a stress-free experience and end up with photos you love.
	</p>
	<div class="flex items-center justify-center">
		<a
			href={resolve('/contact')}
			class={`${buttonVariants({ variant: 'accent', size: 'lg' })} block w-full sm:w-auto`}
		>
			Book Your Session
		</a>
	</div>
</section>
