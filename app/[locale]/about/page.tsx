import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('about');

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">{t('title')}</h1>
        <p className="text-xl text-gray-600 mb-12">{t('subtitle')}</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">{t('mission.title')}</h2>
            <p className="text-gray-600 leading-relaxed">{t('mission.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-4">{t('vision.title')}</h2>
            <p className="text-gray-600 leading-relaxed">{t('vision.content')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-6">{t('values.title')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-navy mb-2">{t('values.security')}</h3>
                <p className="text-gray-600 text-sm">We prioritize security in every aspect of our operations.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-navy mb-2">{t('values.transparency')}</h3>
                <p className="text-gray-600 text-sm">Clear, upfront pricing with no hidden fees.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-navy mb-2">{t('values.compliance')}</h3>
                <p className="text-gray-600 text-sm">Full compliance with international regulations.</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h3 className="font-semibold text-navy mb-2">{t('values.trust')}</h3>
                <p className="text-gray-600 text-sm">Building trust through reliable service delivery.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

