'use client';

import { useLocale } from 'next-intl';
import { useEffect } from 'react';

export function LocaleProvider({ children }: { children: React.ReactNode }) {
  const locale = useLocale();
  const isRTL = locale === 'fa' || locale === 'ar';

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isRTL ? 'rtl' : 'ltr';
  }, [locale, isRTL]);

  return <>{children}</>;
}

