import {dashboard} from "./action";

export default async function DashboardPage(){
    const data = await dashboard();
    return(
      <div className={"min-h-screen bg-gray-50"}>
          <main className={"p-2"}>
                <div className={"mb-8"}>
                    <div className={"flex items-center justify-between"}>
                        <div>
                            <h1 className="text-2xl font-semibold text-gray-900">
                                Dashboard
                            </h1>
                            <p className="text-sm text-gray-500">
                                Welcome back! Here is an overview of your inventory.
                            </p>
                        </div>
                    </div>
                </div>

              <div className={"grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8"}>
                  <div className={"bg-white rounded-lg border border-gray-200 p-6"}>
                      <h2 className={"text-lg font-semibold text-gray-900 mb-6"}>Key Metrics</h2>
                      <div className={"grid grid-cols-3 gap-6"}>
                          <div>
                              <div>
                                  {data.totalValue}
                              </div>
                          </div>

                      </div>

                  </div>
              </div>

          </main>
      </div>
    );
}