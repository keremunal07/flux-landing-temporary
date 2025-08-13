import { cn } from "@/lib/utils";
import { JSX } from "react";

type TypographyVariant = "display" | "button" | "body-r" | "h1" | "body-s";

const variantClasses: Record<TypographyVariant, string> = {
  display: "text-[1rem] font-medium leading-[1rem]",
  button: "text-[0.875rem] font-medium",
  "body-r": "text-[1.375rem] font-medium leading-[140%]",
  "body-s": "text-[1rem] font-medium leading-[140%]",
  h1: "text-[4rem] font-semibold leading-[120%]",
};

type TypographyProps = {
  variant: TypographyVariant;
  children: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  onClick?: () => void;
};

export function Typography({
  variant,
  children,
  as: Tag = "p",
  className,
  onClick,
}: TypographyProps) {
  return (
    <Tag className={cn(variantClasses[variant], className)} onClick={onClick}>
      {children}
    </Tag>
  );
}
