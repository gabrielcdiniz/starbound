import { Fragment, type ReactNode } from 'react';

type ListsLayoutProps = Readonly<{
  children: ReactNode;
  header: ReactNode;
  modal: ReactNode;
}>;

export default async function ListsLayout({
  children,
  header,
  modal,
}: ListsLayoutProps) {
  return (
    <Fragment>
      {header}

      {children}

      {modal}
    </Fragment>
  );
}
