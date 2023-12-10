import { Controller, useFormContext } from 'react-hook-form';
import { FormHelperText, SelectProps } from '@mui/material';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import OutlinedInput from '@mui/material/OutlinedInput';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

type RHFSelectProps = SelectProps & {
  id: string;
  name: string;
  label: string;
  options: any[];
  isRequired?: boolean;
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

function RHFSelect({ id, name, label, children, isRequired, options, ...rest }: RHFSelectProps) {
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
            multiple
            displayEmpty
            value={field.value}
            onChange={field.onChange}
            input={<OutlinedInput />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value: any) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            error={!!error}
            fullWidth
            size="small"
            MenuProps={MenuProps}
          >
            {options.map((option, index) => (
              <MenuItem key={index} value={option}>
                {option}
              </MenuItem>
            ))}
          </Select>
          <FormHelperText>{error?.message}</FormHelperText>
        </>
      )}
    />
  );
}

export default RHFSelect;
