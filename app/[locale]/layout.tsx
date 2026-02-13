import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { LocaleProvider } from '@/components/LocaleProvider';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { roboto, vazirmatn, notoSansArabic } from '@/lib/fonts';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  const messages = await getMessages();

  const fontClass =
    locale === 'fa'
      ? vazirmatn.className
      : locale === 'ar'
      ? notoSansArabic.className
      : roboto.className;

  return (
    <NextIntlClientProvider messages={messages}>
      <LocaleProvider>
        <div className={fontClass}>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </div>
      </LocaleProvider>
    </NextIntlClientProvider>
  );
}

