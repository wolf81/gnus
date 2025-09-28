import { texturedChipStyle } from "../components/ui/styles";
import { TexturedButton } from "../components/ui/TexturedButton";
import { ACCENTS } from "../constants/accents";

export default function DualProposition() {
  const businessAccent = ACCENTS.blue;
  const devAccent = ACCENTS.teal;

  const Icon = ({ type, color = "#fff", size = 26 }: {
    type: string,
    color: string,
    size: number,
  }) => {
    const common: React.SVGProps<SVGSVGElement> = {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      stroke: color,
      strokeWidth: 1.8,
      strokeLinecap: "round",
      strokeLinejoin: "round",
    };
    switch (type) {
      case "bolt":
        return (
          <svg {...common}>
            <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
          </svg>
        );
      case "trend":
        return (
          <svg {...common}>
            <path d="M3 3v18h18" />
            <path d="M7 14l4-4 3 3 5-5" />
          </svg>
        );
      case "support":
        return (
          <svg {...common}>
            <circle cx="12" cy="12" r="9" />
            <path d="M7 12h-2a1 1 0 0 0-1 1v1a3 3 0 0 0 3 3h2" />
            <path d="M17 12h2a1 1 0 0 1 1 1v1a3 3 0 0 1-3 3h-2" />
            <path d="M12 6v6l4 2" />
          </svg>
        );
      case "plug":
        return (
          <svg {...common}>
            <path d="M9 7V3M15 7V3M7 11h10M12 11v10" />
            <path d="M8 15h8a2 2 0 0 0 2-2v-2H6v2a2 2 0 0 0 2 2z" />
          </svg>
        );
      case "chart":
        return (
          <svg {...common}>
            <rect x="3" y="11" width="4" height="9" rx="1" />
            <rect x="10" y="7" width="4" height="13" rx="1" />
            <rect x="17" y="3" width="4" height="17" rx="1" />
          </svg>
        );
      case "dollar":
        return (
          <svg {...common}>
            {/* vertical spine */}
            <path d="M12 4v16" />
            {/* shortened, centered S shape */}
            <path d="M16 9c0-1.5-2-2.5-4-2.5s-4 1-4 2.5c0 2.5 8 2.5 8 5 0 1.5-2 2.5-4 2.5s-4-1-4-2.5" />
          </svg>
        );        
      default:
        return null;
    }
  };

  const Bullet = ({ icon, text, color }: { icon: string, text: string, color: string }) => (
    <li className="flex items-center gap-3">
      <span
        className="w-6 h-6 rounded-lg grid place-items-center"
        aria-hidden="true"
        style={texturedChipStyle(color)}
      >
        <Icon type={icon} color="#ffffff" size={16} />
      </span>
      <span className="text-white/90">{text}</span>
    </li>
  );

  const Speckles = ({ color } : { color: string }) => (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        backgroundImage: `
          radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.35) 0, transparent 2px),
          radial-gradient(1px 1px at 22% 28%, rgba(255,255,255,0.28) 0, transparent 2px),
          radial-gradient(1px 1px at 35% 10%, rgba(255,255,255,0.3) 0, transparent 2px),
          radial-gradient(1px 1px at 60% 22%, rgba(255,255,255,0.26) 0, transparent 2px),
          radial-gradient(1px 1px at 72% 40%, rgba(255,255,255,0.3) 0, transparent 2px),
          radial-gradient(1px 1px at 85% 65%, rgba(255,255,255,0.28) 0, transparent 2px),
          radial-gradient(1px 1px at 30% 80%, rgba(255,255,255,0.3) 0, transparent 2px),
          radial-gradient(120px 80px at 110% -10%, ${color}2A 0, transparent 70%),
          radial-gradient(160px 100px at -10% 110%, ${color}22 0, transparent 70%)
        `,
        opacity: 0.35,
      }}
    />
  );

  return (
    <section className="max-w-7xl mx-auto px-4 py-16" id="business">
      <div className="grid md:grid-cols-2 gap-6 items-stretch">
        {/* Card: Businesses */}
        <div className="relative rounded-3xl p-8 border border-white/10 bg-white/[0.03] shadow-sm flex flex-col h-full">
          <Speckles color={businessAccent} />
          <h3
            className="text-xl md:text-2xl font-semibold tracking-tight md:whitespace-nowrap"
            style={{ color: businessAccent }}
          >
            Unlock Top-Tier GPU Power
          </h3>
          <p className="text-white/80 mt-4 text-base md:text-lg max-w-prose">
            Scale your AI, ML, and rendering workloads with our distributed GPU network. Pay only for what you use.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <Bullet icon="bolt" text="Up to 80% lower GPU costs vs. cloud giants" color={businessAccent} />
            <Bullet icon="trend" text="Scale instantly in minutes" color={businessAccent} />
            <Bullet icon="support" text="24/7 expert support inluded" color={businessAccent} />
          </ul>
          <div className="mt-auto pt-8">
            <TexturedButton color={businessAccent} href="#">Get GPU Power <span aria-hidden="true">→</span></TexturedButton>
          </div>
        </div>
        {/* Card: Developers */}
        <div className="relative rounded-3xl p-8 border border-white/10 bg-white/[0.03] shadow-sm flex flex-col h-full" id="dev">
          <Speckles color={devAccent} />
          <h3
            className="text-xl md:text-2xl font-semibold tracking-tight md:whitespace-nowrap"
            style={{ color: devAccent }}
          >
            Monetize Your User Base
          </h3>
          <p className="text-white/80 mt-4 text-base md:text-lg max-w-prose">
            Connect your app's users to our GPU network and earn revenue from their unused processing power.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <Bullet icon="dollar" text="Earn $2/month per user" color={devAccent} />
            <Bullet icon="plug" text="Zero friction on user experience" color={devAccent} />
            <Bullet icon="chart" text="Live revenue dashboard" color={devAccent} />
          </ul>
          <div className="mt-auto pt-8">
            <TexturedButton color={devAccent} href="#">Start Earning <span aria-hidden="true">→</span></TexturedButton>
          </div>
        </div>
      </div>
    </section>
  );
}