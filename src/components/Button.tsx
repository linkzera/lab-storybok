import { ButtonHTMLAttributes, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  asChild?: boolean;
}
export function Button({
  children,
  asChild,
  className,
  ...props
}: IButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      className={clsx(
        "py-3 px-4 flex items-center justify-center bg-cyan-500 text-black rounded font-semibold text-sm w-full transition-colors hover:bg-cyan-300 focus:ring-2 focus:ring-white ",
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  );
}
