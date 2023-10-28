import { Controller, useFormContext } from 'react-hook-form';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { SxProps, Theme } from '@mui/material';

type RHFDatePickerProps = {
  name: string;
  text?: string;
  isRequired?: boolean;
  label: string;
  sx?: SxProps<Theme>;
};

export default function RHFDatePicker({ name, label, isRequired = true, ...other }: RHFDatePickerProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        return (
          <Box sx={{ mb: 2 }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <Typography component="label" sx={{ display: 'inline-block', mb: '4px' }}>
                {label}{' '}
                {isRequired && (
                  <Typography component="span" sx={{ color: 'red' }}>
                    *
                  </Typography>
                )}
              </Typography>
              <DesktopDatePicker
                {...field}
                format="DD/MM/YYYY"
                value={dayjs(field.value)}
                sx={{ width: '100%' }}
                slotProps={{ textField: { size: 'small' } }}
                {...other}
              />
            </LocalizationProvider>
          </Box>
        );
      }}
    />
  );
}
