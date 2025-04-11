import { z } from 'zod';

export const PropertySchema = z.object({
  title: z.string().min(3),
  ownerId: z.string(),
  mainImage: z.string().url(),
  subImages: z.array(z.string().url()),
  price: z.number().positive(),
  paymentMethod: z.enum(['monthly', 'yearly']),
  audience: z.enum([
    'For Anyone',
    'For a Couple',
    'For a Family',
    'For Female Job Holders',
    'For Female Only',
    'For Female Student',
    'For Male Job Holders',
    'For Male Only',
    'For Male Student',
  ]),
  location: z.string(),
  tags: z.array(
    z.object({
      name: z.string(),
      available: z.boolean(),
    })
  ),
  options: z.string()
    
});


export type PropertyInput = z.infer<typeof PropertySchema>;
