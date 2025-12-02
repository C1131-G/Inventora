import { TrendingUp } from "lucide-react";
import { KeyMetricsProps } from "../_types/productProps";

export default function KeyMetrics({
  convertedTotalProducts,
  convertedTotalValue,
  lowStockProducts,
  totalProducts,
}: KeyMetricsProps) {
  return (
    <div className={"bg-white rounded-lg border border-gray-200 p-6"}>
      <h2 className={"text-lg font-semibold text-gray-900 mb-6"}>
        Key Metrics
      </h2>
      <div className={"grid grid-cols-3 gap-6"}>
        <div className={"text-center"}>
          <div className={"text-3xl font-bold text-gray-900"}>
            {convertedTotalProducts}
          </div>
          <div className={"text-sm text-gray-600"}>Total Products</div>
          <div className={"flex items-center justify-center mt-1"}>
            <span className={"text-xs text-green-600"}>+{totalProducts}</span>
            <TrendingUp className={"w-3 h-3 text-green-600 ml-1"} />
          </div>
        </div>
        <div className={"text-center"}>
          <div className={"text-3xl font-bold text-gray-900"}>
            ₹{convertedTotalValue}
          </div>
          <div className={"text-sm text-gray-600"}>Total Value</div>
          <div className={"flex items-center justify-center mt-1"}>
            <span className={"text-xs text-green-600"}>
              +{convertedTotalValue}
            </span>
            <TrendingUp className={"w-3 h-3 text-green-600 ml-1"} />
          </div>
        </div>
        <div className={"text-center"}>
          <div className={"text-3xl font-bold text-gray-900"}>
            {lowStockProducts}
          </div>
          <div className={"text-sm text-gray-600"}>Low Stock</div>
          <div className={"flex items-center justify-center mt-1"}>
            <span className={"text-xs text-green-600"}>
              +{lowStockProducts}
            </span>
            <TrendingUp className={"w-3 h-3 text-green-600 ml-1"} />
          </div>
        </div>
      </div>
    </div>
  );
}
