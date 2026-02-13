import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function MonthlyPlansPage() {
  const t = useTranslations('monthlyPlans');
  const tc = useTranslations('common');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl sm:text-5xl font-bold text-navy mb-4">{t('title')}</h1>
        <p className="text-xl text-gray-600 mb-12">{t('subtitle')}</p>
        <p className="text-lg text-gray-600 mb-12">{t('description')}</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-semibold text-navy mb-6">{t('benefits.title')}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-green-50 rounded-xl">
                <h3 className="font-semibold text-navy mb-2">{t('benefits.consistency')}</h3>
                <p className="text-gray-600 text-sm">Your family receives support on schedule every month.</p>
              </div>
              <div className="p-6 bg-green-50 rounded-xl">
                <h3 className="font-semibold text-navy mb-2">{t('benefits.convenience')}</h3>
                <p className="text-gray-600 text-sm">Automated transfers mean no manual processing needed.</p>
              </div>
              <div className="p-6 bg-green-50 rounded-xl">
                <h3 className="font-semibold text-navy mb-2">{t('benefits.priority')}</h3>
                <p className="text-gray-600 text-sm">Monthly plans receive priority processing.</p>
              </div>
              <div className="p-6 bg-green-50 rounded-xl">
                <h3 className="font-semibold text-navy mb-2">{t('benefits.flexibility')}</h3>
                <p className="text-gray-600 text-sm">Cancel or modify your plan at any time.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-navy mb-6">{t('howToStart.title')}</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">1</span>
                </div>
                <p className="text-gray-600 pt-1">{t('howToStart.step1')}</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">2</span>
                </div>
                <p className="text-gray-600 pt-1">{t('howToStart.step2')}</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">3</span>
                </div>
                <p className="text-gray-600 pt-1">{t('howToStart.step3')}</p>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold">4</span>
                </div>
                <p className="text-gray-600 pt-1">{t('howToStart.step4')}</p>
              </div>
            </div>
          </section>

          <div className="text-center pt-8">
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              {tc('startMonthlyPlan')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

