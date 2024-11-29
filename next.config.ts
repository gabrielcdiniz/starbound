import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

import { withSentryConfig, type SentryBuildOptions } from '@sentry/nextjs';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['en-US', 'pt-BR'],
    defaultLocale: 'pt-BR',
  },
};

const sentryOptions: SentryBuildOptions = {
  org: 'gabrielcdiniz',
  project: 'starbound',

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false, // Can be used to suppress logs
};

export default withSentryConfig(withNextIntl(nextConfig), sentryOptions);
