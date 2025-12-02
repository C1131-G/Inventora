import { SearchTableRow } from "./SearchTableRow";
import { SearchTableProps } from "../_types/ProductProps";

export function SearchTableHeader({ productList }: SearchTableProps) {
  return (
    <div
      className={"bg-white rounded-lg border border-gray-200 overflow-hidden"}
    >
      <table className={"w-full"}>
        <thead className={"bg-gray-50"}>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              SKU
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Price
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Quantity
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Low Stock At
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
              Actions
            </th>
          </tr>
        </thead>
        <SearchTableRow productList={productList} />
      </table>
    </div>
  );
}
