import Hero from '@/components/hero';
import AboutSection from '@/components/sections/AboutSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import ModulesSection from '@/components/sections/ModulesSection';
import NewsSection from '@/components/sections/NewsSection';
import PartnersSection from '@/components/sections/PartnersSection';
import PortsSection from '@/components/sections/PortsSection';
import StatsSection from '@/components/sections/StatsSection';
import UsersSection from '@/components/sections/UsersSection';

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersSection />
      <ModulesSection />
      <AboutSection />
      <BenefitsSection />
      <NewsSection />
      <UsersSection />
      <PortsSection />
      <StatsSection />
    </>
  );
}
