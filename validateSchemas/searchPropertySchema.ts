import { z } from "zod";

export const SearchPropertySchema = z.object({
  area: z.string().min(2, "Location must be at least 2 characters"),
  minFee: z.coerce.number().min(0, "Minimum fee must be positive"),
  maxFee: z.coerce.number().min(0, "Maximum fee must be positive"),
  type: z.string().optional(),
  pageNo: z.coerce.number().int().min(1, "Page must be at least 1").default(1),
  
});

export type PropertySearchParams = z.infer<typeof SearchPropertySchema>;