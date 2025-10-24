import type { ReactNode } from "react"

export interface ButtonProps {
  accent: string
  children: ReactNode,
  className?: string,
  onClick?: () => void,
}

export default function Button({ accent, children, className, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex items-center justify-center gap-[0.625rem]
        px-3 py-[0.4375rem]
        rounded-md
        ${accent}
        shadow-inner shadow-white/25 text-sm
        ${className}
        `}>
      {children}
    </button>
  )
}