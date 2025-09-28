import { texturedUnderlineStyle } from "../components/ui/styles";
import { TexturedButton } from "../components/ui/TexturedButton";
import { ACCENTS } from "../constants/accents";

export default function WhatsNew({ accent }: { accent?: string }) {
    accent = accent ?? ACCENTS.blue
    
  return (
    <section id="news" className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">What’s New</h2>
      </div>
      <div
        className="mt-2 h-1.5 w-24 rounded"
        style={texturedUnderlineStyle(ACCENTS.blue)}
      />
      <p className="text-white/80 mt-2">Find out about the latest GNUS developments.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6 items-start">
        <div>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at 30% 20%, ${accent}33, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.08), transparent 60%), linear-gradient(135deg, rgba(255,255,255,0.06), rgba(0,0,0,0))`,
              }}
            />
            <a
              href="#"
              className="absolute inset-0 grid place-items-center group"
              aria-label="Play video"
            >
              <span
                className="w-16 h-16 rounded-full bg-black/60 backdrop-blur border border-white/20 grid place-items-center group-hover:scale-105 transition"
                style={{ boxShadow: `0 0 0 2px ${accent}55` }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7-11-7z" fill="white" />
                </svg>
              </span>
            </a>
          </div>
          <div className="mt-4 space-y-2">
            <a href="#" className="flex items-start gap-2 text-white/90 hover:text-white">
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full"
                style={{ background: accent }}
              />
              <span className="text-sm">
                Launching mainnet: what to expect in Q4 — timelines, rewards, and integration paths.
              </span>
            </a>
            <a href="#" className="flex items-start gap-2 text-white/90 hover:text-white">
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full"
                style={{ background: accent }}
              />
              <span className="text-sm">
                Developer SDK update: lighter footprint, faster verification, better mobile support.
              </span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: accent }}
            >
              Go To Blog <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-semibold">
            Inside GNUS: Turning idle devices into a global AI engine
          </h3>
          <p className="text-white/80 mt-3 text-sm md:text-base max-w-prose">
            A quick overview of how our decentralized GPU network lowers compute costs and rewards
            developers— with a walkthrough of workload distribution, on-chain validation, and token
            incentives.
          </p>
          <div className="mt-5">
            <TexturedButton color={accent} href="#">Watch now</TexturedButton>
          </div>
        </div>
      </div>
    </section>
  );
}
