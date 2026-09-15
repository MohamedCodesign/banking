"use client";

import * as React from "react";

import * as SheetPrimitive from "@radix-ui/react-dialog";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

import { X } from "lucide-react";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/10",
      "data-[state=open]:animate-in data-[state=closed]:animate-out",
      "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className,
    )}
    {...props}
    ref={ref}
  />
));

SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content> & {
    side?: "top" | "right" | "bottom" | "left";
  }
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />

    <SheetPrimitive.Content
      ref={ref}
      className={cn(
        "fixed z-50 flex flex-col gap-4 bg-popover p-6 shadow-lg",
        "transition ease-in-out",

        // Top
        "data-[side=top]:inset-x-0",
        "data-[side=top]:top-0",
        "data-[side=top]:border-b",
        "data-[side=top]:slide-in-from-top",
        "data-[side=top]:slide-out-to-top",

        // Bottom
        "data-[side=bottom]:inset-x-0",
        "data-[side=bottom]:bottom-0",
        "data-[side=bottom]:border-t",
        "data-[side=bottom]:slide-in-from-bottom",
        "data-[side=bottom]:slide-out-to-bottom",

        // Left
        "data-[side=left]:inset-y-0",
        "data-[side=left]:left-0",
        "data-[side=left]:h-full",
        "data-[side=left]:w-3/4",
        "data-[side=left]:border-r",
        "data-[side=left]:slide-in-from-left",
        "data-[side=left]:slide-out-to-left",

        // Right
        "data-[side=right]:inset-y-0",
        "data-[side=right]:right-0",
        "data-[side=right]:h-full",
        "data-[side=right]:w-3/4",
        "data-[side=right]:border-l",
        "data-[side=right]:slide-in-from-right",

        // Animation
        "data-[state=open]:animate-in",
        "data-[state=closed]:animate-out",
        "data-[state=closed]:fade-out-0",
        "data-[state=open]:fade-in-0",
        "data-[side=left]:sm:max-w-sm",
        "data-[side=right]:sm:max-w-sm",

        className,
      )}
      data-side={side}
      {...props}
    >
      {children}

      <SheetPrimitive.Close asChild>
        <Button variant="ghost" className="absolute right-4 top-4" size="icon">
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));

SheetContent.displayName = SheetPrimitive.Content.displayName;

const SheetHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className,
    )}
    {...props}
  />
);

SheetHeader.displayName = "SheetHeader";

const SheetFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className,
    )}
    {...props}
  />
);

SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold text-foreground", className)}
    {...props}
  />
));

SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));

SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
