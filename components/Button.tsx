import { ButtonProps } from "@/types/ButtonProps";
import Link from "next/link";

export default function Button({ className, href, children, target, styled }: ButtonProps) {
  return (
    <Link
      href={`${href}`}
      className={styled
        ? `${className} rounded-md bg-white/10 px-3.5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-white/20 transition-all`
        : `${className} text-base font-semibold text-white`}
      target={target}
    >
      {children}
    </Link>
  )
}