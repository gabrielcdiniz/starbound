'use server';

import { getRequestConfig } from 'next-intl/server';
import { cookies, headers } from 'next/headers';

export default getRequestConfig(async () => {
  const defaultLang = 'pt-BR';

  const langs = (await headers()).get('Accept-Language');
  const lang = langs?.split(',')[0].split(';')[0];

  const cookieLang = (await cookies()).get('locale')?.value;

  const locale = cookieLang || lang || defaultLang;

  return {
    locale,
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
