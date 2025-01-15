"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";

import { cn } from "@/utils/lib/utils";

const RadioGroupButtons = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("grid gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});

RadioGroupButtons.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupButtonItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item> & {
    children: React.ReactNode;
  }
>(({ className, children, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      ref={ref}
      className={cn(
        "border-input ring-offset-background focus-visible:ring-ring data-[state=checked]:border-primary data-[state=checked]:text-secondary-foreground hover:bg-muted flex cursor-pointer items-center justify-center rounded-md border bg-transparent px-3 py-2 text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </RadioGroupPrimitive.Item>
  );
});

RadioGroupButtonItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroupButtonItem, RadioGroupButtons };
