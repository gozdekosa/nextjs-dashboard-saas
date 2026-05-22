import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import ProtectedRoute from "@/features/auth/components/ProductedRoute";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
    <div className="flex min-h-screen">
      
      
      <Sidebar />

      <main className="flex-1 p-6 bg-gray-100">
        <Navbar />
        {children}
      </main>

    </div>
    </ProtectedRoute>
  );
}