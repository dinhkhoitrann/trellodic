import { Controller, useFormContext } from 'react-hook-form';
import { Autocomplete, SxProps, TextField, Theme, Typography } from '@mui/material';

type RHFAutocompleteProps<T> = {
  id: string;
  name: string;
  onChangeValue?: Function;
  label: string;
  options: T[];
  size?: 'small' | 'medium';
  isRequired?: boolean;
  getOptionLabel?: ((_option: T) => string) | undefined;
  isOptionEqualToValue?: ((_option: T, _value: T) => boolean) | undefined;
  sx?: SxProps<Theme> | undefined;
};

export default function RHFAutocomplete<T extends {}>({ name, isRequired, ...other }: RHFAutocompleteProps<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <Autocomplete
            {...field}
            value={field.value || ''}
            fullWidth
            onChange={(_, value) => {
              field.onChange(value);
              if (other.onChangeValue) other.onChangeValue();
            }}
            placeholder={other.label}
            renderInput={(params) => (
              <>
                <Typography component="label" htmlFor={other.id} sx={{ display: 'inline-block', mb: '4px' }}>
                  {other.label}{' '}
                  {isRequired && (
                    <Typography component="span" sx={{ color: 'red' }}>
                      *
                    </Typography>
                  )}
                </Typography>
                <TextField
                  {...params}
                  // label={other.label}
                  value={field.value}
                  error={!!error}
                  helperText={error?.message}
                />
              </>
            )}
            {...other}
          />
        );
      }}
    />
  );
}
