"use client";
import React, { HTMLAttributes, ReactNode } from "react";
import { CheckCircle2Icon, InfoIcon, OctagonAlertIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "./alert";
import { cva, type VariantProps } from "class-variance-authority";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const IconSwitcher = {
  success: CheckCircle2Icon,
  destructive: OctagonAlertIcon,
  default: InfoIcon,
};

export const ToastVariants = cva("grid w-full items-start ", {
  variants: {
    variant: {
      success: "text-success",
      destructive: "text-destructive",
      default: "text-neutral",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface ToastProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ToastVariants> {
  title: string;
  contentToShow: string | ReactNode;
  id: string;
}

function Toast({
  contentToShow,
  title,
  variant,
  className,
  ...props
}: ToastProps) {
  const Icon = IconSwitcher[variant ?? "default"];

  toast(
    <div className={cn(ToastVariants({ variant }), className)} {...props}>
      <Alert className=" border-none" variant={variant}>
        <Icon />
        <AlertTitle>{title}</AlertTitle>
        <AlertDescription>{contentToShow}</AlertDescription>
      </Alert>
    </div>,

    {
      className: "flex flex-col",
      closeButton: true,
      duration: 5000,
    }
  );
}

export default Toast;
