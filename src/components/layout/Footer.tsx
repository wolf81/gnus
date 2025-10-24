import Seperator from "./Seperator";

export default function Footer() {
  return (
    <>
      <div className="relative text-xs pt-[7.5rem]">
        <div className="flex text-xs text-left justify-between">
          <div className="w-[11.875rem] space-y-1">
            <div className="text-white pb-3">GNUS.AI</div>
            <div>Decentralized GPU network for affordable AI compute.</div>
            <div className="flex gap-2 pt-3"><img src="/linkedin-xs.png" className="w-[18px] h-[16px]" />LinkedIn</div>
          </div>
          <div className="w-[8.1875rem] space-y-1">
            <div className="text-white pb-3">For Businesses</div>
            <div>GPU Processing</div>
            <div>Pricing</div>
            <div>Customer Stories</div>
            <div>Docs</div>
            <div>Book a Demo</div>
          </div>
          <div className="w-[9.8175rem] space-y-1">
            <div className="text-white pb-3">For Developers</div>
            <div>Integrate with GNUS</div>
            <div>Revenue Model</div>
            <div>Use Cases</div>
            <div>Docs</div>
            <div>Join the Developer Program</div>
          </div>
          <div className="w-[5.0625rem] space-y-1">
            <div className="text-white pb-3">Resources</div>
            <div>Docs</div>
            <div>Blog</div>
            <div>FAQ</div>
            <div>Help Center</div>
          </div>
          <div className="w-[7.875rem] space-y-1">
            <div className="text-white pb-3">Genius Ventures</div>            
            <div>About</div>
            <div>Team</div>
            <div>Portfolio</div>
            <div>Investing</div>
          </div>
          <div className="w-[6.375rem] space-y-1">
            <div className="text-white pb-3">Community</div>
            <div>X / Twitter</div>
            <div>YouTube</div>
            <div>Instagram</div>
            <div>Telegram</div>
            <div>Ambassador Program</div>
          </div>
          <div className="w-[5.25rem] space-y-1">
            <div className="text-white pb-3">Contact</div>
            <div>Get in Touch</div>
            <div>Contact Sales</div>
            <div>Investor Inquiries</div>
          </div>
        </div>
        <Seperator className="my-8" />
        <div className="flex gap-4">
          <div className="flex-1 text-left">© 2025 GNUS.AI All rights reserved.</div>
          <div className="flex-none">Terms of Service</div>
          <div className="flex-none">Privacy Policy</div>
        </div>
      </div>
    </>
  )
}
