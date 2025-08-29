import React, { useState } from "react";

// ---- Accent theme tokens ----
const ACCENTS = {
  business: { key: "business", name: "Businesses", color: "#18AEF0" }, // teal‑blue
  developer: { key: "developer", name: "Developers", color: "#36EDB5" }, // teal‑green
  crypto: { key: "crypto", name: "Crypto / Web3", color: "#A66CFF" }, // violet
};

// Dev-time sanity checks (non-breaking)
if (typeof window !== "undefined") {
  console.assert(ACCENTS.business && ACCENTS.developer && ACCENTS.crypto, "ACCENTS map is missing keys");
}

// ---- Muted, textured UI helpers ----
function texturedButtonStyle(color) {
  return {
    backgroundColor: color,
    backgroundImage: `
      radial-gradient(1px 1px at 25% 20%, rgba(255,255,255,0.08) 0, transparent 1.5px),
      radial-gradient(1px 1px at 65% 70%, rgba(0,0,0,0.06) 0, transparent 1.5px),
      repeating-linear-gradient(0deg, rgba(255,255,255,0.035) 0, rgba(255,255,255,0.035) 1px, transparent 1px, transparent 3px)
    `,
    filter: "saturate(85%) brightness(97%)",
    boxShadow:
      "inset 0 0 0 1px rgba(255,255,255,0.08), 0 2px 10px rgba(0,0,0,0.35)",
  };
}

function texturedChipStyle(color) {
  return {
    backgroundImage: `
      linear-gradient(${color}22, ${color}22),
      radial-gradient(1px 1px at 30% 30%, rgba(255,255,255,0.14) 0, transparent 1.5px),
      repeating-linear-gradient(90deg, rgba(0,0,0,0.04) 0, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 3px)
    `,
    border: "1px solid rgba(255,255,255,0.12)",
    filter: "saturate(85%) brightness(98%)",
  };
}

const TexturedButton = ({ color, href = "#", className = "", children }) => (
  <a
    href={href}
    className={`inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-black font-medium shadow-lg ${className}`}
    style={texturedButtonStyle(color)}
  >
    {children}
  </a>
);

// Textured underline style — muted color with subtle grain and speckles
function texturedUnderlineStyle(color) {
  return {
    backgroundColor: color,
    backgroundImage: `
      radial-gradient(1px 1px at 25% 40%, rgba(255,255,255,0.10) 0, transparent 1.5px),
      radial-gradient(1px 1px at 65% 60%, rgba(0,0,0,0.06) 0, transparent 1.5px),
      repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 3px)
    `,
    filter: "saturate(85%) brightness(98%)",
  };
}

// ---- GNUS Logo (inline SVG — stable) ----
function GnusLogo({ size = 32 }) {
  const gid = `gnusGrad-${Math.random().toString(36).slice(2, 7)}`;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="GNUS logo"
      role="img"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#36EDB5" />
          <stop offset="50%" stopColor="#18AEF0" />
          <stop offset="100%" stopColor="#A66CFF" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="14" fill={`url(#${gid})`} opacity="0.25" />
      <circle cx="32" cy="32" r="16" stroke="#FFFFFF" strokeWidth="2" opacity="0.9" />
      <path d="M20 36c6-10 18-10 24 0" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      <circle cx="26" cy="28" r="2" fill="#FFFFFF" />
      <circle cx="38" cy="28" r="2" fill="#FFFFFF" />
    </svg>
  );
}

function AccentSwitcher({ accent, setAccent }) {
  return (
    <div className="flex items-center gap-2">
      {Object.values(ACCENTS).map((opt) => (
        <button
          key={opt.key}
          onClick={() => setAccent(opt)}
          className={`px-3 py-1.5 rounded-full text-sm border transition hover:opacity-90 focus:outline-none ${
            accent.key === opt.key ? `border-transparent text-white` : `border-white/20 text-white`
          }`}
          style={{ background: accent.key === opt.key ? opt.color : "transparent" }}
          aria-pressed={accent.key === opt.key}
        >
          {opt.name}
        </button>
      ))}
    </div>
  );
}

