import { productService } from "../_service/product.service";
import { clsx } from "clsx";

export async function dashboard() {
  const { totalProducts, lowStockProducts, productList } =
    await productService.dashboardStats();

  const totalValue = productList.reduce((sum, product) => {
    return sum + Number(product.price) * product.quantity;
  }, 0);

  const convertedTotalValue = Number(totalValue).toFixed(0);
  const convertedTotalProducts = Number(totalProducts).toFixed(0);

  const currentDate = new Date();
  const weeklyProductsData = [];

  for (let i = 11; i >= 0; i--) {
    const weekStart = new Date(currentDate);
    weekStart.setDate(weekStart.getDate() - i * 7);
    weekStart.setHours(0, 0, 0, 0);

    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    weekStart.setHours(23, 59, 59, 999);

    const weekLabel = clsx(
      String(weekStart.getMonth() + 1).padStart(2, "0"),
      "/",
      String(weekStart.getDate() + 1).padStart(2, "0"),
    );

    const weekProducts = productList.filter((product) => {
      const productDate = new Date(product.createdAt);
      return productDate >= weekStart && productDate <= weekEnd;
    });

    weeklyProductsData.push({
      weeks: weekLabel,
      products: weekProducts.length,
    });
  }

  const inStockCount = productList.filter((p) => Number(p.quantity) > 5).length;
  const lowStockCount = productList.filter(
    (p) => Number(p.quantity) <= 5 && Number(p.quantity) >= 1,
  ).length;
  const outOfStockCount = productList.filter(
    (p) => Number(p.quantity) === 0,
  ).length;

  const inStockPercentage =
    totalProducts > 0 ? Math.round((inStockCount / totalProducts) * 100) : 0;
  const lowStockPercentage =
    totalProducts > 0 ? Math.round((lowStockCount / totalProducts) * 100) : 0;
  const outOfStockPercentage =
    totalProducts > 0 ? Math.round((outOfStockCount / totalProducts) * 100) : 0;

  return {
    totalProducts,
    convertedTotalProducts,
    lowStockProducts,
    totalValue,
    convertedTotalValue,
    productList,
    weeklyProductsData,
    inStockPercentage,
    lowStockPercentage,
    outOfStockPercentage,
  };
}
