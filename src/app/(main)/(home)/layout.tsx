import { Fragment, type ReactNode } from 'react';

import { MobileHeader } from '@/layout/mobile';

type HomeLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function HomeLayout({ children }: HomeLayoutProps) {
  return (
    <Fragment>
      <MobileHeader />

      {children}
    </Fragment>
  );
}
