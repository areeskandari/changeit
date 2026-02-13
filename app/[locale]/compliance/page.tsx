import { useTranslations } from 'next-intl';

export default function CompliancePage() {
  const t = useTranslations('compliance');

  const sections = [
    { key: 'kyc', icon: '🛡️' },
    { key: 'aml', icon: '🔍' },
    { key: 'dataProtection', icon: '🔐' },
    { key: 'regulatory', icon: '✅' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">{t('title')}</h1>
        <p className="text-xl text-gray-600 mb-12">{t('subtitle')}</p>

        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.key} className="bg-gray-50 p-8 rounded-xl">
              <div className="flex items-start gap-4">
                <span className="text-4xl">{section.icon}</span>
                <div className="flex-1">
                  <h2 className="text-2xl font-semibold text-navy mb-4">
                    {t(`${section.key}.title`)}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {t(`${section.key}.content`)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

