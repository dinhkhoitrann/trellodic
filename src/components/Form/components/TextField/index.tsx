import { TextFieldProps, TextareaAutosizeProps } from '@mui/material';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Controller, useFormContext } from 'react-hook-form';
import StyledTextarea from './components/TextArea';

export type RHFTextFieldProps = TextFieldProps &
  TextareaAutosizeProps & {
    name: string;
    label: string;
    isRequired?: boolean;
    id?: string;
    tag?: string;
    text?: string;
    type?: string;
  };

export default function RHFTextField({ name, label, isRequired = true, tag, text, ...other }: RHFTextFieldProps) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <Box sx={{ mb: 2 }}>
          <Typography component="label" htmlFor={other.id} sx={{ display: 'inline-block', mb: '4px' }}>
            {label}{' '}
            {isRequired && (
              <Typography component="span" sx={{ color: 'red' }}>
                *
              </Typography>
            )}
          </Typography>
          {tag === 'textarea' ? (
            <StyledTextarea {...field} value={field.value || text || ''} minRows={3} />
          ) : (
            <TextField
              {...field}
              value={field.value || text || ''}
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
