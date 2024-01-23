import { useState } from 'react';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
import { IconButton, InputAdornment } from '@/components/UIElements';
import RHFTextField, { RHFTextFieldProps } from '../TextField';

function PasswordField(props: RHFTextFieldProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <RHFTextField
      {...props}
      type={showPassword ? 'text' : 'password'}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" onClick={() => setShowPassword((prevState) => !prevState)}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}

export default PasswordField;
