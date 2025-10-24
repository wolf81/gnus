import type { ReactNode } from "react"

interface PillProps {
  accent?: string
  children: ReactNode,
}

export default function Pill({ children, accent }: PillProps) {
  return (
    <div
      className="
        h-[2.0625rem]
        inline-flex items-center justify-center gap-2
        px-[1.38rem]
        rounded-[3.4375rem]
        bg-[#0C0E14]
        shadow-[inset_0_1px_1px_rgba(255,255,255,0.20),inset_0_-1px_1px_rgba(255,255,255,0.20)]
      "
    >
      <span
        className={`w-[0.3rem] h-[0.3rem] rounded-full ${accent ?? "bg-accent-primary"}`}
      />
      <span className="text-xs">{children}</span>
    </div>
  )
}