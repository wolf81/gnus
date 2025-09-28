import { texturedUnderlineStyle } from "../components/ui/styles";
import { TexturedButton } from "../components/ui/TexturedButton";
import { ACCENTS } from "../constants/accents";

export function HowItWorks() {
  const businessAccent = ACCENTS.blue;
  const developerAccent = ACCENTS.teal;

  const steps = [
    { title: "Idle power, activated", text: "Devices contribute unused GPU/CPU capacity." },
    { title: "Workload distribution", text: "GNUS securely assigns AI tasks in the background." },
    { title: "On-chain validation", text: "Results are verified with blockchain and zero-knowledge proofs." },
    { title: "Mutual benefit", text: "Businesses access compute • Developers earn rewards." },
  ];

  const Check = ({ color = "#fff", size = 16 }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );

  return (
    <section className="relative" id="how">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold">How It Works</h2>
        <div
          className="mt-2 h-1.5 w-24 rounded"
          style={texturedUnderlineStyle(ACCENTS.blue)}
        />
        <p className="text-white/80 mt-2">Get started in minutes with our streamlined processes.</p>
        {/* 4-step explainer */}
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl p-6 border border-white/10 bg-white/[0.02]">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-3 text-black font-bold"
                style={{ background: "#A66CFF" }}
              >
                {i + 1}
              </div>
              <h4 className="font-medium">{s.title}</h4>
              <p className="text-white/80 mt-1 text-sm">{s.text}</p>
            </div>
          ))}
        </div>
        {/* Persona flows */}
        <div className="mt-10 grid md:grid-cols-2 gap-6 items-stretch">
          {/* For Businesses */}
          <div className="rounded-3xl p-6 border border-white/10 bg-white/[0.03] shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold" style={{ color: businessAccent }}>
              For Businesses
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              <li className="flex items-center gap-2">
                <Check color={businessAccent} size={16} />
                <span>Define requirements</span>
              </li>
              <li className="flex items-center gap-2">
                <Check color={businessAccent} size={16} />
                <span>Connect to Network</span>
              </li>
              <li className="flex items-center gap-2">
                <Check color={businessAccent} size={16} />
                <span>Start Processing</span>
              </li>
              <li className="flex items-center gap-2">
                <Check color={businessAccent} size={16} />
                <span>Pay as you use</span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <TexturedButton color={businessAccent} href="#">
                Book a free consultation <span aria-hidden="true">→</span>
              </TexturedButton>
            </div>
          </div>
          {/* For Developers */}
          <div className="rounded-3xl p-6 border border-white/10 bg-white/[0.03] shadow-sm flex flex-col">
            <h3 className="text-xl font-semibold" style={{ color: developerAccent }}>
              For Developers
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-white/90">
              <li className="flex items-center gap-2">
                <Check color={developerAccent} size={16} />
                <span>Integrate SDK in 30 minutes</span>
              </li>
              <li className="flex items-center gap-2">
                <Check color={developerAccent} size={16} />
                <span>User Opt-In</span>
              </li>
              <li className="flex items-center gap-2">
                <Check color={developerAccent} size={16} />
                <span>Contribute power</span>
              </li>
              <li className="flex items-center gap-2">
                <Check color={developerAccent} size={16} />
                <span>Earn revenue</span>
              </li>
            </ul>
            <div className="mt-auto pt-6">
              <TexturedButton color={developerAccent} href="#">
                Join the developer program <span aria-hidden="true">→</span>
              </TexturedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}