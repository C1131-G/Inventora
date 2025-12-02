import { inventory } from "./_queries/inventory";
import { SearchBar } from "./_components/SearchBar";
import { SearchTableHeader } from "./_components/SearchTableHeader";

export default async function InventoryPage() {
  const { productList } = await inventory();
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
          <SearchBar />
          <SearchTableHeader productList={productList} />
        </div>
      </main>
    </div>
  );
}
