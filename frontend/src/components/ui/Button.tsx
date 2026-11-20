import type { AnchorHTMLAttributes, ReactNode } from "react";

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};
export default function Button({ children, variant = "primary", className = "", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold transition duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent";
  const style = variant === "primary"
    ? "bg-accent text-white hover:bg-accent-hover shadow-lg shadow-black/10"
    : "border border-slate-300 bg-white/70 text-slate-900 hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800";
  return <a className={`${base} ${style} ${className}`} {...props}>{children}</a>;
}
