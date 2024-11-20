'use client';

import { forwardRef, type ReactNode } from 'react';

import { Typography, type TypographyTypeMap } from '@mui/joy';

import { useMediaQuery } from 'usehooks-ts';

import { IS_MOBILE_BREAKPOINT } from '@/themes/breakpoints';

type SubtitleProps = Readonly<{
  children?: ReactNode;
}> &
  TypographyTypeMap['props'];

export const Subtitle = forwardRef<HTMLHeadingElement, SubtitleProps>(
  ({ children, ...props }, ref) => {
    const isMobile = useMediaQuery(IS_MOBILE_BREAKPOINT);

    if (isMobile)
      return (
        <Typography ref={ref} level="title-sm" {...props}>
          {children}
        </Typography>
      );

    return (
      <Typography ref={ref} level="title-md" {...props}>
        {children}
      </Typography>
    );
  },
);

Subtitle.displayName = 'Subtitle';
