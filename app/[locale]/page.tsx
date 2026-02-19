import { useTranslations } from 'next-intl';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { TransparentFees } from '@/components/sections/TransparentFees';
import { CountryFlags } from '@/components/sections/CountryFlags';

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <TransparentFees />
      <CountryFlags />
    </>
  );
}

