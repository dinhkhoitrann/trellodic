import { Controller, useFormContext } from 'react-hook-form';
import { FormHelperText, SelectProps } from '@mui/material';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import { getOptionLabel } from './service';

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

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
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
}: RHFSelectProps) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <Typography component="label" htmlFor={id} sx={{ display: 'inline-block', mb: '4px' }}>
            {label}{' '}
            {isRequired && (
              <Typography component="span" sx={{ color: 'red' }}>
                *
              </Typography>
            )}
          </Typography>
          <Select
            {...rest}
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
          <FormHelperText>{error?.message}</FormHelperText>
        </>
      )}
    />
  );
}

export default RHFSelect;
