"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth-store";

export default function AdminSidebar(): React.ReactNode {
  const router = useRouter();
  const pathname = usePathname();
  const { logout } = useAuthStore();

  const handleLogout = async (): Promise<void> => {
    try {
      await logout();
      router.push("/admin/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const navItems = [
    { href: "/admin/dashboard", label: "Dashboard" },
    { href: "/admin/evaluation", label: "Evaluations" },
  ];

  return (
    <aside className="flex h-full flex-col bg-gray-800 p-6 text-white">
      <div className="space-y-6">
        <h2 className="text-xl font-bold">Admin Panel</h2>

        <nav className="space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block rounded-lg px-4 py-2 transition-colors ${
                pathname === item.href
                  ? "bg-gray-700 text-white"
                  : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto pt-6">
        <Button
          variant="destructive"
          className="w-full"
          onClick={handleLogout}
          type="button"
        >
          Logout
        </Button>
      </div>
    </aside>
  );
}
