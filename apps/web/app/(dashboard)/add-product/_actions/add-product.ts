"use server";

import { ProductCreateSchema } from "@repo/validation";
import { productService } from "../../_service/product.service";
import { redirect } from "next/navigation";

export async function createProduct(formData: FormData) {
  const data = {
    name: formData.get("name"),
    quantity: Number(formData.get("quantity") || 0),
    price: Number(formData.get("price") || 0),
    sku: formData.get("sku") || undefined,
    lowStockAt: Number(formData.get("lowStockAt")) || null || undefined,
  };

  const validated = ProductCreateSchema.safeParse(data);
  if (!validated.success) {
    console.error(validated.error);
    throw new Error("Validation failed");
  }
  await productService.createProduct(validated.data);
  redirect("/inventory");
}
