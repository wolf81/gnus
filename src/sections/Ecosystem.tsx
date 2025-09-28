import { texturedUnderlineStyle } from "../components/ui/styles";
import { ACCENTS } from "../constants/accents";

export function Ecosystem({ accent }: { accent: string }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16" id="ecosystem">
      <h2 className="text-3xl font-semibold">GNUS Ecosystem</h2>
      <div
        className="mt-2 h-1.5 w-24 rounded"
        style={texturedUnderlineStyle(ACCENTS.blue)}
      />
      <p className="text-white/80 mt-2">Explore the wider services GNUS offers.</p>
      <div className="mt-8 grid md:grid-cols-4 gap-6">
        {[
          { t: "GPU Patent", d: "To protect and secure our unique technology." },
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
              style={{ color: accent }}
            >
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}