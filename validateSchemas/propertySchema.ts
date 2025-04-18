import { z } from 'zod';

export const PropertySchema = z.object({
  title: z.string().min(3),
  ownerId: z.string(),
  mainImage: z.string().url(),
  subImages: z.array(z.string().url()),
  description: z.string().min(10).max(100),
  Fee: z.number().positive(),
  keyMoney: z.number().positive(),
  isUtitilityIncluded: z.boolean().default(false),
  paymentMethod: z.enum(['monthly', 'yearly', 'Every 3 months']),
  occupantType: z.enum([
    ' Anyone',
    ' A Couple',
    ' A Family',
    ' Female Job Holders',
    ' Female Only',
    ' Female Student',
    ' Male Job Holders',
    ' Male Only',
    ' Male Student',
  ]),
  propertyType:z.enum([
    'apartment',
    'house',
    'shared room',
    'single room',
  ]),
  locationName: z.string(),
  specificLocation: z.string(),
  nearestTown: z.string(),
  location: z.object({
    type: z.literal('Point'),
    coordinates: z.tuple([z.number(), z.number()]), // [longitude, latitude]
  }),
  tags: z.array(z.enum(["Parking", "attached Bathroom", "Kitchen", "AC"])),
  contactNumber: z.string(),
  adState: z.enum(['active', 'pending', 'cancel']).default('pending'),
  options: z.string()
    
});


export type PropertyInput = z.infer<typeof PropertySchema>;
