type ProductProps = {
  userId: string;
  id: string;
  name: string;
  sku: string | null;
  price: number;
  quantity: number;
  lowStockAt: number | null;
  createdAt: Date;
  updatedAt: Date;
};

export type SearchTableProps = {
  productList: ProductProps[];
};

export type DeleteTableContentProps = {
  product: ProductProps;
};
