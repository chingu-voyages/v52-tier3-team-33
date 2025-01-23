"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Header(): React.ReactNode {
  return (
    <header className="w-full border-b bg-white">
      <div className="container flex max-w-screen-2xl flex-col px-4 sm:px-8 lg:px-16">
        <div className="flex h-16 items-center justify-between sm:h-20">
          <Link href="/" className="flex items-center gap-2 sm:gap-3">
            <div className="flex size-10 items-center justify-center rounded-lg bg-blue-500 text-xl text-white sm:size-12 sm:text-2xl">
              ⚡
            </div>
            <div className="flex flex-col justify-around">
              <h1 className="text-lg font-bold leading-none sm:text-xl">
                Solar Evaluations
              </h1>
              <h2 className="text-muted-foreground text-xs sm:text-sm">
                City of Los Angeles
              </h2>
            </div>
          </Link>

          <div className="hidden md:flex md:items-center md:gap-4">
            <div className="flex items-center gap-3 border-r pr-4">
              <Link href="/public/track">
                <Button
                  variant="outline"
                  className="h-10 px-4 text-sm md:h-12 md:px-6 md:text-base"
                >
                  Track Request
                </Button>
              </Link>
              <Link href="/public/evaluate">
                <Button
                  variant="default"
                  className="h-10 px-4 text-sm md:h-12 md:px-6 md:text-base"
                >
                  Request Evaluation
                </Button>
              </Link>
            </div>
            <Link href="/admin/auth/login">
              <Button
                variant="outline"
                className="h-10 border-blue-500 px-4 text-sm text-blue-500 hover:bg-blue-50 md:h-12 md:px-6 md:text-base"
              >
                Admin Login
              </Button>
            </Link>
          </div>

          <div className="md:hidden">
            <Link href="/admin/auth/login">
              <Button
                variant="outline"
                className="border-blue-500 px-4 py-2 text-sm text-blue-500 hover:bg-blue-50"
              >
                Admin Login
              </Button>
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-100 py-3 md:hidden">
          <nav className="flex items-center justify-between gap-3">
            <Link href="/public/track" className="w-1/2">
              <Button variant="outline" className="w-full px-4 py-2 text-sm">
                Track Request
              </Button>
            </Link>
            <Link href="/public/evaluate" className="w-1/2">
              <Button variant="default" className="w-full px-4 py-2 text-sm">
                Request Evaluation
              </Button>
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
