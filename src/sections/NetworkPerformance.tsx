import { texturedUnderlineStyle } from "../components/ui/styles";
import { ACCENTS } from "../constants/accents";

export default function NetworkPerformance() {
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
        style={texturedUnderlineStyle(ACCENTS.blue)}
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