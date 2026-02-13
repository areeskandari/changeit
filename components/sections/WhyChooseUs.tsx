'use client';

import { useTranslations } from 'next-intl';

export function WhyChooseUs() {
  const t = useTranslations('whyChooseUs');

  const points = [
    { key: 'fast', icon: '⚡' },
    { key: 'transparent', icon: '💎' },
    { key: 'global', icon: '🌍' },
    { key: 'trusted', icon: '🤝' },
    { key: 'compliance', icon: '📋' },
    { key: 'security', icon: '🔒' },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-navy mb-16">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <div
              key={point.key}
              className="text-center p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">{point.icon}</span>
              </div>
              <p className="text-lg font-medium text-navy">{t(`points.${point.key}`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

