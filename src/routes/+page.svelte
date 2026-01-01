<script lang="ts">
	const { data } = $props();
	const { siteTitle, heroText } = data.metadata;
</script>

<div class="flex min-h-[50dvh] flex-col items-center justify-center bg-indigo-50">
	<div class="max-w-[90vw] sm:max-w-[60vw]">
		<h1 class="mb-8 text-7xl font-bold">{siteTitle}</h1>
		<p class="text-3xl">{heroText}</p>
	</div>
</div>
