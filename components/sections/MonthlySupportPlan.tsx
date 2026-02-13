'use client';

import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export function MonthlySupportPlan() {
  const t = useTranslations('monthlyPlan');
  const tc = useTranslations('common');
  const locale = useLocale();

  const features = [
    { key: 'fixedAmount', icon: '💰' },
    { key: 'flexibleCancellation', icon: '🔄' },
    { key: 'priorityProcessing', icon: '⚡' },
    { key: 'lowerFriction', icon: '✨' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-navy mb-6">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            {t('description')}
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {features.map((feature) => (
              <div
                key={feature.key}
                className="flex items-start gap-4 p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                <span className="text-3xl flex-shrink-0">{feature.icon}</span>
                <div>
                  <p className="font-medium text-navy">{t(`features.${feature.key}`)}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href={`/${locale}/monthly-plans`}
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {tc('startMonthlyPlan')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

