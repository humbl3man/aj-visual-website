import { Resend } from 'resend';
import { form } from '$app/server';
import { contactFormSchema } from '$lib/schemas/contact.schema';
import { EMAIL_API_KEY } from '$env/static/private';
import config from '$lib/site.config';

export const submitContactForm = form(contactFormSchema, async (data) => {
	const { name, email, message } = data;

	try {
		await sendEmail({
			to: config.contactEmail, // Update with your email
			from: 'onboarding@resend.dev', // Update with your domain
			replyTo: email,
			subject: `New Photography Inquiry from ${name}`,
			body: `
        <p style="margin-bottom: 6px;"><strong>Name:</strong> ${name}</p>
        <p style="margin-bottom: 6px;"><strong>Email:</strong> ${email}</p>
        <p style="margin-bottom: 6px;"><strong>Message:</strong></p>
        <p>${message}</p>
			`.trim()
		});

		return {
			success: true,
			message: 'Thank you for your message! We will get back to you soon.'
		};
	} catch (error) {
		console.error('Failed to send contact form email:', error);
		return {
			success: false,
			message: 'Sorry, there was an error sending your message. Please try again later.'
		};
	}
});

// Placeholder email function - replace with your email provider
type EmailOptions = {
	to: string;
	from: string;
	replyTo: string;
	subject: string;
	body: string;
};

async function sendEmail({ to, from, replyTo, subject, body }: EmailOptions): Promise<void> {
	const resend = new Resend(EMAIL_API_KEY);
	await resend.emails.send({
		from,
		to,
		subject,
		replyTo,
		html: body
	});
}
