import { Fragment, type ReactNode } from 'react';

import { MobileHeader } from '@/layout/mobile';

type ListsLayoutProps = Readonly<{
  children: ReactNode;
  header: ReactNode;
}>;

export default function ListsLayout({ children, header }: ListsLayoutProps) {
  return (
    <Fragment>
      <MobileHeader>{header}</MobileHeader>

      {children}
    </Fragment>
  );
}
