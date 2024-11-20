'use client';

import { forwardRef, type ReactNode } from 'react';

import { Typography, type TypographyTypeMap } from '@mui/joy';

type ParagraphProps = Readonly<{
  children?: ReactNode;
}> &
  TypographyTypeMap['props'];

export const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, ...props }, ref) => {
    return (
      <Typography ref={ref} level="body-md" {...props}>
        {children}
      </Typography>
    );
  },
);

Paragraph.displayName = 'Paragraph';
