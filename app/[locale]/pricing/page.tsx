import { useTranslations } from 'next-intl';
import { TransparentFees } from '@/components/sections/TransparentFees';

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-20">
        <TransparentFees />
      </div>
    </div>
  );
}

