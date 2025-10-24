import type { ReactNode } from "react";
import SectionHeader from "../components/layout/SectionHeader";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Icon from "../components/ui/Icon";
import Seperator from "../components/layout/Seperator";
import HowTo1 from "../assets/graphics/howto_1.png"
import HowTo2 from "../assets/graphics/howto_2.png"
import HowTo3 from "../assets/graphics/howto_3.png"
import HowTo4 from "../assets/graphics/howto_4.png"
import GradientButton from "../components/ui/GradientButton";
import Raster from "../components/layout/Raster";

function NetworkPerformance() {
  return (
    <div className="relative pt-[3.75rem]">
      <div className="text-white text-xs">NETWORK PERFORMANCE</div>
      <div className="flex gap-6 pt-6">
        <div className="flex-1">
          <div className="text-[2.75rem] text-white">60K</div>
          <div>Active GPUs</div>
        </div>
        <div className="flex-1">
          <div className="text-[2.75rem] text-white">2.5M</div>
          <div>Compute Hours</div>
        </div>
        <div className="flex-1">
          <div className="text-[2.75rem] text-white">468M</div>
          <div>Tasks processed</div>
        </div>
        <div className="flex-1">
          <div className="text-[2.75rem] text-white">400+</div>
          <div>Active Projects</div>
        </div>
        <div className="flex-1">
          <div className="text-[2.75rem] text-white">12M</div>
          <div>Devices connected</div>
        </div>
        <div className="flex-1">
          <div className="text-[2.75rem] text-white">0.7M</div>
          <div>GNUS tokens burned</div>
        </div>
      </div>
    </div>
  )
}

function TargetAudienceCard({ title, callToAction, buttonAccent, borderAccent, children }: { title: string, callToAction: string, buttonAccent: string, borderAccent: string, children: ReactNode }) {
  return (
    <Card borderAccent={borderAccent}>
      <div className="absolute w-64 h-64 top-[-2rem] left-[-2rem] bg-cyan-500 opacity-20 blur-[180px] rounded-full" />
      <div className="text-lg text-white mb-2">{title}</div>
      <div>{children}</div>
      <Button className="w-full mt-4" accent={buttonAccent}>{callToAction}</Button>
    </Card>
  )
}

function StepCard({ image, title, buttonTitle, description }: { image: string, title: string, buttonTitle: string, description: string }) {
  return (
    <>
      <Card className="px-5" hideGradient>
        <img src={image} className="pb-4" />
        <GradientButton title={buttonTitle} />
        <div className="text-[1.375rem] text-white pt-4 text-left">{title}</div>
        <div className="text-xs text-left">{description}</div>
      </Card>
    </>
  )
}

export default function HowItWorks() {
  return (
    <>
      <SectionHeader title="How It Works" description="Get started in minutes with our streamlined processes." />
      <div className="relative">
        <Raster />

        <div className="relative z-10">
          <div className="flex gap-6 pt-8">
            <StepCard image={HowTo1} buttonTitle="Step One" title="Collecting idle power" description="Devices contribute unused GPU/CPU capacity." />
            <StepCard image={HowTo2} buttonTitle="Step Two" title="Workload distribution" description="GNUS securely assigns AI tasks in the background." />
            <StepCard image={HowTo3} buttonTitle="Step Three" title="On-chain validation" description="Results are verified with blockchain and zero-knowledge proofs." />
            <StepCard image={HowTo4} buttonTitle="Step Four" title="Mutual benefit" description="Businesses access compute & Developers earn rewards." />
          </div>
          <div className="flex gap-6 pt-8">
            <TargetAudienceCard title="For Businesses" callToAction="Book a free consulation" buttonAccent="bg-accent-primary" borderAccent="border-accent-primary">
              <div className="flex space-x-3"><Icon name="clock" accent="accent-primary" /><div>Define requirements</div></div>
              <Seperator />
              <div className="flex space-x-3"><Icon name="cloud" accent="accent-primary" /><div>Connect to Network</div></div>
              <Seperator />
              <div className="flex space-x-3"><Icon name="cpu" accent="accent-primary" /><div>Start Processing</div></div>
              <Seperator />
              <div className="flex space-x-3"><Icon name="dollar" accent="accent-primary" /><div>Pay as you use</div></div>
            </TargetAudienceCard>
            <TargetAudienceCard title="For Developers" callToAction="Join the developer program" buttonAccent="bg-accent-secondary" borderAccent="border-accent-secondary">
              <div className="flex space-x-3"><Icon name="clock" accent="accent-secondary" /><div>Integrate SDK in 30 minutes</div></div>
              <Seperator />
              <div className="flex space-x-3"><Icon name="user" accent="accent-secondary" /><div>User Opt-In</div></div>
              <Seperator />
              <div className="flex space-x-3"><Icon name="clock" accent="accent-secondary" /><div>Contribute power</div></div>
              <Seperator />
              <div className="flex space-x-3"><Icon name="dollar" accent="accent-secondary" /><div>Earn revenue</div></div>
            </TargetAudienceCard>
          </div>
        </div>
      </div>
      <NetworkPerformance />
    </>
  );
}
