import AuthGuard from "@/features/auth/components/AuthGuard"

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
  
   <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md">
        <AuthGuard>
        {children}
        </AuthGuard>
      </div>
    </div>
  )
}