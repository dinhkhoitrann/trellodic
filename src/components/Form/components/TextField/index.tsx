import { TextFieldProps, TextareaAutosizeProps } from '@mui/material';
import TextField from '@mui/material/TextField';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { Controller, useFormContext } from 'react-hook-form';

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

const blue = {
  200: '#b6daff',
  400: '#3399FF',
  500: '#007FFF',
};

const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
    width: 100%;
    display: block;
    font-family: Roboto, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? theme.palette.grey[300] : theme.palette.grey[900]};
    background: ${theme.palette.mode === 'dark' ? theme.palette.grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50]};
    resize: vertical;

    &:hover {
      border-color: ${blue[400]};
    }

    &:focus {
      border-color: ${blue[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[500] : blue[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
);

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
