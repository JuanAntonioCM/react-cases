import React, { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}
export function Button(props: ButtonProps) {
  const { asChild, ...rest } = props;

  const Component = asChild ? Slot : "button";
  return (
    <Component
      className="bg-violet-500 py-2 px-4 text-white rounded font-bold inline-block"
      {...rest}
    />
  );
}
