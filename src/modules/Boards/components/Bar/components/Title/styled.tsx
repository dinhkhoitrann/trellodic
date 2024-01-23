import { styled } from '@mui/system';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Chip } from '@/components/UIElements';
import { useCustomTheme } from '@/common/styles/theme';

export const StyledTitle = styled(Chip)(({ theme }) => {
  const customTheme = useCustomTheme();
  const textColor = theme.palette.mode === 'dark' ? customTheme.colors.textInDarkMode : theme.palette.common.white;
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
  const customTheme = useCustomTheme();
  return `
    color: ${
      theme.palette.mode === 'dark'
        ? `${customTheme.colors.textInDarkMode} !important`
        : `${theme.palette.common.white} !important`
    }
    `;
});
