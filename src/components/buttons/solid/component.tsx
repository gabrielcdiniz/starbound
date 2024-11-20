'use client';

import { forwardRef } from 'react';

import { ButtonBase, type ButtonBaseProps } from '../base';

type ButtonSolidProps = ButtonBaseProps;

export const ButtonSolid = forwardRef<HTMLButtonElement, ButtonSolidProps>(
  (props, ref) => {
    return <ButtonBase {...props} variant="solid" ref={ref} />;
  },
);

ButtonSolid.displayName = 'ButtonSolid';
