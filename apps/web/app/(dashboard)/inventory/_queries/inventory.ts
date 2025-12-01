import { productService } from "../../_service/product.service";

export async function inventory() {
  const { totalProducts, lowStockProducts, productList } =
    await productService.dashboardStats();

  return { totalProducts, lowStockProducts, productList };
}
