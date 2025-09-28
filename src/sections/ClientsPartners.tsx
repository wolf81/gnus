import { ContentWrap } from "../components/ui/ContentWrap";
import { texturedUnderlineStyle } from "../components/ui/styles";
import { ACCENTS } from "../constants/accents";

export default function ClientsPartners() {
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
        style={texturedUnderlineStyle(ACCENTS.blue)}
      />
      <p className="text-white/80 mt-2">Trusted by 200+ companies worldwide.</p>

      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center">
        <ContentWrap>
          <Bandcamp />
        </ContentWrap>
        <ContentWrap>
          <Ditto />
        </ContentWrap>
        <ContentWrap>
          <AlphaGrowth />
        </ContentWrap>
        <ContentWrap>
          <Graffiti />
        </ContentWrap>
      </div>
    </section>
  );
}