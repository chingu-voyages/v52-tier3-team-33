"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Header(): React.ReactNode {
  return (
    <header className="w-full bg-white">
      <div className="flex w-full max-w-full items-center justify-between px-4 py-2">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex size-10 items-center justify-center rounded-lg bg-blue-500 text-xl text-white">
            ⚡
          </div>
          <div className="flex flex-col justify-around">
            <h1 className="m-0 text-lg font-bold">Solar Evaluations</h1>
            <h2 className="m-0 text-sm text-gray-600">City of Los Angeles</h2>
          </div>
        </Link>

        <nav className="flex">
          <div className="flex gap-4 border-r pr-2">
            <Link href="/auth/login/user">
              <Button variant="outline">Track Request</Button>
            </Link>
            <Link href="/public/evaluate">
              <Button variant="default">Request Evaluation</Button>
            </Link>
          </div>
          <Link href="/auth/register/user" className="pl-2">
            <Button variant="secondaryOutline" className="admin-login-btn">
              Admin Login
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
