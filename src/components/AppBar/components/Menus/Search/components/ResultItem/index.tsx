import Typography from '@mui/material/Typography';
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

type ResultItemProps = {
  startIcon: React.ReactNode;
  primaryText: string;
  secondaryText?: string;
  onClick: () => void;
};

function ResultItem({ startIcon, primaryText, secondaryText, onClick }: ResultItemProps) {
  return (
    <ListItem alignItems="flex-start" disablePadding disableGutters onClick={onClick}>
      <ListItemButton>
        <ListItemIcon>{startIcon}</ListItemIcon>
        <ListItemText
          sx={{ ml: '-14px' }}
          primary={primaryText}
          secondary={<Typography fontSize="12px !important">{secondaryText}</Typography>}
        />
      </ListItemButton>
    </ListItem>
  );
}

export default ResultItem;
