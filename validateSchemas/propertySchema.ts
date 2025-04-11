import { z } from 'zod';

export const PropertySchema = z.object({
  title: z.string().min(3),
  ownerId: z.string(),
  mainImage: z.string(),
  subImages: z.array(z.string()),
  price: z.number().positive(),
  paymentMethod: z.enum(['monthly', 'yearly']),
  occupantType: z.enum([
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
  propertyType:z.enum([
    'apartment',
    'house',
    'shared room',
    'single room',
  ]),
  location: z.string(),
  specificLocation: z.string(),
  nearestTown: z.string(),
  tags: z.array(z.enum(["Parking", "attached Bathroom", "Kitchen", "AC"])),
  contactNumber: z.string(),
  adState: z.enum(['active', 'pending', 'cancel']).default('pending'),
  options: z.string()
    
});


export type PropertyInput = z.infer<typeof PropertySchema>;
