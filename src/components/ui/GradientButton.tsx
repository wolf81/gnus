interface GradientButtonProps {
  title: string,
  className?: string,
}

export default function GradientButton({ title, className } : GradientButtonProps) {
  return (
    <>
      <button
        type="button"
        className={`
          flex items-center justify-center
          h-[2.0625rem] px-[0.75rem] py-[0.125rem]
          rounded-[3.4375rem]
          shadow-inner
          text-black
          ${className ?? ""}
        `}
        style={{
          background: 'linear-gradient(270deg, #0C91CC 0%, #06AA78 100%)',
          boxShadow: 'inset 0 1px 1px 0 rgba(255,255,255,0.2), inset 0 -1px 1px 0 rgba(255,255,255,0.2)',
        }}
      >
        {title}
      </button>
    </>
  )
}