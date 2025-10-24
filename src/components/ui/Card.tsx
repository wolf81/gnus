import type { ReactNode } from "react"

export interface CardProps {
  children: ReactNode,
  className?: string,
  borderAccent?: string,
  hideGradient?: boolean,
}

export default function Card({ children, className, borderAccent, hideGradient = false }: CardProps) {
  const bg = hideGradient ? "" : "bg-[radial-gradient(ellipse_at_top_left,_rgba(12,14,20,0)_0%,_#0C0E14_100%)]";

  return (
    <div
      className={`
        relative
        rounded-3xl
        border ${borderAccent ?? "border-white/25"} 
        ${bg}
        px-6
        py-[1.86rem]
        overflow-hidden
        flex-1
        ${className ?? ""}
      `}>
      {children}
    </div>
  )
}