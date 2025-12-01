import { dashboard } from "./_queries/dashboard";
import { productService } from "../_service/product.service";
import KeyMetrics from "./_components/KeyMetrics";
import InventoryChart from "./_components/InventoryChart";
import StockLevels from "./_components/StockLevels";
import EfficiencyGauge from "./_components/EfficiencyGauge";

export default async function DashboardPage() {
  const productsData = await dashboard();
  const {
    convertedTotalProducts,
    convertedTotalValue,
    lowStockProducts,
    totalProducts,
    weeklyProductsData,
    inStockPercentage,
  } = productsData;

  const recentProductsData = await productService.recentlyAddedProducts();
  return (
    <div className={"min-h-screen bg-gray-50"}>
      <main className={"p-2"}>
        {/*Header*/}
        <div className={"mb-8"}>
          <div className={"flex items-center justify-between"}>
            <div>
              <h1 className="text-2xl font-semibold text-gray-900">
                Dashboard
              </h1>
              <p className="text-sm text-gray-500">
                Welcome back! Here is an overview of your inventory.
              </p>
            </div>
          </div>
        </div>
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"}>
          <KeyMetrics
            convertedTotalProducts={convertedTotalProducts}
            convertedTotalValue={convertedTotalValue}
            lowStockProducts={lowStockProducts}
            totalProducts={totalProducts}
          />
          <InventoryChart weeklyProductsData={weeklyProductsData} />
        </div>
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"}>
          <StockLevels products={recentProductsData} />
          <EfficiencyGauge inStockPercentage={inStockPercentage} />
        </div>
      </main>
    </div>
  );
}
