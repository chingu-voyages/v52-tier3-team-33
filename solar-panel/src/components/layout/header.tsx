"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Header(): React.ReactNode {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold">
          Solar Panel App
        </Link>

        <nav className="flex gap-4">
          <Link href="/auth/login/user">
            <Button variant="ghost">Login</Button>
          </Link>
          <Link href="/auth/register/user">
            <Button>Sign Up</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
