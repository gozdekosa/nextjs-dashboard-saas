"use client";

import { useAuth } from "@/features/auth/hooks/useAuth";


export default function Navbar() {
  const { token } = useAuth();

  return (
    <header className="w-full h-16 bg-white border-b flex items-center justify-between px-6">
      
      {/* Left */}
      <h1 className="text-lg font-semibold">
        Dashboard
      </h1>

      {/* Right */}
      <div className="flex items-center gap-4">
        
        {token ? (
          <div className="text-sm text-gray-600">
            Logged in
          </div>
        ) : (
          <div className="text-sm text-red-500">
            Guest
          </div>
        )}

        <div className="w-8 h-8 rounded-full bg-gray-300" />
      </div>
    </header>
  );
}