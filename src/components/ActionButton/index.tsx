import { MouseEvent, ReactNode, forwardRef, useState, useImperativeHandle } from 'react';
import Button, { ButtonProps } from '@mui/material/Button';
import Popover from '@mui/material/Popover';
import { styled } from '@mui/material/styles';

const StyledButton = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 40,
  justifyContent: 'left',
  paddingLeft: '20px',
  minWidth: '200px',
  boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14)',
}));

type ActionButtonProps = ButtonProps & { renderPopover: () => ReactNode };
export type ActionButtonRef = {
  handleClose: () => void;
};

export default forwardRef<ActionButtonRef, ActionButtonProps>(function ActionButton(props, ref) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  useImperativeHandle(ref, () => ({
    handleClose,
  }));

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <StyledButton {...props} onClick={handleOpen} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        {props.renderPopover()}
      </Popover>
    </>
  );
});
