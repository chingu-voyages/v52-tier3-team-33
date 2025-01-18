"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAuthStore } from "@/stores/auth-store";
import { LoginSchema, type LoginSchemaType } from "@/utils/schemas/auth";

export default function AdminLogin(): React.ReactNode {
  const router = useRouter();
  const { login } = useAuthStore();
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: LoginSchemaType): Promise<void> {
    setIsLoading(true);
    try {
      setError("");

      if (
        values.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL &&
        values.password === process.env.NEXT_PUBLIC_ADMIN_PASSWORD
      ) {
        await login(values);
        router.push("/admin/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-8 shadow-lg">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Admin Login</h2>
          <p className="mt-2 text-sm text-gray-600">
            Please sign in to access the admin dashboard
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="admin@example.com"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="••••••••" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {error && (
              <div className="text-sm text-red-500">
                <p>{error}</p>
              </div>
            )}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <span className="animate-spin">⏳</span>
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )}
            </Button>
          </form>
        </Form>

        {process.env.NODE_ENV === "development" && (
          <div className="mt-4 rounded-lg border border-dashed border-gray-300 p-4">
            <p className="mb-2 text-sm font-medium text-gray-500">
              Development Credentials:
            </p>
            <div className="space-y-1 text-sm text-gray-600">
              <p>Email: {process.env.NEXT_PUBLIC_ADMIN_EMAIL}</p>
              <p>Password: {process.env.NEXT_PUBLIC_ADMIN_PASSWORD}</p>
            </div>
            <Button
              type="button"
              variant="outline"
              size="sm"
              className="mt-2 w-full text-xs"
              onClick={() => {
                form.setValue(
                  "email",
                  process.env.NEXT_PUBLIC_ADMIN_EMAIL || ""
                );
                form.setValue(
                  "password",
                  process.env.NEXT_PUBLIC_ADMIN_PASSWORD || ""
                );
              }}
            >
              Fill Test Credentials
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
