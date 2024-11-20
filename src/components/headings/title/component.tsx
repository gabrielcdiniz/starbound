'use client';

import { forwardRef, type ReactNode } from 'react';

import { Typography, type TypographyTypeMap } from '@mui/joy';

import { useMediaQuery } from 'usehooks-ts';

import { IS_MOBILE_BREAKPOINT } from '@/themes/breakpoints';

type TitleProps = Readonly<{
  children?: ReactNode;
}> &
  TypographyTypeMap['props'];

export const Title = forwardRef<HTMLHeadingElement, TitleProps>(
  ({ children, ...props }, ref) => {
    const isMobile = useMediaQuery(IS_MOBILE_BREAKPOINT);

    if (isMobile)
      return (
        <Typography ref={ref} level="title-lg" {...props}>
          {children}
        </Typography>
      );

    return (
      <Typography ref={ref} level="h4" {...props}>
        {children}
      </Typography>
    );
  },
);

Title.displayName = 'Title';
