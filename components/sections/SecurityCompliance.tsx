'use client';

import { useTranslations } from 'next-intl';

export function SecurityCompliance() {
  const t = useTranslations('security');

  const securityPoints = [
    { key: 'kyc', icon: '🛡️' },
    { key: 'aml', icon: '🔍' },
    { key: 'encryption', icon: '🔐' },
    { key: 'network', icon: '🌐' },
    { key: 'licensed', icon: '✅' },
    { key: 'noExposure', icon: '🔒' },
  ];

  return (
    <section className="py-20 bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityPoints.map((point, index) => (
            <div
              key={point.key}
              className="bg-navy-light p-6 rounded-xl hover:bg-navy-light/80 transition-colors animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <span className="text-3xl flex-shrink-0">{point.icon}</span>
                <p className="text-gray-200 leading-relaxed">{t(`points.${point.key}`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

