"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Header(): React.ReactNode {
  return (
    <header className="header">
      <div className="navigation-container container">
        <Link href="/" className="nav-logo">
          <div className="nav-logo-icon">⚡</div>
          <div className="nav-logo-text">
            <h1>Solar Evaluations</h1>
            <h2>City of Los Angeles</h2>
          </div>
        </Link>

        <nav className="flex">
          <div className="flex gap-4 border-r pr-2">
            <Link href="/auth/login/user">
              <Button variant="outline">Track Request</Button>
            </Link>
            <Link href="/auth/login/user">
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
