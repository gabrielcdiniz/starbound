'use client';

import { ListsContentContainer } from './styled';

type ListsContentProps = Readonly<{
  children?: React.ReactNode;
}>;

export function ListsContent({ children }: ListsContentProps): JSX.Element {
  return <ListsContentContainer>{children}</ListsContentContainer>;
}
