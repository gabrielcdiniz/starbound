import type { Instrumentation } from 'next';

import * as Sentry from '@sentry/nextjs';

export const onRequestError: Instrumentation.onRequestError = (...args) => {
  Sentry.captureRequestError(...args);

  // ... additional logic here
};

export async function register() {
  const path = './../sentry';

  if (process.env.NEXT_RUNTIME === 'nodejs') {
    await import(`${path}/sentry.server.config`);
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    await import(`${path}/sentry.edge.config`);
  }
}
