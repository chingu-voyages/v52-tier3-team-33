"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { ChevronLeft } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

type Status = "pending" | "confirmed" | "completed" | "cancelled";

interface Evaluation {
  id: string;
  status: Status;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  property_type: string;
  street_address: string;
  additional_location: string;
  appointment_date: string;
  time_slot: string;
  additional_notes: string;
  created_at: string;
}

interface Note {
  id: string;
  text: string;
  date: string;
}

const getStatusClasses = (status: Status | undefined) => {
  switch (status) {
    case "confirmed":
      return "bg-green-100 text-green-800";
    case "cancelled":
      return "bg-red-100 text-red-800";
    case "completed":
      return "bg-blue-100 text-blue-800";
    default:
      return "bg-yellow-100 text-yellow-800";
  }
};

export default function EvaluationDetailPage(): React.ReactNode {
  const params = useParams();
  const router = useRouter();
  const evaluationId = params.id as string;
  const [evaluation, setEvaluation] = useState<Evaluation | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [newNote, setNewNote] = useState("");
  const [notes, setNotes] = useState<Note[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleAddNote = async (): Promise<void> => {
    if (!newNote.trim()) return;

    setIsSubmitting(true);
    try {
      const note = {
        id: crypto.randomUUID(),
        text: newNote,
        date: new Date().toLocaleString(),
      };
      setNotes([note, ...notes]);
      setNewNote("");
    } catch (error) {
      console.error("Failed to add note:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleStatusChange = async (newStatus: Status): Promise<void> => {
    setIsUpdating(true);
    const supabase = createClientComponentClient();

    try {
      const { error } = await supabase
        .from("evaluation_requests")
        .update({ status: newStatus })
        .eq("id", evaluationId.replace("EVL-2024-", ""));

      if (error) throw error;

      setEvaluation((prev) => (prev ? { ...prev, status: newStatus } : null));

      const statusNote = {
        id: crypto.randomUUID(),
        text: `Status changed to ${newStatus}`,
        date: new Date().toLocaleString(),
      };
      setNotes([statusNote, ...notes]);
    } catch (err) {
      setError("Failed to update status");
    } finally {
      setIsUpdating(false);
    }
  };

  useEffect(() => {
    const fetchEvaluation = async (): Promise<void> => {
      const supabase = createClientComponentClient();
      try {
        const { data, error } = await supabase
          .from("evaluation_requests")
          .select("*")
          .eq("id", evaluationId.replace("EVL-2024-", ""))
          .single();

        if (error) throw error;
        setEvaluation(data);
      } catch (err) {
        setError("Failed to load evaluation details");
      } finally {
        setLoading(false);
      }
    };

    fetchEvaluation();
  }, [evaluationId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!evaluation) return <div>Evaluation not found</div>;

  return (
    <div className="space-y-8 p-8">
      <div>
        <Button
          variant="ghost"
          className="mb-6 flex items-center gap-2 hover:bg-gray-100"
          onClick={() => router.push("/admin/evaluation")}
        >
          <ChevronLeft className="size-4" />
          Back to Evaluations
        </Button>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Evaluation Details</h1>
            <p className="text-muted-foreground">
              Request ID: EVL-{evaluation.id}
            </p>
          </div>
          <div className="inline-flex items-center rounded-lg bg-gray-100 px-3 py-1">
            <span className="text-sm font-medium capitalize">
              {evaluation.status || "pending"}
            </span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Customer Information</CardTitle>
            <CardDescription>Contact details and preferences</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Name</p>
              <p className="mt-1">{`${evaluation.first_name} ${evaluation.last_name}`}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Email</p>
              <p className="mt-1">{evaluation.email}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Phone</p>
              <p className="mt-1">{evaluation.phone}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Property Details</CardTitle>
            <CardDescription>Location and specifications</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <p className="text-sm font-medium text-gray-500">Address</p>
              <p className="mt-1">{evaluation.street_address}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Property Type</p>
              <p className="mt-1">{evaluation.property_type}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Additional Location Info
              </p>
              <p className="mt-1">
                {evaluation.additional_location ||
                  "No additional notes provided"}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Appointment Details</CardTitle>
            <CardDescription>Scheduled time and notes</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <p className="text-sm font-medium text-gray-500">
                  Preferred Date
                </p>
                <p className="mt-1">
                  {evaluation.appointment_date
                    ? new Date(evaluation.appointment_date).toLocaleDateString()
                    : "Not specified"}
                </p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-500">Time Slot</p>
                <p className="mt-1">
                  {evaluation.time_slot || "Not specified"}
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">
                Additional Notes
              </p>
              <p className="mt-1">
                {evaluation.additional_notes || "No additional notes provided"}
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Request Status</CardTitle>
            <CardDescription>Current state and timeline</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium text-gray-500">
                Current Status
              </p>
              <Select
                value={evaluation?.status}
                onValueChange={(value: Status) => handleStatusChange(value)}
                disabled={isUpdating}
              >
                <SelectTrigger className="w-[200px]">
                  <SelectValue>
                    <span
                      className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getStatusClasses(evaluation?.status)}`}
                    >
                      {evaluation?.status || "Loading..."}
                    </span>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Submitted On</p>
              <p>{evaluation?.created_at}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notes</CardTitle>
            <CardDescription>
              Internal comments and observations
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <Textarea
                placeholder="Add a note..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className="min-h-[100px]"
              />
              <Button
                onClick={handleAddNote}
                disabled={isSubmitting || !newNote.trim()}
                className="w-full"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="animate-spin">⏳</span>
                    Adding...
                  </span>
                ) : (
                  "Add Note"
                )}
              </Button>
            </div>

            <div className="space-y-4">
              {notes.length > 0 ? (
                notes.map((note) => (
                  <div
                    key={note.id}
                    className="rounded-lg border border-gray-200 p-4"
                  >
                    <p className="text-sm text-gray-600">{note.text}</p>
                    <p className="mt-2 text-xs text-gray-400">{note.date}</p>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No notes added yet.</p>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
