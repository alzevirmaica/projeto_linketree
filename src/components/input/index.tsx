import type { InputHTMLAttributes } from "react";

export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className="bg-white h-9 rounded-md outline-none px-2 mb-3"
      {...props}
    />
  );
}
