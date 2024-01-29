import { PropsWithChildren } from 'react';
import MUIButton, { ButtonProps as MUIButtonProps } from '@mui/material/Button';
import CircularProgress from './CircularProgress';

type ButtonProps = MUIButtonProps & {
  loading?: boolean;
};

function Button({ loading, children, startIcon, ...rest }: PropsWithChildren<ButtonProps>) {
  return (
    <MUIButton {...rest} startIcon={loading ? <CircularProgress size="18px" /> : startIcon} disabled={loading}>
      {children}
    </MUIButton>
  );
}

export default Button;
export type { ButtonProps };
