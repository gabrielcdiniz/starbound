import { forwardRef } from 'react';

import { Snackbar, type SnackbarProps } from '@mui/joy';

export type SnackbarBaseProps = SnackbarProps;

export const SnackbarBase = forwardRef<HTMLDivElement, SnackbarBaseProps>(
  (props, ref) => {
    return <Snackbar autoHideDuration={3000} {...props} ref={ref} />;
  },
);

SnackbarBase.displayName = 'SnackbarBase';
