import React, { HTMLAttributes, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const ContainerT = cva("container-w ", {
  variants: {
    display: {
      flex: "flex",
      grid: "grid",
    },
  },

  defaultVariants: {
    display: "flex",
  },

  compoundVariants: [
    {
      display: "flex",
      class: "flex-wrap",
    },

    {
      display: "grid",
      class: "",
    },
  ],
});

export interface ContainerProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof ContainerT> {
  children: ReactNode;
}
function Container({ children, display, className, ...props }: ContainerProps) {
  return (
    <div className={cn(ContainerT({ display }), className)} {...props}>
      {children}
    </div>
  );
}

export default Container;
