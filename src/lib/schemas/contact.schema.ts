import { z } from 'zod';

// Contact form validation schema
export const contactFormSchema = z.object({
	name: z.string().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
	email: z.email('Please enter a valid email address'),
	message: z
		.string()
		.min(10, 'Message must be at least 10 characters')
		.max(5000, 'Message must be less than 5000 characters')
});
