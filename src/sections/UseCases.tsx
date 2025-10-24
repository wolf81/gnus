import SectionHeader from "../components/layout/SectionHeader";
import Card from "../components/ui/Card";
import BobaGuysImage from "../assets/graphics/case_boba-guys.png"
import HivemapperImage from "../assets/graphics/case_hivemapper.png"
import HomeBaseImage from "../assets/graphics/case_home-base.png"

interface PillProps {
  title: string
  accent: string,
}

function Pill({ title, accent }: PillProps) {
  return (
    <div
      className={`
        inline-flex items-center justify-center
        h-[2.0625rem] px-[0.75rem] py-[0.125rem]
        text-white font-light
        text-[0.75rem]
        rounded-[3.4375rem]
        ${accent}
      `}
      style={{
        boxShadow:
          '0 1px 1px 0 rgba(255,255,255,0.20) inset, 0 -1px 1px 0 rgba(255,255,255,0.20) inset',
      }}
    >
      {title}
    </div>
  )
}

function UseCaseCard({ title, tag, tagAccent, description, image }: { title: string, tag: string, tagAccent: string, description: string, image: string }) {
  return (
    <>
      <Card className="border-none !px-0 !py-0">
        <div
          className="
            relative
            rounded-3xl
            overflow-hidden
            bg-cover
            p-6
            px-6
            py-[1.86rem]
          text-white
          "
          style={{ backgroundImage: `url(${image})` }}
        >
          <div className="relative">
            <Pill title={tag} accent={tagAccent} />
            <div className="flex gap-2 pt-[1.66rem]">
              <div className="text-white text-[1.375rem] flex-1">{title}</div>
              <img src="/gnus/arrow-right.png" className="flex-none w-[2rem] h-[2rem]" />
            </div>
            <div className="pt-[1.41rem] text-white/70">{description}</div>
          </div>
        </div>
      </Card>
    </>
  )
}

export default function UseCases() {
  return (
    <>
      <SectionHeader title="Use Cases" description="Find out about the latest GNUS developments." />
      <div className="flex pt-8 text-left gap-5">
        <UseCaseCard tag="DEVELOPERS" tagAccent="bg-accent-primary" image={BobaGuysImage} title="Boba Guys" description="Boba Guys used a Solana-powered loyalty program to increase monthly sales by 67%." />
        <UseCaseCard tag="BUSINESSES" tagAccent="bg-accent-secondary" image={HivemapperImage} title="Hivemapper" description="Boba Guys used a Solana-powered loyalty program to increase monthly sales by 67%." />
        <UseCaseCard tag="GNUS VENTURES" tagAccent="bg-accent-tertiary" image={HomeBaseImage} title="Home Base" description="Boba Guys used a Solana-powered loyalty program to increase monthly sales by 67%." />
      </div>
    </>
  )
}