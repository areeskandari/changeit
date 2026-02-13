'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Hero() {
  const t = useTranslations('hero');
  const tc = useTranslations('common');
  const locale = useLocale();

  const trustBadges = [
    { key: 'securePayments', icon: '🔒' },
    { key: 'multiLayerVerification', icon: '✓' },
    { key: 'trustedPartners', icon: '🤝' },
    { key: 'settlement', icon: '⚡' },
  ];

  return (
    <section className="relative bg-gradient-to-b from-white to-gray-50 pt-20 pb-16 sm:pt-24 sm:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-navy mb-6 text-balance">
            {t('headline')}
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-10 text-balance">
            {t('subheadline')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href={`/${locale}/send-support`}
              className={cn(
                buttonVariants({}),
                'w-full sm:w-auto h-auto py-4 px-8 text-base shadow-lg hover:shadow-xl transform hover:scale-105',
              )}
            >
              {tc('sendSupport')}
            </Link>
            <Link
              href="#how-it-works"
              className={cn(
                buttonVariants({ variant: 'outline' }),
                'w-full sm:w-auto h-auto py-4 px-8 text-base border-navy text-navy',
              )}
            >
              {tc('seeHowItWorks')}
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {trustBadges.map((badge) => (
              <div
                key={badge.key}
                className="flex flex-col items-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-3xl mb-2">{badge.icon}</span>
                <span className="text-sm font-medium text-navy text-center">
                  {t(`trustBadges.${badge.key}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

