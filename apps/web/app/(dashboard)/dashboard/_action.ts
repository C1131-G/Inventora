import { productService } from "../../_service/product.service";

export async function dashboard() {
  const { totalProducts, lowStockProducts, productList } =
    await productService.dashboardStats();

  const totalValue = productList.reduce((sum, product) => {
    return sum + Number(product.price) * product.quantity;
  }, 0);

  const convertedTotalValue = Number(totalValue).toFixed(0);
  const convertedTotalProducts = Number(totalProducts).toFixed(0);

  return {
    totalProducts,
    convertedTotalProducts,
    lowStockProducts,
    totalValue,
    convertedTotalValue,
    productList,
  };
}
