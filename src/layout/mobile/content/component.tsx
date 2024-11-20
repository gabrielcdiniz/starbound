'use client';

import type { ReactNode } from 'react';

import { ContentContainer } from './styled';

type MobileContentProps = Readonly<{
  children?: ReactNode;
}>;

export function MobileContent({ children }: MobileContentProps) {
  return <ContentContainer>{children}</ContentContainer>;
}
