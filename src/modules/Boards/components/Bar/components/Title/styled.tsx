import { styled } from '@mui/system';
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';

export const StyledTitle = styled(Chip)(({ theme }) => {
  const textColor = theme.palette.mode === 'dark' ? '#b6c2cf' : 'white';
  return `
    background-color: transparent;
    border: none;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 4px;
    '&:hover': {
        background-color: 'primary.50';
    }
    color: ${textColor};
    '.MuiSvgIcon-root': {
        color: ${textColor};
    }
`;
});

export const StyledDashboardIcon = styled(DashboardIcon)(({ theme }) => {
  return `
    color: ${theme.palette.mode === 'dark' ? '#b6c2cf !important' : 'white !important'}
    `;
});
