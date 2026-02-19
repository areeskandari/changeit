'use client';

import { useTranslations } from 'next-intl';

export function TransparentFees() {
  const t = useTranslations('pricing');

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-navy mb-16">
          {t('title')}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8 sm:p-12 bg-gradient-to-br from-green-50 to-green-100">
              <div className="text-center mb-8">
                <p className="text-2xl sm:text-3xl font-semibold text-navy mb-4">
                  {t('fee')}
                </p>
                <span className="text-5xl sm:text-6xl font-bold text-green-600">
                  {t('feeAmount')}
                </span>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <div className="bg-white rounded-xl p-6 text-center border-2 border-green-200">
                  <p className="text-lg font-bold text-navy">{t('oneTimePay')}</p>
                </div>
                <div className="bg-white rounded-xl p-6 text-center border-2 border-green-200">
                  <p className="text-lg font-bold text-navy">{t('monthlyPayment')}</p>
                </div>
              </div>
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

