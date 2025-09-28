import { texturedUnderlineStyle } from "../components/ui/styles";
import { ACCENTS } from "../constants/accents";

export default function LeadershipTeam({ accent }: { accent?: string }) {
    accent = accent ?? ACCENTS.blue
    
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

  const getInitials = (name: string) =>
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
        style={texturedUnderlineStyle(ACCENTS.blue)}
      />
      <p className="text-white/80 mt-6 max-w-3xl">
        Built by Top Talent from NVIDIA, Google, Amazon, and more. Dedicated to making AI compute
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
                style={{ boxShadow: `0 0 0 1px ${accent}33 inset` }}
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
                    style={{ color: accent }}
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
                      <svg width="16" height="16" viewBox="0 0 24 24" fill={ACCENTS.blue} aria-hidden="true">
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