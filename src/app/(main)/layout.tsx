'use client';

import { useEffect, type ReactNode } from 'react';

import dynamic from 'next/dynamic';

import { useLists } from '@/hooks/lists';
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
  header: ReactNode;
}>;

export default function MainLayout({ children, header }: HomeLayoutProps) {
  const { getCurrentList } = useLists();

  useEffect(() => {
    getCurrentList();
  }, [getCurrentList]);

  return (
    <>
      <MobileContent>
        <MobileHeader>{header}</MobileHeader>

        {children}
      </MobileContent>

      <MobileAppBar />
    </>
  );
}
