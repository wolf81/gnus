import Hero from "../components/layout/Hero";
import CallToAction from "../sections/CallToAction";
import ClientsPartners from "../sections/ClientsPartners";
import DualProposition from "../sections/DualProposition";
import HowItWorks from "../sections/HowItWorks";
import LeadershipTeam from "../sections/LeadershipTeam";
import NetworkPerformance from "../sections/NetworkPerformance";
import WhatsNew from "../sections/WhatsNew";

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <DualProposition />
        <HowItWorks />
        <NetworkPerformance />
        <WhatsNew />
        <LeadershipTeam />
        <ClientsPartners />
        <CallToAction />
      </main>
    </>
  );
}