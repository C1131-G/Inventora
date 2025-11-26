import ProductChart from "./ProductChart";
import { InventoryChartProps } from "../_types/InventoryChartProps";

export default function InventoryChart({
  weeklyProductsData,
}: InventoryChartProps) {
  return (
    <>
      <div className={"bg-white rounded-lg border-gray-200 border p-6"}>
        <div>
          <h2 className={"mb-6"}>New products per week</h2>
          <div className={"h-48 w-full min-w-0"}>
            <ProductChart data={weeklyProductsData} />
          </div>
        </div>
      </div>
    </>
  );
}
