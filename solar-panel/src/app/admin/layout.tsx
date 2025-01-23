"use client";

import { usePathname } from "next/navigation";

import AdminSidebar from "@/components/layout/sidebar";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({
  children,
}: AdminLayoutProps): React.ReactNode {
  const pathname = usePathname();

  if (!pathname) {
    return <div className="min-h-screen">{children}</div>;
  }

  const isAuthPage = pathname.startsWith("/admin/auth");

  if (isAuthPage) {
    return <div className="min-h-screen">{children}</div>;
  }

  return (
    <div className="flex h-screen">
      <div className="w-64 flex-none border-r bg-gray-100/40">
        <AdminSidebar />
      </div>
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
}
