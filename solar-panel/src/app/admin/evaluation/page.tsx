"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Evaluation = {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  status: string;
};

export default function EvaluationPage(): React.ReactNode {
  const [evaluations, setEvaluations] = useState<Evaluation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const supabase = createClientComponentClient();
  const router = useRouter();

  useEffect(() => {
    async function fetchEvaluations() {
      try {
        const { data, error } = await supabase
          .from("evaluation_requests")
          .select("id, created_at, first_name, last_name, status")
          .order("created_at", { ascending: false });

        if (error) throw error;
        console.log("Fetched data:", data);
        setEvaluations(data || []);
      } catch (error) {
        console.error("Error fetching evaluations:", error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchEvaluations();
  }, [supabase]);

  const getStatusStyle = (status: string) => {
    const styles = {
      pending: "bg-yellow-100 text-yellow-800",
      completed: "bg-green-100 text-green-800",
      cancelled: "bg-red-100 text-red-800",
    };
    return styles[status as keyof typeof styles] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Evaluations</h1>
        <p className="text-muted-foreground">
          Manage and review solar panel evaluation requests
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Evaluation Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            {isLoading ? (
              <div className="flex justify-center py-8">
                <p className="text-muted-foreground">Loading evaluations...</p>
              </div>
            ) : (
              <table className="w-full caption-bottom text-sm">
                <thead className="border-b">
                  <tr className="text-left">
                    <th className="px-4 py-3 font-medium text-gray-700">
                      Request ID
                    </th>
                    <th className="px-4 py-3 font-medium text-gray-700">
                      Customer
                    </th>
                    <th className="px-4 py-3 font-medium text-gray-700">
                      Status
                    </th>
                    <th className="px-4 py-3 font-medium text-gray-700">
                      Submitted
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {evaluations.map((evaluation) => (
                    <tr
                      key={evaluation.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => router.push(`/admin/evaluation/${evaluation.id}`)}
                    >
                      <td className="px-4 py-3">EVL-{evaluation.id}</td>
                      <td className="px-4 py-3">
                        {evaluation.first_name || "N/A"}{" "}
                        {evaluation.last_name || ""}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`inline-block rounded-full px-2 py-1 text-xs font-medium ${getStatusStyle(evaluation.status)}`}
                        >
                          {evaluation.status || "pending"}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        {new Date(evaluation.created_at).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
