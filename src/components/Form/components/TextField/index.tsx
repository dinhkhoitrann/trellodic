import { TextFieldProps, TextareaAutosizeProps } from '@mui/material';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import { Controller, useFormContext } from 'react-hook-form';
import StyledTextarea from './components/TextArea';

export type RHFTextFieldProps = TextFieldProps &
  TextareaAutosizeProps & {
    name: string;
    label: string;
    isRequired?: boolean;
    id: string;
    tag?: string;
    type?: string;
  };

export default function RHFTextField({ id, name, label, isRequired = true, tag, ...other }: RHFTextFieldProps) {
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
          {tag === 'textarea' ? (
            <StyledTextarea {...field} value={field.value} minRows={3} />
          ) : (
            <TextField
              {...field}
              value={field.value}
              error={!!error}
              sx={{ width: '100%' }}
              helperText={error?.message}
              {...other}
            />
          )}
        </Box>
      )}
    />
  );
}
