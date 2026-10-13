import type { AnchorHTMLAttributes } from "react";

type Variant = "primary" | "ghost" | "contact";

const base =
  "inline-flex items-center justify-center gap-2.5 rounded-full px-6 py-3.5 text-[0.78rem] font-semibold uppercase tracking-[0.13em] text-center transition-transform duration-200 hover:-translate-y-0.5";

const variants: Record<Variant, string> = {
  primary: "bg-rose-strong text-cream hover:bg-rose-strong-hover",
  ghost: "border border-sage text-sage hover:bg-sage hover:text-cream",
  contact:
    "w-full bg-rose-strong text-cream px-5 py-4 hover:bg-rose-strong-hover",
};

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`.trim()} {...rest}>
      {children}
    </a>
  );
}
