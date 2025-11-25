import { dashboard } from "./action";
import { TrendingUp } from "lucide-react";
import { productService } from "../../_service/product.service";
import { clsx } from "clsx";

export default async function DashboardPage() {
  const data = await dashboard();
  const recentProduct = await productService.recentlyAddedProducts();
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
        {/*Key Metrics*/}
        <div className={"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"}>
          <div className={"bg-white rounded-lg border border-gray-200 p-6"}>
            <h2 className={"text-lg font-semibold text-gray-900 mb-6"}>
              Key Metrics
            </h2>
            <div className={"grid grid-cols-3 gap-6"}>
              {/*Total Products*/}
              <div className={"text-center"}>
                <div className={"text-3xl font-bold text-gray-900"}>
                  {data.convertedTotalProducts}
                </div>
                <div className={"text-sm text-gray-600"}>Total Products</div>
                <div className={"flex items-center justify-center mt-1"}>
                  <span className={"text-xs text-green-600"}>
                    +{data.totalProducts}
                  </span>
                  <TrendingUp className={"w-3 h-3 text-green-600 ml-1"} />
                </div>
              </div>
              {/*Total Value*/}
              <div className={"text-center"}>
                <div className={"text-3xl font-bold text-gray-900"}>
                  ₹{data.convertedTotalValue}
                </div>
                <div className={"text-sm text-gray-600"}>Total Value</div>
                <div className={"flex items-center justify-center mt-1"}>
                  <span className={"text-xs text-green-600"}>
                    +{data.convertedTotalValue}
                  </span>
                  <TrendingUp className={"w-3 h-3 text-green-600 ml-1"} />
                </div>
              </div>
              {/*Low Stock*/}
              <div className={"text-center"}>
                <div className={"text-3xl font-bold text-gray-900"}>
                  {data.lowStockProducts}
                </div>
                <div className={"text-sm text-gray-600"}>Low Stock</div>
                <div className={"flex items-center justify-center mt-1"}>
                  <span className={"text-xs text-green-600"}>
                    +{data.lowStockProducts}
                  </span>
                  <TrendingUp className={"w-3 h-3 text-green-600 ml-1"} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Stock Levels*/}
        <div className={"gird grid-cols-1 lg:grid-cols-2 gap-8 mb-8"}>
          <div className={"bg-white border border-gray-200 rounded-lg p-6"}>
            <div className={"flex items-center justify-center mb-6"}>
              <h2 className={"text-lg font-semibold text-gray-900"}>
                Stock Levels
              </h2>
            </div>
            <div className={"space-y-3"}>
              {recentProduct.map((product, key) => {
                const low = product.lowStockAt ?? 5;
                let stockLevel = 2;
                if (product.quantity === 0) {
                  stockLevel = 0;
                } else if (product.quantity <= low) {
                  stockLevel = 1;
                }
                {
                  /*Colour based on stock quantity*/
                }
                const bgColors = [
                  "bg-red-600",
                  "bg-yellow-600",
                  "bg-green-600",
                ];
                const textColors = [
                  "text-red-600",
                  "text-yellow-600",
                  "text-green-600",
                ];

                return (
                  <div key={key}>
                    <div>
                      <div
                        className={clsx(
                          "w-3 h-3 rounded-full",
                          bgColors[stockLevel],
                        )}
                      />
                      <span>{product.name}</span>
                    </div>
                    <div
                      className={clsx(
                        "text-sm font-medium",
                        textColors[stockLevel],
                      )}
                    />
                    <div> {product.quantity} units</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
