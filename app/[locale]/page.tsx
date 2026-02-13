import { useTranslations } from 'next-intl';
import { Hero } from '@/components/sections/Hero';
import { HowItWorks } from '@/components/sections/HowItWorks';
import { TransparentFees } from '@/components/sections/TransparentFees';
import { MonthlySupportPlan } from '@/components/sections/MonthlySupportPlan';
import { SecurityCompliance } from '@/components/sections/SecurityCompliance';
import { WhyChooseUs } from '@/components/sections/WhyChooseUs';
import { FAQ } from '@/components/sections/FAQ';

export default function HomePage() {
  return (
    <>
      <Hero />
      <HowItWorks />
      <TransparentFees />
      <MonthlySupportPlan />
      <SecurityCompliance />
      <WhyChooseUs />
      <FAQ />
    </>
  );
}

