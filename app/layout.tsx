import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ChangeIt - Support Your Family. Securely. Globally.',
  description: 'Fast international family support transfers through our trusted settlement network.',
  keywords: 'money transfer, international transfers, family support, remittance, global payments',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}

