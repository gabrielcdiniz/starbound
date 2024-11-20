'use client';

import { type ReactNode } from 'react';

import dynamic from 'next/dynamic';

import { MobileHeader } from '@/layout/mobile';

export const MobileAppBar = dynamic(
  async () => (await import('@/layout/mobile')).MobileAppBar,
  { ssr: false },
);

export const MobileContent = dynamic(
  async () => (await import('@/layout/mobile')).MobileContent,
  { ssr: false },
);

type HomeLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function MainLayout({ children }: HomeLayoutProps) {
  return (
    <>
      <MobileContent>
        <MobileHeader />

        {children}
      </MobileContent>

      <MobileAppBar />
    </>
  );
}
