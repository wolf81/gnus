import Pill from "../components/ui/Pill"
import Button from "../components/ui/Button";
import Card from "../components/ui/Card"
import Icon from "../components/ui/Icon";
import type { ReactNode } from "react";
import ClientOptimal from '../assets/graphics/client_optimal.png'
import ClientGrapho from '../assets/graphics/client_grapho.png'
import ClientZapfast from '../assets/graphics/client_zapfast.png'
import ClientSignum from '../assets/graphics/client_signum.png'
import ClientVectra from '../assets/graphics/client_vectra.png'

interface CallToActionCardProps {
  title: string,
  tag: string,
  callToAction: string,
  borderAccent: string,
  buttonAccent: string,
  textAccent: string,
  children: ReactNode
}

function CallToActionCard({ title, tag, callToAction, borderAccent, buttonAccent, textAccent, children }: CallToActionCardProps) {
  return (
    <>
      <Card borderAccent={borderAccent}>
        <div className={`absolute w-80 h-80 top-[-4rem] left-[-4rem] ${buttonAccent} opacity-20 blur-[180px] rounded-full pointer-events-none`} />
        <div className="relative z-10 text-start">
          <Pill accent={buttonAccent}>{tag}</Pill>
          <div className={`text-lg ${textAccent} font-bold pt-3 pb-3`}>{title}</div>
          {children}
          <Button className="w-full mt-6" accent={buttonAccent}>{callToAction}</Button>
        </div>
      </Card>
    </>
  )
}

function GnusClients() {
  return (
    <>
      <div className="relative pt-[3.5rem]">
        <div className="text-white text-xs">COMPANIES THAT ARE USING GNUS</div>
        <div className="flex justify-between items-center w-full pt-6">
          <img src={ClientOptimal} className="block" />
          <img src={ClientZapfast} className="block" />
          <img src={ClientVectra} className="block" />
          <img src={ClientGrapho} className="block" />
          <img src={ClientSignum} className="block" />
          <img src={ClientOptimal} className="block" />
        </div>
      </div>
    </>
  )
}

export default function Hero() {
  return (
    <>
      <div className="relative flex flex-col items-center mt-[3.75rem] text-center">
        <Pill>Decentralized GPU network</Pill>

        <div className="w-[48rem] text-[3.625rem] leading-[4.25rem] tracking-[-0.20313rem] mt-4 mb-6 text-white">
          Turning smart devices into a global AI engine.
        </div>

        <div className="max-w-[48rem] text-white/70 leading-7">
          GNUS helps <span className="text-accent-primary">businesses slash 80% of GPU compute costs</span>, while <span className="text-accent-secondary">enabling developers to earn revenue </span>
          from their users’ idle devices.
        </div>
      </div>

      <div className="flex gap-4 py-10">
        <CallToActionCard title="Unlock Top-Tier GPU Power" tag="Businesses" callToAction="Get GPU Power" textAccent="text-accent-primary" borderAccent="border-accent-primary" buttonAccent="bg-accent-primary">
          <div>Scale your AI, ML, and rendering workloads with our distributed GPU network. Pay only for what you use.</div>
          <div className="space-y-4 pt-[1.06rem]">
            <div className="flex gap-3"><Icon name="power" accent="accent-primary" /><div>Up to 80% lower GPU costs vs. cloud giants</div></div>
            <div className="flex gap-3"><Icon name="linechart" accent="accent-primary" /><div>Scale instantly in minutes</div></div>
            <div className="flex gap-3"><Icon name="clock" accent="accent-primary" /><div>24/7 expert support inluded</div></div>
          </div>
        </CallToActionCard>
        <CallToActionCard title="Monetize Your User Base" tag="Developers" callToAction="Get GPU Power" textAccent="text-accent-secondary" borderAccent="border-accent-secondary" buttonAccent="bg-accent-secondary">
          <div>Connect your app's users to our GPU network and earn revenue from their unused processing power.</div>
          <div className="space-y-4 pt-[1.06rem]">
            <div className="flex gap-3"><Icon name="dollar" accent="accent-secondary" /><div>Earn $2/month per user</div></div>
            <div className="flex gap-3"><Icon name="plug" accent="accent-secondary" /><div>Zero friction on user experience</div></div>
            <div className="flex gap-3"><Icon name="barchart" accent="accent-secondary" /><div>Live revenue dashboard</div></div>
          </div>
        </CallToActionCard>
      </div>

      <GnusClients />
    </>
  )
}
