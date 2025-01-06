"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Header(): React.ReactNode {
  return (
    <header className="border-b">
      <div className="navigation-container container">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-icon">⚡</div>
          <div className="nav-logo-text">
            <h1>Solar Evaluations</h1>
            <h2>City of Los Angeles</h2>
          </div>
        </Link>

        <nav className="flex gap-4">
          <Link href="/auth/login/user">
            <Button variant="outline">Track Request</Button>
          </Link>
          <Link href="/auth/login/user">
            <Button variant="default">Request Evaluation</Button>
          </Link>
          <Link href="/auth/register/user">
            <Button variant="secondary">Admin</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