function Nav({ accent, setAccent }) {
  return (
    <header className="relative z-20 bg-black/50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <GnusLogo size={32} />
          <span className="font-semibold tracking-wide">GNUS</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#how" className="hover:text-white">
            How it works
          </a>
          <a href="#business" className="hover:text-white">
            Businesses
          </a>
          <a href="#dev" className="hover:text-white">
            Developers
          </a>
          <a href="#ecosystem" className="hover:text-white">
            Ecosystem
          </a>
          <a href="#news" className="hover:text-white">
            What’s New
          </a>
          <a href="#team" className="hover:text-white">
            Team
          </a>
          <a href="#docs" className="hover:text-white">
            Docs
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <AccentSwitcher accent={accent} setAccent={setAccent} />
          <a
            href="#cta"
            className="px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 border border-white/10 text-sm"
          >
            Start Building
          </a>
        </div>
      </div>
    </header>
  );
}

// Page-wide retro space background (CSS-only, fixed behind content)
function PageBackground() {
  const teal = ACCENTS.developer.color;
  const blue = ACCENTS.business.color;
  const violet = ACCENTS.crypto.color;
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true">
      {/* base */}
      <div className="absolute inset-0 bg-[#0B0B10]" />
      {/* gradient mesh */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(60% 50% at 15% 20%, ${teal}33 0, transparent 60%),
            radial-gradient(55% 45% at 85% 25%, ${blue}33 0, transparent 60%),
            radial-gradient(70% 60% at 50% 100%, ${violet}29 0, transparent 60%)
          `,
          filter: "saturate(90%) contrast(95%)",
        }}
      />
      {/* fine grid grain */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 3px),
            repeating-linear-gradient(90deg, rgba(0,0,0,0.03) 0, rgba(0,0,0,0.03) 1px, transparent 1px, transparent 3px)
          `,
        }}
      />
      {/* stars speckles */}
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 15%, rgba(255,255,255,0.22) 0, transparent 2px),
            radial-gradient(1px 1px at 20% 35%, rgba(255,255,255,0.18) 0, transparent 2px),
            radial-gradient(1px 1px at 30% 60%, rgba(255,255,255,0.2) 0, transparent 2px),
            radial-gradient(1px 1px at 75% 25%, rgba(255,255,255,0.16) 0, transparent 2px),
            radial-gradient(1px 1px at 85% 55%, rgba(255,255,255,0.18) 0, transparent 2px),
            radial-gradient(1px 1px at 55% 85%, rgba(255,255,255,0.18) 0, transparent 2px)
          `,
        }}
      />
      {/* vignette */}
      <div className="absolute inset-0" style={{ boxShadow: "inset 0 0 160px 60px rgba(0,0,0,0.6)" }} />
    </div>
  );
}

function Hero({ accent }) {
  return (
    <section className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-10 md:pt-20 md:pb-12 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 mb-6">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: ACCENTS.crypto.color }} />
          <span className="text-xs text-white/70">Decentralized GPU network</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight max-w-3xl">
          Turning smart devices into a global AI engine.
        </h1>
        <p className="text-white/80 mt-5 max-w-2xl text-lg">
          GNUS helps businesses cut GPU compute costs by 80%, while enabling developers to earn revenue from their users' idle devices.
        </p>
      </div>
    </section>
  );
}

function DualProposition({ accent }) {
  const businessAccent = ACCENTS.business.color;
  const devAccent = ACCENTS.developer.color;

  const Icon = ({ type, color = "#fff", size = 26 }) => {
    const common = {
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
      default:
        return null;
    }
  };

  const Bullet = ({ icon, text, color }) => (
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

  const Speckles = ({ color }) => (
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
            Need GPU Power?
          </h3>
          <p className="text-white/80 mt-4 text-base md:text-lg max-w-prose">
            Scale your AI, ML, and rendering workloads with our distributed GPU network. Pay only for what you use.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <Bullet icon="bolt" text="Up to 80% lower GPU costs" color={businessAccent} />
            <Bullet icon="trend" text="Spin up in minutes" color={businessAccent} />
            <Bullet icon="support" text="SLA-backed 24/7 support" color={businessAccent} />
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
            Monetize Your User Base?
          </h3>
          <p className="text-white/80 mt-4 text-base md:text-lg max-w-prose">
            Connect your app's users to our GPU network and earn revenue from their unused processing power.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <Bullet icon="trend" text="Passive income" color={devAccent} />
            <Bullet icon="plug" text="Easy integration" color={devAccent} />
            <Bullet icon="chart" text="Real-time analytics" color={devAccent} />
          </ul>
          <div className="mt-auto pt-8">
            <TexturedButton color={devAccent} href="#">Start Earning <span aria-hidden="true">→</span></TexturedButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorks({ accent }) {
  const businessAccent = ACCENTS.business.color;
  const developerAccent = ACCENTS.developer.color;

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
        <h2 className="text-3xl font-semibold">Simple. Secure. Scalable</h2>
        <div
          className="mt-2 h-1.5 w-24 rounded"
          style={texturedUnderlineStyle(ACCENTS.business.color)}
        />
        <p className="text-white/80 mt-2">Get started in minutes with our streamlined processes.</p>
        {/* 4-step explainer */}
        <div className="mt-8 grid md:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div key={i} className="rounded-2xl p-6 border border-white/10 bg-white/[0.02]">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-3 text-black font-bold"
                style={{ background: ACCENTS.crypto.color }}
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
                book a free consultation <span aria-hidden="true">→</span>
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
                join the developer program <span aria-hidden="true">→</span>
              </TexturedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function NetworkPerformance({ accent }) {
  const stats = [
    { value: "60K", label: "Active GPUs" },
    { value: "2.5M", label: "Compute Hours" },
    { value: "458M", label: "Tasks processed" },
    { value: "400+", label: "Active Projects" },
    { value: "12M", label: "Devices connected" },
    { value: "0.7M", label: "GNUS tokens burned" },
  ];
  return (
    <section id="performance" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold">Network Performance</h2>
      <div
        className="mt-2 h-1.5 w-24 rounded"
        style={texturedUnderlineStyle(ACCENTS.business.color)}
      />
      <p className="text-white/80 mt-2">The GNUS network is ever growing.</p>
      {/* Speckled stats box with brand two-tone speckles, no vertical grain */}
      <div
        className="mt-6 rounded-3xl border border-white/10 bg-white/[0.02] p-5 md:p-6"
        style={{
          backgroundImage: `
            radial-gradient(1px 1px at 10% 15%, rgba(24,174,240,0.50) 0, transparent 1.6px),
            radial-gradient(1px 1px at 18% 22%, rgba(24,174,240,0.45) 0, transparent 1.6px),
            radial-gradient(1px 1px at 28% 35%, rgba(54,237,181,0.45) 0, transparent 1.6px),
            radial-gradient(1px 1px at 35% 12%, rgba(24,174,240,0.40) 0, transparent 1.6px),
            radial-gradient(1px 1px at 45% 30%, rgba(54,237,181,0.40) 0, transparent 1.6px),
            radial-gradient(1px 1px at 60% 22%, rgba(24,174,240,0.42) 0, transparent 1.6px),
            radial-gradient(1px 1px at 68% 65%, rgba(54,237,181,0.50) 0, transparent 1.6px),
            radial-gradient(1px 1px at 76% 40%, rgba(24,174,240,0.44) 0, transparent 1.6px),
            radial-gradient(1px 1px at 86% 46%, rgba(54,237,181,0.46) 0, transparent 1.6px),
            radial-gradient(1px 1px at 90% 75%, rgba(24,174,240,0.38) 0, transparent 1.6px)
          `,
          filter: "saturate(92%) brightness(98%)",
        }}
      >
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((s, i) => (
            <div key={i} className="text-center px-2 py-2">
              <div className="text-3xl md:text-4xl font-semibold text-white">{s.value}</div>
              <div className="text-xs md:text-sm text-white/70 mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ClientsPartners({ accent }) {
  // Logos use brand violet with a subtle retro paper texture in the tile
  const violet = ACCENTS.crypto.color;

  const LogoWrap = ({ children }) => (
    <div
      className="h-14 flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-4 relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(1px 1px at 25% 30%, rgba(255,255,255,0.08) 0, transparent 1.5px),
          radial-gradient(1px 1px at 70% 65%, rgba(0,0,0,0.06) 0, transparent 1.5px),
          repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 3px)
        `,
        boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)",
        filter: "saturate(88%) brightness(98%)",
      }}
    >
      <div className="opacity-95" style={{ color: violet }}>
        {children}
      </div>
    </div>
  );

  const Bandcamp = () => (
    <svg
      viewBox="0 0 140 32"
      width="140"
      height="32"
      fill="currentColor"
      aria-label="Bandcamp logo"
    >
      <polygon points="0,24 72,24 88,8 16,8" />
      <text
        x="96"
        y="23"
        fontSize="18"
        fontFamily="Inter, system-ui, -apple-system"
        fontWeight="700"
        fill="currentColor"
      >
        bc
      </text>
    </svg>
  );

  const Ditto = () => (
    <svg
      viewBox="0 0 140 32"
      width="140"
      height="32"
      fill="currentColor"
      aria-label="Ditto logo"
    >
      <text
        x="10"
        y="23"
        fontSize="18"
        fontFamily="Inter, system-ui, -apple-system"
        fontWeight="700"
        letterSpacing="0.5"
        fill="currentColor"
      >
        ditto
      </text>
    </svg>
  );

  const AlphaGrowth = () => (
    <svg
      viewBox="0 0 160 32"
      width="160"
      height="32"
      fill="currentColor"
      aria-label="Alpha Growth logo"
    >
      <text
        x="0"
        y="23"
        fontSize="18"
        fontFamily="Inter, system-ui, -apple-system"
        fontWeight="700"
        fill="currentColor"
      >
        alpha growth
      </text>
    </svg>
  );

  const Graffiti = () => (
    <svg
      viewBox="0 0 160 32"
      width="160"
      height="32"
      fill="currentColor"
      aria-label="Graffiti Entertainment logo"
    >
      <text
        x="0"
        y="23"
        fontSize="18"
        fontFamily="Inter, system-ui, -apple-system"
        fontWeight="700"
        fill="currentColor"
      >
        Graffiti
      </text>
    </svg>
  );

  return (
    <section id="clients" className="max-w-7xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-semibold">Clients and Partners</h2>
      <div
        className="mt-2 h-1.5 w-24 rounded"
        style={texturedUnderlineStyle(ACCENTS.business.color)}
      />
      <p className="text-white/80 mt-2">Trusted by 200+ companies worldwide.</p>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center">
        <LogoWrap>
          <Bandcamp />
        </LogoWrap>
        <LogoWrap>
          <Ditto />
        </LogoWrap>
        <LogoWrap>
          <AlphaGrowth />
        </LogoWrap>
        <LogoWrap>
          <Graffiti />
        </LogoWrap>
      </div>
    </section>
  );
}

