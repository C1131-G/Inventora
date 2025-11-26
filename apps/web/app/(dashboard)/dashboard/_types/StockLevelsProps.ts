export type StockLevelsProps = {
  products: {
    name: string;
    quantity: number;
    lowStockAt?: number | null;
  }[];
};
