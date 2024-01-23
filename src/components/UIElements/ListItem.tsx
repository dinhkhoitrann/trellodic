import MUIListItem, { ListItemProps } from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';

function ListItem(props: ListItemProps) {
  return <MUIListItem {...props} />;
}

ListItem.Icon = ListItemIcon;
ListItem.Avatar = ListItemAvatar;
ListItem.Text = ListItemText;
ListItem.Button = ListItemButton;

export default ListItem;
