import { forwardRef } from 'react';

import { Button, ButtonProps } from '@mui/joy';

export type ButtonBaseProps = ButtonProps;

export const ButtonBase = forwardRef<HTMLButtonElement, ButtonBaseProps>(
  ({ ...buttonProps }, ref) => {
    const customSX = buttonProps.sx;

    return (
      <Button
        {...buttonProps}
        sx={{ ...customSX, height: '48px', width: '100%' }}
        ref={ref}
      />
    );
  },
);

ButtonBase.displayName = 'ButtonBase';
