import { ACCENTS } from "../../constants/accents";

// Page-wide retro space background (CSS-only, fixed behind content)
export function PageBackground() {
  const teal = ACCENTS.teal;
  const blue = ACCENTS.blue;

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
            radial-gradient(70% 60% at 50% 100%, #A66CFF29 0, transparent 60%)
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
