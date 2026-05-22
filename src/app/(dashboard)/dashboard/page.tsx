export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500 mt-1">
          Welcome back 👋
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-sm text-gray-500">
            Total Customers
          </h2>

          <p className="text-3xl font-bold mt-2">
            1,245
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-sm text-gray-500">
            Active Tickets
          </h2>

          <p className="text-3xl font-bold mt-2">
            87
          </p>
        </div>

        <div className="rounded-2xl border p-6 shadow-sm">
          <h2 className="text-sm text-gray-500">
            Monthly Revenue
          </h2>

          <p className="text-3xl font-bold mt-2">
            ₺124K
          </p>
        </div>

      </div>
    </div>
  );
}