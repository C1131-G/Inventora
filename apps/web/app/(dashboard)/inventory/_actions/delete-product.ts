"use server";

import { productService } from "../../_service/product.service";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function deleteProductAction(formData: FormData) {
  const id = String(formData.get("id") || "");
  await productService.deleteProduct(id);

  revalidatePath("/inventory");
  redirect("/inventory");
}
