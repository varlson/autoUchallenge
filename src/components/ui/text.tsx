import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

const textStyles = cva("font-roboto", {
  variants: {
    size: {
      displayLarge: "text-[57px] leading-[64px] font-regular tracking-[0px]",
      displayMedium: "text-[45px] leading-[52px] font-regular tracking-[0px]",
      displaySmall: "text-[36px] leading-[44px] font-regular tracking-[0px]",
      headlineLarge: "text-[32px] leading-[40px] font-regular tracking-[0px]",
      headlineMedium: "text-[28px] leading-[36px] font-regular tracking-[0px]",
      headlineSmall: "text-[24px] leading-[32px] font-regular tracking-[0px]",
      titleLarge: "text-[22px] leading-[28px] font-medium tracking-[0px]",
      titleMedium: "text-[16px] leading-[24px] font-medium tracking-[0.15px]",
      titleSmall: "text-[14px] leading-[20px] font-medium tracking-[0.1px]",
      labelLarge: "text-[14px] leading-[20px] font-medium tracking-[0.1px]",
      labelMedium: "text-[12px] leading-[16px] font-medium tracking-[0.5px]",
      labelSmall: "text-[11px] leading-[16px] font-medium tracking-[0.5px]",
      bodyLarge: "text-[16px] leading-[24px] font-regular tracking-[0.15px]",
      bodyMedium: "text-[14px] leading-[20px] font-regular tracking-[0.25px]",
      bodySmall: "text-[12px] leading-[16px] font-regular tracking-[0.4px]",
    },
    color: {
      primary: "text-primary",
      secondary: "text-secondary",
      success: "text-success",
      warning: "text-warning",
      offWhite: "text-off-white-600",
    },
    weight: {
      light: "font-light",
      regular: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
      extrabold: "font-",
    },
  },
  defaultVariants: {
    size: "bodyMedium",
    color: "primary",
    weight: "medium",
  },
});

interface TextProps extends VariantProps<typeof textStyles> {
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}

export const Text = ({
  as: Component = "p",
  children,
  size,
  color,
  className,
  weight,
}: TextProps) => {
  return (
    <Component className={clsx(textStyles({ size, color, weight }), className)}>
      {children}
    </Component>
  );
};
