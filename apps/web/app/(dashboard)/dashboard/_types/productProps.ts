import { ChartType } from "./ChartType";

export type ProductChartProps = {
  products: ChartType[];
};

export type StockLevelsProps = {
  products: {
    name: string;
    quantity: number;
    lowStockAt?: number | null;
  }[];
};

export type KeyMetricsProps = {
  totalProducts: number;
  convertedTotalProducts: string;
  convertedTotalValue: string;
  lowStockProducts: number;
};

export type InventoryChartProps = {
  weeklyProductsData: ChartType[];
};

export type EfficiencyGaugeProps = {
  inStockPercentage: number;
};
