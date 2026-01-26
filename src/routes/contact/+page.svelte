<script lang="ts">
	import { submitContactForm } from '$lib/api/contact.remote';
	import * as Field from '$lib/components/ui/field';
	import { Input } from '$lib/components/ui/input';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Button } from '$lib/components/ui/button';
	import { Spinner } from '$lib/components/ui/spinner';
	import { contactFormSchema } from '$lib/schemas/contact.schema';
	import { page } from '$app/state';
</script>

<svelte:head>
	<title>Book a Photography Session | {page.data.metadata.siteTitle}</title>
</svelte:head>

<div class="container mx-auto mt-16 max-w-xl px-4 sm:mt-32">
	<h1 class="mb-6 font-serif text-4xl font-semibold">Book a Session</h1>
	<p class="mb-8 text-foreground/75">
		Ready to capture your moment? Tell us the type of session, preferred dates, and any special
		requests — we'll reply within 48 hours to confirm availability and next steps.
	</p>

	<div>
		{#if submitContactForm.result?.success}
			<div class="bg-foreground/5 p-5">
				<p>{submitContactForm.result.message}</p>
			</div>
		{:else}
			<form
				{...submitContactForm.preflight(contactFormSchema)}
				oninput={() => submitContactForm.validate()}
				class="space-y-6"
			>
				<Field.Field>
					<Field.Label for="name">Name</Field.Label>
					<Field.Content>
						<Input {...submitContactForm.fields.name.as('text')} placeholder="Your name" />
					</Field.Content>
					{#each submitContactForm.fields.name.issues() as issue}
						<Field.Error>{issue.message}</Field.Error>
					{/each}
				</Field.Field>

				<Field.Field>
					<Field.Label for="email">Email</Field.Label>
					<Field.Content>
						<Input {...submitContactForm.fields.email.as('email')} placeholder="your@email.com" />
					</Field.Content>
					{#each submitContactForm.fields.email.issues() as issue}
						<Field.Error>{issue.message}</Field.Error>
					{/each}
				</Field.Field>

				<Field.Field>
					<Field.Label for="message">Message</Field.Label>
					<Field.Content>
						<Textarea
							{...submitContactForm.fields.message.as('text')}
							placeholder="How can we help you?"
							rows={6}
						/>
					</Field.Content>
					{#each submitContactForm.fields.message.issues() as issue}
						<Field.Error>{issue.message}</Field.Error>
					{/each}
				</Field.Field>

				{#if submitContactForm.result && !submitContactForm.result.success}
					<div
						class="rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950"
					>
						<p class="text-sm text-red-800 dark:text-red-200">{submitContactForm.result.message}</p>
					</div>
				{/if}

				<Button type="submit" disabled={!!submitContactForm.pending} class="w-full sm:w-auto">
					{#if submitContactForm.pending}
						<Spinner class="mr-2 size-4" />
						Sending...
					{:else}
						Send Message
					{/if}
				</Button>
			</form>
		{/if}
	</div>
</div>
