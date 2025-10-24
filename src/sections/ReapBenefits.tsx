import Button from "../components/ui/Button";
import Pill from "../components/ui/Pill";

export default function ReapBenefits() {
  return (
    <>
      <div className="relative pt-32">
        <Pill>Let's Start</Pill>
        <div className="text-[2.5rem] text-[#FFF]">Ready to reap the benefits of GNUS?</div>
        <div className="max-w-[38rem] justify-self-center text-[1.125rem] pt-4">Whether you need low-cost GPU compute or want to monetize your network, we're here to help you get started.</div>
        <div className="flex w-fit justify-self-center gap-4 pt-10">
          <Button className="w-[13.75rem] h-12 bg-accent-primary" accent="">Get GPU Power</Button>
          <Button className="w-[13.75rem] h-12 bg-accent-secondary" accent="">Start Earning</Button>
        </div>
      </div>
    </>
  )
}
