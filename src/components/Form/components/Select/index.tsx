import { PropsWithChildren } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FormHelperText, SelectProps } from '@mui/material';
import { Chip, OutlinedInput, Select, Typography, InputLabel, Box } from '@/components/UIElements';
import { getOptionLabel } from './service';
import { MenuProps } from './constants';

type RHFSelectProps = SelectProps & {
  id: string;
  name: string;
  label: string;
  options?: any[];
  getLabelBy?: string;
  multiple?: boolean;
  isRequired?: boolean;
  renderValue?: (_selected: any) => React.ReactNode;
};

function RHFSelect({
  id,
  name,
  label,
  children,
  multiple = false,
  isRequired,
  options,
  getLabelBy,
  renderValue,
  ...rest
}: PropsWithChildren<RHFSelectProps>) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box sx={{ mb: 2 }}>
          <InputLabel htmlFor={id} required={isRequired} sx={{ mb: 1 }}>
            {label}
          </InputLabel>
          <Select
            {...rest}
            id={id}
            multiple={multiple}
            displayEmpty
            value={field.value}
            onChange={field.onChange}
            input={<OutlinedInput />}
            renderValue={(selected) => {
              if (!selected || selected.length === 0) return <Typography sx={{ color: 'gray' }}>{label}</Typography>;
              if (renderValue) return renderValue(selected);

              if (Array.isArray(selected)) {
                return (
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                    {selected.map((value: any) => (
                      <Chip key={value} label={getOptionLabel(options, value, getLabelBy)} />
                    ))}
                  </Box>
                );
              }

              return <Chip label={getOptionLabel(options, selected, getLabelBy)} />;
            }}
            error={!!error}
            fullWidth
            size="small"
            MenuProps={MenuProps}
          >
            {children}
          </Select>
          {error && <FormHelperText error={!!error}>{error.message}</FormHelperText>}
        </Box>
      )}
    />
  );
}

export default RHFSelect;
