import { z } from 'zod';

export const NewsletterSchema = z.object({
    // is string value
    // is valid email
    // custom error message
    email: z.string().email('Please enter a valid email address')
});

export type NewsletterFormData = z.infer<typeof NewsletterSchema>;