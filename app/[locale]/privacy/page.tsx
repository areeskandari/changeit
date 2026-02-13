import { useTranslations } from 'next-intl';

export default function PrivacyPage() {
  const t = useTranslations('privacy');

  const sections = [
    { key: 'dataCollection' },
    { key: 'dataUse' },
    { key: 'dataSecurity' },
    { key: 'yourRights' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">{t('title')}</h1>
        <p className="text-sm text-gray-500 mb-8">{t('lastUpdated')}</p>
        <p className="text-lg text-gray-600 mb-12 leading-relaxed">{t('introduction')}</p>

        <div className="space-y-8">
          {sections.map((section) => (
            <section key={section.key} className="bg-gray-50 p-8 rounded-xl">
              <h2 className="text-2xl font-semibold text-navy mb-4">
                {t(`${section.key}.title`)}
              </h2>
              <p className="text-gray-600 leading-relaxed">
                {t(`${section.key}.content`)}
              </p>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

