"use client";

import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function EvaluationPage(): React.ReactNode {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Evaluations</h1>
          <p className="text-muted-foreground">
            Manage and review solar panel evaluation requests
          </p>
        </div>
        <div className="flex items-center gap-4">
          <Input
            placeholder="Search evaluations..."
            className="w-[300px]"
            type="search"
          />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Evaluation Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <table className="w-full caption-bottom text-sm">
              <thead className="border-b">
                <tr className="text-left">
                  <th className="px-4 py-3 font-medium">Request ID</th>
                  <th className="px-4 py-3 font-medium">Customer</th>
                  <th className="px-4 py-3 font-medium">Property Type</th>
                  <th className="px-4 py-3 font-medium">Status</th>
                  <th className="px-4 py-3 font-medium">Submitted</th>
                  <th className="px-4 py-3 font-medium">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-muted/50 border-b transition-colors">
                  <td className="px-4 py-3">EVL-2024-001</td>
                  <td className="px-4 py-3">John Smith</td>
                  <td className="px-4 py-3">Single Family</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-800">
                      Pending
                    </span>
                  </td>
                  <td className="px-4 py-3">Mar 1, 2024</td>
                  <td className="px-4 py-3">
                    <Link
                      href="/admin/evaluation/EVL-2024-001"
                      className="text-blue-600 hover:underline"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
                <tr className="hover:bg-muted/50 border-b transition-colors">
                  <td className="px-4 py-3">EVL-2024-002</td>
                  <td className="px-4 py-3">Jane Doe</td>
                  <td className="px-4 py-3">Commercial</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
                      Scheduled
                    </span>
                  </td>
                  <td className="px-4 py-3">Mar 2, 2024</td>
                  <td className="px-4 py-3">
                    <Link
                      href="/admin/evaluation/EVL-2024-002"
                      className="text-blue-600 hover:underline"
                    >
                      View Details
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
