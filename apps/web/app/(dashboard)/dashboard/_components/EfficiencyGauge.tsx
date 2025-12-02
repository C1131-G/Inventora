import { EfficiencyGaugeProps } from "../_types/productProps";

export default function EfficiencyGauge({
  inStockPercentage,
}: EfficiencyGaugeProps) {
  return (
    <div className={"bg-white rounded-lg border border-gray-200"}>
      <div className={"flex flex-col m-6"}>
        <h2 className={"text-lg font-semibold text-gray-900 items-start mb-6"}>
          Efficiency
        </h2>
        <div className={"flex items-center justify-center"}>
          <div className={"relative w-48 h-48"}>
            <div
              className={
                "absolute inset-0 rounded-full border-8 border-gray-200"
              }
            ></div>
            <div
              className={
                "absolute inset-0 rounded-full border-8 border-purple-600"
              }
              style={{
                clipPath:
                  "polygon(50% 50%, 50% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 50%)",
              }}
            />
            <div
              className={"absolute inset-0 flex items-center justify-center"}
            >
              <div className={"text-center"}>
                <div className={"text-2xl font-bold text-gray-900"}>
                  {inStockPercentage}%
                </div>
                <div className={"text-sm text-gray-600"}>In Stock</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
