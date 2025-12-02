import { SearchTableProps } from "../_types/ProductProps";
import { DeleteTableContent } from "./DeleteTableContent";

export function SearchTableRow({ productList }: SearchTableProps) {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {productList.map((product) => (
        <tr key={product.id} className="hover:bg-gray-50">
          <th className="px-6 py-4 text-left text-sm text-gray-500">
            {product.name}
          </th>

          <th className="px-6 py-4 text-left text-sm text-gray-500">
            {product.sku || "-"}
          </th>

          <th className="px-6 py-4 text-left text-sm text-gray-500">
            ₹{Number(product.price).toFixed(0)}
          </th>

          <th className="px-6 py-4 text-left text-sm text-gray-500">
            {product.quantity}
          </th>

          <th className="px-6 py-4 text-left text-sm text-gray-500">
            {product.lowStockAt || "-"}
          </th>

          <th className={"px-6 py-4 text-left text-sm text-gray-500"}>
            <DeleteTableContent product={product} />
          </th>
        </tr>
      ))}
    </tbody>
  );
}
