export default function DashboardPage(){
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

          </main>
      </div>
    );
}