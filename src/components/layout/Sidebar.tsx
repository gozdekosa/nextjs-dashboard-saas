"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoutButton from "@/features/auth/components/LogoutButton";
import { useAuth } from "@/features/auth/hooks/useAuth";

export default function Sidebar() {
  const pathname = usePathname();
  const { logout } = useAuth();

  const menu = [
    { label: "Dashboard", href: "/dashboard" },
    { label: "Users", href: "/dashboard/users" },
    { label: "Settings", href: "/dashboard/settings" },
  ];

  return (
    <aside className="w-64 h-screen bg-gray-900 text-white flex flex-col">
      
      {/* Logo */}
      <div className="p-6 text-xl font-bold border-b border-gray-700">
        My SaaS
      </div>

      {/* Menu */}
      <nav className="flex-1 p-4 space-y-2">
        {menu.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`block px-4 py-2 rounded-lg transition ${
                isActive ? "bg-gray-700" : "hover:bg-gray-800"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-700">
        <LogoutButton />
      </div>
    </aside>
  );
}