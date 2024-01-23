import { ListItem } from '@/components/UIElements';

type ResultItemProps = {
  startIcon: React.ReactNode;
  primaryText: string | undefined;
  onClick: () => void;
};

function ResultItem({ startIcon, primaryText, onClick }: ResultItemProps) {
  return (
    <ListItem alignItems="flex-start" disablePadding disableGutters onClick={onClick}>
      <ListItem.Button>
        <ListItem.Icon sx={{ minWidth: '48px' }}>{startIcon}</ListItem.Icon>
        <ListItem.Text primary={primaryText} />
      </ListItem.Button>
    </ListItem>
  );
}

export default ResultItem;
