<script lang="ts">
	let { siteTitle }: { siteTitle?: string } = $props();
	const copyrightYear = new Date().getFullYear();
</script>

<footer class="mt-24 bg-accent/10 py-16">
	<div class="container mx-auto max-w-7xl px-4">
		<div class="text-lg font-semibold">{siteTitle}</div>
		<div class="mt-4 flex flex-col gap-2">
			<a href="mailto:placeholder.email@example.com" class="underline"
				>placeholder.email@example.com</a
			>
			<div class="text-sm text-foreground/80">&copy; All Rights Reserved {copyrightYear}</div>
		</div>
		<!-- TODO: add instagram icon -->
	</div>
</footer>
