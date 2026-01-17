<script lang="ts">
	import { page } from '$app/state';
	import { buttonVariants } from '$lib/components/ui/button';
	import { ArrowLeft } from '@lucide/svelte';

	$inspect(page);
</script>

<section class="container mx-auto max-w-7xl px-4">
	<div class="flex min-h-[15dvh] flex-col gap-8 py-16 sm:items-center sm:justify-center sm:py-32">
		{#if page.status === 404}
			<h1 class="text-3xl font-semibold">
				{page.error?.message || 'Project not found'}
			</h1>
			<a
				href="/projects"
				class={`${buttonVariants({
					variant: 'default'
				})} w-fit`}
			>
				<ArrowLeft />
				Back to projects
			</a>
		{:else}
			<h1 class="text-4xl font-semibold">
				{page.error?.message || 'Something went wrong'}
			</h1>
			<p class="text-muted-foreground">
				We're sorry, but it seems something went wrong on our end.
			</p>
		{/if}
	</div>
</section>
