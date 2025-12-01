import { z } from "zod";

export const ProductCreateSchema = z.object({
  name: z.string().min(1),
  sku: z.string().min(1).optional(),
  price: z.string(),
  quantity: z.number().int().min(0),
  lowStockAt: z.number().int().optional(),
});

export const ProductUpdateSchema = z.object({
  name: z.string().min(1).optional(),
  sku: z.string().optional(),
  price: z.string().optional(),
  quantity: z.number().int().min(0).optional(),
  lowStockAt: z.number().int().optional(),
});
