'use client';

import { useTranslations } from 'next-intl';

export function TransparentFees() {
  const t = useTranslations('pricing');

  const tiers = [
    {
      range: t('tier1.range'),
      fee: t('tier1.fee'),
      bgColor: 'bg-gray-50',
    },
    {
      range: t('tier2.range'),
      fee: t('tier2.fee'),
      bgColor: 'bg-green-50',
    },
    {
      range: t('tier3.range'),
      fee: t('tier3.fee'),
      bgColor: 'bg-green-100',
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-navy mb-16">
          {t('title')}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-100">
              {tiers.map((tier, index) => (
                <div
                  key={index}
                  className={`p-6 sm:p-8 ${tier.bgColor} hover:bg-opacity-80 transition-colors`}
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-lg font-semibold text-navy">{tier.range}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-3xl sm:text-4xl font-bold text-green-600">
                        {tier.fee}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 font-medium">{t('note')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

