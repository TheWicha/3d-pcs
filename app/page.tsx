import Hero from '@/components/hero';
import AboutSection from '@/components/sections/AboutSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import ModulesSection from '@/components/sections/ModulesSection';
import NewsSection from '@/components/sections/NewsSection';
import PartnersSection from '@/components/sections/PartnersSection';
import PortsSection from '@/components/sections/PortsSection';
import StatsSection from '@/components/sections/StatsSection';
import UsersSection from '@/components/sections/UsersSection';
import ShipModel3D from '@/components/ShipModel3DLazy';

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersSection />

      <ModulesSection />
      <div className="relative">
        <ShipModel3D direction={1} />
        <AboutSection />
      </div>
      <BenefitsSection />

      <NewsSection />
      <UsersSection />
      <PortsSection />
      <div className="relative">
        <ShipModel3D direction={-1} />
        <StatsSection />
      </div>
    </>
  );
}
