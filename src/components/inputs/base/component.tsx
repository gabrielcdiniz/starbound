import { forwardRef } from 'react';
import { Controller, type ControllerProps } from 'react-hook-form';

import { FormControl, FormHelperText, Input, type InputProps } from '@mui/joy';

import { Small } from '@/components/texts';

export type InputBaseProps = Readonly<{
  error?: string;
}> &
  Omit<ControllerProps, 'render'> &
  Omit<InputProps, 'defaultValue' | 'error'>;

export const InputBase = forwardRef<HTMLInputElement, InputBaseProps>(
  ({ name, control, error, ...inputProps }, ref) => {
    // remove "defaultValue", because we use "defaultValues" from useForm
    delete inputProps.defaultValue;

    return (
      <FormControl error={!!error}>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Input
              size="lg"
              sx={{ height: '48px' }}
              {...field}
              {...inputProps}
              ref={ref}
            />
          )}
        />

        {error && (
          <Small>
            <FormHelperText>{error}</FormHelperText>
          </Small>
        )}
      </FormControl>
    );
  },
);

InputBase.displayName = 'InputBase';
