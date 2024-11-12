import type { ReactNode } from 'react';

import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';

import { AppProviders } from './providers';

export const metadata: Metadata = {
  title: 'Hello World',
  description: 'A simple example of a Next.js app with TypeScript',
};

type RootLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default async function RootLayout({ children }: RootLayoutProps) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <AppProviders>
      <NextIntlClientProvider messages={messages}>
        <html lang={locale}>
          <body>{children}</body>
        </html>
      </NextIntlClientProvider>
    </AppProviders>
  );
}
