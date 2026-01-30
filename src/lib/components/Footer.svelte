<script lang="ts">
	import config from '$lib/site.config';

	let { siteTitle }: { siteTitle?: string } = $props();
	const copyrightYear = new Date().getFullYear();
</script>

<footer class="mt-8 bg-accent/10 py-16 lg:mt-16">
	<div class="container mx-auto max-w-7xl px-4">
		<div class="text-lg font-semibold">{siteTitle}</div>
		<div class="mt-4 flex flex-col gap-2">
			<a href={`mailto:${config.contactEmail}`} class="underline">{config.contactEmail}</a>
			<div class="text-sm text-foreground/80">&copy; All Rights Reserved {copyrightYear}</div>
		</div>
		<!-- TODO: add instagram icon -->
	</div>
</footer>
