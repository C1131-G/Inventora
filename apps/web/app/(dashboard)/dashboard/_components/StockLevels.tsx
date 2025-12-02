import { clsx } from "clsx";
import { StockLevelsProps } from "../_types/productProps";

export default function StockLevels({ products }: StockLevelsProps) {
  const bgColors = ["bg-red-600", "bg-yellow-600", "bg-green-600"];
  const textColors = ["text-red-600", "text-yellow-600", "text-green-600"];

  const getStockLevel = (quantity: number, lowStockAt?: number | null) => {
    const low = lowStockAt ?? 5;

    if (quantity === 0) return 0;
    if (quantity <= low) return 1;
    return 2;
  };

  return (
    <>
      <div className={"bg-white border border-gray-200 rounded-lg p-6"}>
        <div className={"flex flex-col mb-6"}>
          <h2 className={"text-lg font-semibold text-gray-900 items-start"}>
            Stock Levels
          </h2>
        </div>
        <div className={"space-y-3 items-center justify-center"}>
          {products.map((product, key) => {
            const stockLevel = getStockLevel(
              product.quantity,
              product.lowStockAt,
            );
            return (
              <div
                key={key}
                className={
                  "flex items-center justify-between p-3 rounded-lg bg-gray-50"
                }
              >
                <div className={"flex items-center space-x-3"}>
                  <div
                    className={clsx(
                      "w-3 h-3 rounded-full",
                      bgColors[stockLevel],
                    )}
                  />
                  <span className={"text-sm font-medium text-gray-900"}>
                    {product.name}
                  </span>
                </div>
                <div
                  className={clsx(
                    "text-sm font-medium",
                    textColors[stockLevel],
                  )}
                >
                  {product.quantity} units
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
