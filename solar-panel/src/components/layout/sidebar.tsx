"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/stores/auth-store";

export default function AdminSidebar(): React.ReactNode {
  const router = useRouter();
  const { logout } = useAuthStore();

  const handleLogout = async (): Promise<void> => {
    try {
      await logout();
      router.push("/admin/auth/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <aside className="w-64 bg-gray-800 p-6 text-white">
      <div className="flex h-full flex-col justify-between">
        <div className="space-y-6">
          <h2 className="text-xl font-bold">Admin Panel</h2>

          <nav className="space-y-2">
            <Link
              href="/admin/dashboard"
              className="block rounded px-4 py-2 hover:bg-gray-700"
            >
              Dashboard
            </Link>
            <Link
              href="/admin/evaluation"
              className="block rounded px-4 py-2 hover:bg-gray-700"
            >
              Evaluations
            </Link>
          </nav>
        </div>

        <div className="pt-6">
          <Button
            variant="destructive"
            className="w-full"
            onClick={handleLogout}
            type="button"
          >
            Logout
          </Button>
        </div>
      </div>
    </aside>
  );
}
