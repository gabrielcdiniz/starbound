'use client';

import { Fragment, type ReactNode } from 'react';

import { HeaderContainer, HeaderContent, HeaderSpacer } from './styled';

type MobileHeaderType = Readonly<{
  children?: ReactNode;
}>;

export function MobileHeader({ children }: MobileHeaderType) {
  return (
    <Fragment>
      <HeaderContainer component="header">
        <HeaderContent variant="outlined">{children}</HeaderContent>
      </HeaderContainer>

      <HeaderSpacer />
    </Fragment>
  );
}
