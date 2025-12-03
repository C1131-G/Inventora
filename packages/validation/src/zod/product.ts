import { z } from "zod";

export const ProductCreateSchema = z.object({
  name: z.string().min(1),
  sku: z.string().min(1).optional(),
  price: z.number(),
  quantity: z.number().int().min(0),
  lowStockAt: z.number().int().optional(),
});