function Ecosystem({ accent }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16" id="ecosystem">
      <h2 className="text-3xl font-semibold">GNUS Ecosystem</h2>
      <div
        className="mt-2 h-1.5 w-24 rounded"
        style={texturedUnderlineStyle(ACCENTS.business.color)}
      />
      <p className="text-white/80 mt-2">Explore the wider services GNUS offers.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {[
          { t: "GNUS Token", d: "Utility token needed for processing AI tasks." },
          { t: "GNUS Ventures", d: "Partner apps, AI solutions, and white-label services." },
          { t: "Crypto Wallet", d: "Secure, fast, and integrated into the platform." },
        ].map((c, i) => (
          <div key={i} className="rounded-2xl p-6 border border-white/10 bg-white/[0.02]">
            <h4 className="font-medium">{c.t}</h4>
            <p className="text-white/80 mt-1 text-sm">{c.d}</p>
            <a
              href="#"
              className={`inline-flex items-center gap-2 mt-4 text-sm font-medium`}
              style={{ color: accent.color }}
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhatsNew({ accent }) {
  return (
    <section id="news" className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">What’s New</h2>
      </div>
      <div
        className="mt-2 h-1.5 w-24 rounded"
        style={texturedUnderlineStyle(ACCENTS.business.color)}
      />
      <p className="text-white/80 mt-2">Find out about the latest GNUS developments.</p>
      <div className="mt-8 grid md:grid-cols-2 gap-6 items-start">
        <div>
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
            <div
              className="absolute inset-0"
              style={{
                background: `radial-gradient(circle at 30% 20%, ${accent.color}33, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.08), transparent 60%), linear-gradient(135deg, rgba(255,255,255,0.06), rgba(0,0,0,0))`,
              }}
            />
            <a
              href="#"
              className="absolute inset-0 grid place-items-center group"
              aria-label="Play video"
            >
              <span
                className="w-16 h-16 rounded-full bg-black/60 backdrop-blur border border-white/20 grid place-items-center group-hover:scale-105 transition"
                style={{ boxShadow: `0 0 0 2px ${accent.color}55` }}
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
                style={{ background: accent.color }}
              />
              <span className="text-sm">
                Launching mainnet: what to expect in Q4 — timelines, rewards, and integration paths.
              </span>
            </a>
            <a href="#" className="flex items-start gap-2 text-white/90 hover:text-white">
              <span
                className="mt-2 w-1.5 h-1.5 rounded-full"
                style={{ background: accent.color }}
              />
              <span className="text-sm">
                Developer SDK update: lighter footprint, faster verification, better mobile support.
              </span>
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-medium"
              style={{ color: accent.color }}
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
            <TexturedButton color={accent.color} href="#">Watch now</TexturedButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function LeadershipTeam({ accent }) {
  const team = [
    {
      name: "Kenneth Hurley",
      title: "Founder & CEO",
      photo: "",
      linkedin: "https://www.linkedin.com/in/klhurley",
      x: "https://x.com/SuperGeniusEth",
      bio: "Kenneth Hurley has worked at Amazon, Google, NVIDIA, Intel, and EA. With 40+ years in software and gaming, he’s built and scaled systems across platforms.",
    },
    {
      name: "Michael Hara",
      title: "Business Development",
      photo: "",
      linkedin: "https://www.linkedin.com/in/michaelhara/",
      bio: "Michael Hara served 13 years as a Senior Vice President at NVIDIA and brings capital‑markets savvy, strategic leadership, and operational rigor.",
    },
    {
      name: "George Northup",
      title: "Board Member",
      photo: "",
      linkedin: "https://www.linkedin.com/in/georgenorthup/",
      bio: "George Northup is a technology entrepreneur and investor with 25 years of leading and advising high‑growth companies.",
    },
  ];

  const getInitials = (name) =>
    name
      .split(" ")
      .filter(Boolean)
      .map((w) => w[0])
      .slice(0, 2)
      .join("")
      .toUpperCase();

  return (
    <section id="team" className="max-w-7xl mx-auto px-4 py-16">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-semibold">Leadership Team</h2>
      </div>
      <div
        className="mt-2 h-1.5 w-24 rounded"
        style={texturedUnderlineStyle(ACCENTS.business.color)}
      />
      <p className="text-white/80 mt-6 max-w-3xl">
        Built by Top Talent from Nvidia, Google, Amazon, and more. Dedicated to making AI compute
        affordable and accessible.
      </p>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((m, i) => (
          <article
            key={i}
            className="rounded-2xl p-6 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition"
          >
            <div className="flex items-center gap-4">
              <div
                className="w-20 h-20 rounded-2xl overflow-hidden ring-1 ring-white/10 bg-white/[0.04]"
                style={{ boxShadow: `0 0 0 1px ${accent.color}33 inset` }}
                aria-label={`${m.name} headshot`}
              >
                {m.photo ? (
                  <img src={m.photo} alt={`${m.name} headshot`} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full grid place-items-center text-white/80 text-xl font-semibold">
                    {getInitials(m.name)}
                  </div>
                )}
              </div>
              <div>
                <h3 className="font-medium leading-tight">{m.name}</h3>
                <div className="text-white/70 text-sm">{m.title}</div>
                <div className="mt-1 flex items-center gap-4">
                  <a
                    href={m.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium hover:text-white"
                    style={{ color: accent.color }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M4.98 3.5A2.5 2.5 0 1 0 5 8.5 2.5 2.5 0 0 0 4.98 3.5zM3 9h4v12H3zM9 9h3.8v1.64h.05a4.17 4.17 0 0 1 3.75-2.06c4.01 0 4.75 2.64 4.75 6.08V21h-4v-5.33c0-1.27-.02-2.9-1.77-2.9-1.78 0-2.05 1.38-2.05 2.8V21H9z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  {m.x && (
                    <a
                      href={m.x}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-90"
                      aria-label="Kenneth Hurley on X"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill={ACCENTS.business.color} aria-hidden="true">
                        <path d="M18.244 2H22L13.52 11.44 22 22h-4.756l-6.064-7.31L6.828 22H2l8.965-10.42L2 2h4.756l5.395 6.51L18.244 2z" />
                      </svg>
                      <span className="sr-only">X</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
            <p className="text-white/80 text-sm mt-4">{m.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function CTA({ accent }) {
  const businessAccent = ACCENTS.business.color; // blue (Sales)
  const devAccent = ACCENTS.developer.color; // teal/green (Developers)

  return (
    <section id="cta" className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-16 relative">
        <div className="text-center">
          <h2 className="text-3xl font-semibold">Ready to reap the benefits of GNUS?</h2>
          <p className="text-white/80 mt-2 max-w-2xl mx-auto">
            Whether you need low-cost GPU compute or want to monetize your network, we're here to help you get started.
          </p>
        </div>

        {/* Two-callout layout */}
        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {/* Business Solutions */}
          <div className="rounded-3xl p-8 border border-white/10 bg-white/[0.03] shadow-sm">
            <h3 className="text-2xl font-semibold" style={{ color: businessAccent }}>
              Business Solutions
            </h3>
            <p className="text-white/80 mt-4 text-base md:text-lg">
              Scale your AI and ML workloads with our distributed GPU network. Get started with a free consultation.
            </p>
            <div className="mt-6">
              <TexturedButton color={businessAccent} href="#contact">
                Contact Sales <span aria-hidden="true">→</span>
              </TexturedButton>
            </div>
          </div>

          {/* Developer Program */}
          <div className="rounded-3xl p-8 border border-white/10 bg-white/[0.03] shadow-sm">
            <h3 className="text-2xl font-semibold" style={{ color: devAccent }}>
              Developer Program
            </h3>
            <p className="text-white/80 mt-4 text-base md:text-lg">
              Monetize your app's user network and start earning passive income from distributed GPU processing.
            </p>
            <div className="mt-6">
              <TexturedButton color={devAccent} href="#dev-program">
                Join Developer Program <span aria-hidden="true">→</span>
              </TexturedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="flex items-center gap-2">
            <GnusLogo size={28} />
            <span className="font-semibold">GNUS</span>
          </div>
          <p className="text-white/70 mt-2">Decentralized GPU network for affordable AI compute.</p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="font-medium text-white">Product</div>
            <a href="#how" className="block text-white/70 hover:text-white">
              How it works
            </a>
            <a href="#business" className="block text-white/70 hover:text-white">
              Businesses
            </a>
            <a href="#dev" className="block text-white/70 hover:text-white">
              Developers
            </a>
          </div>
          <div className="space-y-2">
            <div className="font-medium text-white">Company</div>
            <a href="#ecosystem" className="block text-white/70 hover:text-white">
              Ecosystem
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              Blog
            </a>
            <a href="#" className="block text-white/70 hover:text-white">
              Contact
            </a>
          </div>
        </div>
        <div className="text-white/60">
          <div>© {new Date().getFullYear()} GNUS. All rights reserved.</div>
          <div className="mt-2 flex gap-4">
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Privacy
            </a>
            <a href="#" className="hover:text-white">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function GnusHomepagePrototype() {
  const [accent, setAccent] = useState(ACCENTS.business);

  return (
    <>
      {/* Global font import for preview */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');`}</style>
      <PageBackground />
      <main
        className="relative z-10 min-h-screen text-white selection:bg-white/20 selection:text-white"
        style={{
          fontFamily:
            'Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Apple Color Emoji", "Segoe UI Emoji"',
        }}
      >
        <Nav accent={accent} setAccent={setAccent} />
        <Hero accent={accent} />
        <DualProposition accent={accent} />
        <HowItWorks accent={accent} />
        <NetworkPerformance accent={accent} />
        <WhatsNew accent={accent} />
        <LeadershipTeam accent={accent} />
        <ClientsPartners accent={accent} />
        <Ecosystem accent={accent} />
        <CTA accent={accent} />
        <Footer />
      </main>
    </>
  );
}
