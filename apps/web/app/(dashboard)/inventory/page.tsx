import { inventory } from "./_queries/inventory";
import { SearchBar } from "./_components/SearchBar";
import { SearchTableHeader } from "./_components/SearchTableHeader";
import { productService } from "../_service/product.service";

export default async function InventoryPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const params = await searchParams;
  const q = (params.q ?? "").trim();

  const productList =
    q.length > 0
      ? await productService.searchProduct(q)
      : (await inventory()).productList;
  return (
    <div className={"min-h-screen bg-gray-50"}>
      <main>
        <div className={"mb-8"}>
          <div className={"flex items-center justify-between"}>
            <div>
              <h1 className={"text-2xl font-semibold text-gray-900"}>
                Inventory
              </h1>
              <p className={"text-sm text-gray-500"}>
                Manage your products and track inventory levels.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <SearchBar defaultValue={q} />
          <SearchTableHeader productList={productList} />
        </div>
      </main>
    </div>
  );
}
