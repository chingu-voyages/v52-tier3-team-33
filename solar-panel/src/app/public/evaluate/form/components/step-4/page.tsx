"use client";

import Link from "next/link";

import { Button } from "@/components/ui/button";

import HeadContainer from "../adopt/head";

export default function FormStepFour(): React.ReactNode {
  return (
    <section className="flex w-full flex-col gap-4">
      <HeadContainer
        title="Review and Submit"
        copy="Review your information and submit"
      />
      <p>step 4</p>
      <div className="flex gap-4">
        <Link href="/">
          <Button>Return to Form</Button>
        </Link>
        <Link href="/">
          <Button>Submit Request</Button>
        </Link>
      </div>
    </section>
  );
}
