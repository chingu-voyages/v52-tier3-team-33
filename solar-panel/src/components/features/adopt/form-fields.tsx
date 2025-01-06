import type { UseFormReturn } from "react-hook-form";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import type { AdoptFormType } from "./form";

interface Props {
  form: UseFormReturn<AdoptFormType, undefined>;
}

export default function AdoptFormFields({ form }: Props): React.ReactNode {
  return (
    <>
      <FormField
        control={form.control}
        name="firstName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>First Name</FormLabel>
            <FormControl>
              <Input placeholder="Antonio" {...field} />
            </FormControl>
            <FormDescription>This is your first name.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="lastName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>First last</FormLabel>
            <FormControl>
              <Input placeholder="Banderas" {...field} />
            </FormControl>
            <FormDescription>This is your first last.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="age"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Age</FormLabel>
            <FormControl>
              <Input placeholder="25" {...field} />
            </FormControl>
            <FormDescription>This is your Age.</FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="amount"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Amount</FormLabel>
            <FormControl>
              <Input placeholder="10" {...field} />
            </FormControl>
            <FormDescription>
              How many cats would you like to buy?
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
    </>
  );
}
