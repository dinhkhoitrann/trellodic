import { styled } from '@mui/system';
import { TextareaAutosize } from '@/components/UIElements';

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

export default StyledTextarea;
