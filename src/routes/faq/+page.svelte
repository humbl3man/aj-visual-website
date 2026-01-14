<!-- TODO: this content should come from CMS, for now it can be hardcoded -->

<script lang="ts">
</script>

{#snippet faqItem(item: { question: string; answer: string })}
	<div class="mt-8 grid gap-2 bg-background/5 md:grid-cols-[1fr_2fr] md:items-center md:gap-4">
		<div class="font-semibold">{item.question}</div>
		<div class="text-foreground/80">
			{item.answer}
		</div>
	</div>
{/snippet}

<div class="container mx-auto max-w-5xl px-4">
	<h1 class="font-serif text-4xl font-semibold">Frequently Asked Questions</h1>
	<div class="flex flex-col gap-1 md:gap-3">
		{@render faqItem({
			question: 'How far in advance should I book a session?',
			answer:
				'It’s best to book at least 2–4 weeks in advance, especially for weekends. That said, feel free to reach out — last-minute availability does happen.'
		})}

		{@render faqItem({
			question: 'What types of photography do you offer?',
			answer:
				'I specialize in portraits, family sessions, lifestyle shoots, and special moments. If you have something specific in mind, I’m always happy to discuss it.'
		})}

		{@render faqItem({
			question: 'How long does a session usually take?',
			answer:
				'Most sessions last between 60–90 minutes. This allows time to get comfortable, try different setups, and capture natural moments without rushing.'
		})}

		{@render faqItem({
			question: 'What should we wear for the session?',
			answer:
				'Neutral tones and simple outfits photograph beautifully. I recommend avoiding busy patterns or large logos. Once you book, I can share more detailed styling tips.'
		})}

		{@render faqItem({
			question: 'When will we receive our photos?',
			answer:
				'You can expect your edited gallery within 1–2 weeks after the session. Preview images may be shared sooner.'
		})}

		{@render faqItem({
			question: 'How do we receive the final images?',
			answer:
				'Your photos will be delivered through a private online gallery where you can view, download, and share your images easily.'
		})}

		{@render faqItem({
			question: 'Do you offer prints or albums?',
			answer:
				'Yes. High-quality prints and custom albums are available upon request and can be ordered directly from your gallery.'
		})}

		{@render faqItem({
			question: 'What happens if we need to reschedule?',
			answer:
				'Life happens — just let me know as soon as possible. I’m happy to reschedule due to weather, illness, or unexpected events.'
		})}
	</div>
</div>
