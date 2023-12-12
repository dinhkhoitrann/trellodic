import { Controller, useFormContext } from 'react-hook-form';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import { SxProps, Theme } from '@mui/material';

type RHFDatePickerProps = {
  id: string;
  name: string;
  text?: string;
  isRequired?: boolean;
  label: string;
  sx?: SxProps<Theme>;
};

export default function RHFDatePicker({ id, name, label, isRequired = true, ...other }: RHFDatePickerProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <Box sx={{ mb: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <InputLabel htmlFor={id} required={isRequired} sx={{ mb: 1 }}>
                {label}
              </InputLabel>
              <DesktopDatePicker
                {...field}
                format="DD/MM/YYYY"
                value={dayjs(field.value)}
                slotProps={{ textField: { size: 'small', id, fullWidth: true } }}
                {...other}
              />
            </LocalizationProvider>
          </Box>
        );
      }}
    />
  );
}
