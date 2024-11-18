"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import AdoptFormFields from "./form-fields";

const formSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  age: z.string(), // Handling number values with zod and RHF is tricky. For now submit them as input and validate them as number in backend
  amount: z.string().min(1),
});

export type AdoptFormType = z.infer<typeof formSchema>;

export default function AdoptForm() {
  const { isSuccess, data, mutate, isPending } = useMutation({
    mutationFn: (data: any) => {
      return axios.post("/api/adopt", data);
    },
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      age: "",
      amount: "",
    },
  });

  function onSubmit(values: AdoptFormType) {
    mutate(values);
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <AdoptFormFields form={form} />
          <Button type="submit" disabled={isPending}>
            Submit
          </Button>
        </form>
      </Form>
      {isSuccess ? (
        <div className="mt-8">
          <p>Response of the server is:</p>
          <p>{JSON.stringify(data.data)}</p>
        </div>
      ) : null}
    </div>
  );
}
