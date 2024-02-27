import { MouseEvent, ReactNode, forwardRef, useState, useImperativeHandle } from 'react';
import { styled } from '@mui/material/styles';
import { Button, ButtonProps, Popover } from '@/components/UIElements';

const StyledButton = styled(Button)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: 40,
  justifyContent: 'left',
  paddingLeft: '20px',
  minWidth: '200px',
  boxShadow: '0px 2px 2px -2px rgba(0,0,0,0.2), 0px 4px 6px 0px rgba(0,0,0,0.14)',
}));

type ActionButtonProps = ButtonProps & { renderPopover: () => ReactNode };
export type ActionButtonRef = {
  handleClose: () => void;
};

export default forwardRef<ActionButtonRef, ActionButtonProps>(function ActionButton(props, ref) {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = !!anchorEl;

  useImperativeHandle(ref, () => ({
    handleClose,
  }));

  const handleOpen = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledButton {...props} onClick={handleOpen} />
      <Popover
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
