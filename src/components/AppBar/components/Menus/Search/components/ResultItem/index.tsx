import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';

type ResultItemProps = {
  startIcon: React.ReactNode;
  primaryText: string | undefined;
  onClick: () => void;
};

function ResultItem({ startIcon, primaryText, onClick }: ResultItemProps) {
  return (
    <ListItem alignItems="flex-start" disablePadding disableGutters onClick={onClick}>
      <ListItemButton>
        <ListItemIcon sx={{ minWidth: '48px' }}>{startIcon}</ListItemIcon>
        <ListItemText primary={primaryText} />
      </ListItemButton>
    </ListItem>
  );
}

export default ResultItem;
