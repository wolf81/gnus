interface SeperatorProps {
  className?: string
}

export default function Seperator({ className }: SeperatorProps) {
  return (
    <>
      <div
        className={`w-full my-2 ${className ?? ""}`}
        style={{
          height: '0.0625rem',
          background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.15) 50%, rgba(255,255,255,0) 100%)',
        }}
      />
    </>
  )
}
