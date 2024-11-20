'use client';

import { forwardRef, type ReactNode } from 'react';

import { Typography, type TypographyTypeMap } from '@mui/joy';

type InfoProps = Readonly<{
  children?: ReactNode;
}> &
  TypographyTypeMap['props'];

export const Info = forwardRef<HTMLParagraphElement, InfoProps>(
  ({ children, ...props }, ref) => {
    return (
      <Typography ref={ref} level="body-sm" {...props}>
        {children}
      </Typography>
    );
  },
);

Info.displayName = 'Info';
