import { createProduct } from "./_actions/add-product";

export default function AddProductPage() {
  return (
    <div className={"min-h-screen bg-gray-50"}>
      <main>
        <header className={"mb-8"}>
          <h1 className={"text-2xl font-semibold text-gray-900"}>
            Add Product
          </h1>
          <p className={"text-sm text-gray-500"}>
            Add a new product to your inventory
          </p>
        </header>

        <section className={"max-w-2xl"}>
          <div className={"bg-white rounded-lg border border-gray-200 p-6"}>
            <form action={createProduct} className="space-y-6">
              <div>
                <label
                  htmlFor={"name"}
                  className={"block text-sm font-medium text-gray-700 mb-2"}
                >
                  Product Name *
                </label>
                <input
                  id={"name"}
                  name={"name"}
                  required
                  placeholder={"Enter product name"}
                  className={
                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                  }
                />
              </div>

              <div className={"grid grid-cols-1 md:grid-cols-2 gap-6"}>
                <div>
                  <label
                    htmlFor={"quantity"}
                    className={"block text-sm font-medium text-gray-700 mb-2"}
                  >
                    Quantity *
                  </label>
                  <input
                    id={"quantity"}
                    name={"quantity"}
                    type={"number"}
                    min={0}
                    required
                    placeholder={"0"}
                    className={
                      "w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                    }
                  />
                </div>

                <div>
                  <label
                    htmlFor={"price"}
                    className={"block text-sm font-medium text-gray-700 mb-2"}
                  >
                    Price *
                  </label>
                  <input
                    id={"price"}
                    name={"price"}
                    type={"number"}
                    step={"1"}
                    min={0}
                    required
                    placeholder={"0"}
                    className={
                      "w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor={"sku"}
                  className={"block text-sm font-medium text-gray-700 mb-2"}
                >
                  SKU (optional)
                </label>
                <input
                  id={"sku"}
                  name={"sku"}
                  placeholder={"Enter SKU"}
                  className={
                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                  }
                />
              </div>

              <div>
                <label
                  htmlFor={"lowStockAt"}
                  className={"block text-sm font-medium text-gray-700 mb-2"}
                >
                  Low Stock Threshold (optional)
                </label>
                <input
                  id={"lowStockAt"}
                  name={"lowStockAt"}
                  type={"number"}
                  min={0}
                  placeholder={"Ex: 5"}
                  className={
                    "w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-purple-600 focus:outline-none"
                  }
                />
              </div>

              <div className={"flex gap-5 pt-2"}>
                <button
                  type={"submit"}
                  className={
                    "px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition hover:cursor-pointer"
                  }
                >
                  Add Product
                </button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}
