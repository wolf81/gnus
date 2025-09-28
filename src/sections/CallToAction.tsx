import { TexturedButton } from "../components/ui/TexturedButton";
import { ACCENTS } from "../constants/accents";

export function CallToAction() {
  const businessAccent = ACCENTS.blue; // blue (Sales)
  const devAccent = ACCENTS.teal; // teal/green (Developers)

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
                Contact sales <span aria-hidden="true">→</span>
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
                Join the developer program <span aria-hidden="true">→</span>
              </TexturedButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
