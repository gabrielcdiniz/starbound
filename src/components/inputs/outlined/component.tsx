'use client';

import { forwardRef } from 'react';

import { InputBase, type InputBaseProps } from '../base';

type InputOutlinedProps = InputBaseProps;

export const InputOutlined = forwardRef<HTMLInputElement, InputOutlinedProps>(
  (props, ref) => {
    return <InputBase {...props} variant="outlined" ref={ref} />;
  },
);

InputOutlined.displayName = 'InputOutlined';
