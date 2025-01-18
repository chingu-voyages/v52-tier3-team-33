"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { useAuthStore } from "@/stores/auth-store";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}): React.ReactNode {
  const router = useRouter();
  const pathname = usePathname();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated && pathname.startsWith("/admin/auth")) {
      router.push("/admin/dashboard");
    }
  }, [isAuthenticated, router, pathname]);

  if (!isAuthenticated && pathname === "/admin/auth/login") {
    return <div className="min-h-screen">{children}</div>;
  }

  if (!isAuthenticated) {
    router.push("/admin/auth/login");
    return null;
  }

  return <div className="min-h-screen">{children}</div>;
}
