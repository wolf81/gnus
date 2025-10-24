interface SectionHeaderProps {
  title: string
  description: string
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <>
      <div className="relative pt-[7.5rem]">
        <div className="w-fit flex-1">
          <div className="h2 text-[#FFF] text-[2.25rem]">{title}</div>
          <div className="w-fill h-1 bg-[linear-gradient(270deg,#0C91CC_0%,#06AA78_100%)]" />
        </div>
        <div className="p text-[1.125rem] flex pt-3">{description}</div>
      </div>
    </>
  )
}