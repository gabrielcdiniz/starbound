import type { ReactNode } from 'react';

import { Divider } from '@mui/joy';

import { StackStyled } from './styled';

export type SectionBaseProps = Readonly<{
  title: ReactNode;
  children?: ReactNode;
}>;

export function SectionBase({ title, children }: SectionBaseProps) {
  return (
    <StackStyled component="section">
      {title}

      <Divider />

      {children}
    </StackStyled>
  );
}
