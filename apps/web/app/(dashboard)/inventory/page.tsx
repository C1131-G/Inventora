import { inventory } from "./_queries/inventory";
import { SearchBar } from "./_components/SearchBar";
import { deleteProductAction } from "./_actions/delete-product";
import { Button, Input } from "@repo/ui";

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
          <div
            className={
              "bg-white rounded-lg border border-gray-200 overflow-hidden"
            }
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
                      <form
                        action={async (formData: FormData) => {
                          "use server";
                          await deleteProductAction(formData);
                        }}
                      >
                        <Input type="hidden" name="id" value={product.id} />

                        <Button
                          size={"md"}
                          variant={"secondary"}
                          className={
                            "bg-white text-red-600 hover:text-red-900 cursor-pointer"
                          }
                        >
                          Delete
                        </Button>
                      </form>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}
