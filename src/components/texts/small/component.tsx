'use client';

import { forwardRef, type ReactNode } from 'react';

import { Typography, type TypographyTypeMap } from '@mui/joy';

type SmallProps = Readonly<{
  children?: ReactNode;
}> &
  TypographyTypeMap['props'];

export const Small = forwardRef<HTMLParagraphElement, SmallProps>(
  ({ children, ...props }, ref) => {
    return (
      <Typography ref={ref} level="body-xs" {...props}>
        {children}
      </Typography>
    );
  },
);

Small.displayName = 'Small';
