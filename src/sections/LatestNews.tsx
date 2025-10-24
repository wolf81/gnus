import SectionHeader from "../components/layout/SectionHeader";
import NewsImage from "../assets/graphics/news_inside-gnus.png"
import ArrowRight from "../assets/graphics/arrow-right.png"
import GradientButton from "../components/ui/GradientButton";

export default function LatestNews() {
  return (
    <>
      <SectionHeader title="Our Latest News" description="Find out about the latest GNUS developments." />
      <div className="flex relative pt-8 gap-5">
        <div
          className="flex-1 bg-[lightgray] bg-[50%] bg-cover bg-no-repeat w-[39.375rem] h-[22.75rem]"
          style={{ backgroundImage: `url(${NewsImage})` }}
        />
        <div className="flex-1 flex flex-col justify-between">
          {/* Current News Item */}
          <div className="space-y-2">
            <div className="text-[1.5rem] text-left text-white">
              Inside GNUS: Turning idle devices into a global AI engine
            </div>
            <div className="text-[0.875rem] text-left">
              A quick overview of how our decentralized GPU network lowers compute costs and rewards developers— with a walkthrough of workload distribution, on-chain validation, and token incentives.
            </div>
          </div>

          {/* Other News */}
          <div className="space-y-2">
            <div className="text-[0.875rem] text-white text-start">OTHER NEWS</div>
            <div className="flex space-x-4 pt-4">
              <div className="flex-1 text-start">
                Launching mainnet: what to expect in Q4 — timelines, rewards, and integration paths.
              </div>
              <div className="flex-1 text-start">
                Developer SDK update: lighter footprint, faster verification, better mobile support.
              </div>
            </div>
            <div className="flex items-center gap-2 pt-7">
              <div className="text-white">Go To Blog</div>
              <img src={ArrowRight} alt="arrow" />
            </div>
          </div>
        </div> 
      </div>
       {/* Newsletter Signup */}
        <div className="relative pt-[3.75rem]">
          <div className="text-white text-xs">NEWSLETTER SIGNUP</div>
          <div className="flex justify-center gap-4 pt-8 h-12">
            <input
              type="text"
              placeholder="Email"
              className="
                w-[26.3125rem]
                h-fit
                rounded-[0.5rem] 
                border 
              border-[rgba(255,255,255,0.25)] 
              bg-[rgba(255,255,255,0.02)]
                px-3 py-2
              text-white
              placeholder-white/50
                focus:outline-none focus:ring-0
              "
            />
          <GradientButton title="Submit" className="w-[19.0625rem] !h-[2.6rem] !rounded-[0.5rem] py-2 font-semibold" />
          </div>
        </div>      
    </>
  )
}
