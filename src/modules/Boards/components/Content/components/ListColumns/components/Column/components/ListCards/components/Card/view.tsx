import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import CommentIcon from '@mui/icons-material/Comment';
import GroupIcon from '@mui/icons-material/Group';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card as CardType } from '@/types/card.type';
import { isExpired } from '@/utils/card';
import { DND_ANIMATION_OPACITY } from '@/utils/constants';

type CardViewProps = {
  card: CardType;
  onShowDetails: () => void;
};

function CardView({ card, onShowDetails }: CardViewProps) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: card._id,
    data: { ...card },
  });
  const dndKitCardStyles = {
    transform: CSS.Translate.toString(transform),
    transition,
    opacity: isDragging ? DND_ANIMATION_OPACITY : undefined,
    border: isDragging ? '1px solid #2980b9' : undefined,
  };

  const shouldShowCardActions = () => {
    return !!card?.memberCount || !!card?.commentCount || !!card?.attachmentCount;
  };

  const shouldShowCardExpiredStyle = () => {
    return isExpired(card.endDate) && !card.isDone;
  };

  const getCardIconSrc = () => {
    if (!card.endDate) {
      return null;
    }

    if (card.isDone) {
      return '/check.png';
    }

    if (isExpired(card.endDate)) {
      return '/deadline.png';
    }

    return '/work-in-progress.png';
  };

  const renderStatusIcon = () => {
    const iconSrc = getCardIconSrc();
    if (!iconSrc) return;
    return <Image src={iconSrc} alt="Card status icon" width={18} height={18} style={{ marginLeft: '12px' }} />;
  };

  return (
    <Card
      ref={setNodeRef}
      style={dndKitCardStyles}
      {...attributes}
      {...listeners}
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset',
        display: card?.FE_isPlaceholderCard ? 'none' : 'block',
        border: shouldShowCardExpiredStyle() ? '1px solid #ed483d' : 'unset',
      }}
      onClick={onShowDetails}
    >
      {card?.cover && <CardMedia sx={{ height: 140 }} image={card?.cover} />}
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Stack direction="row" alignItems="center" spacing={3}>
          <Typography sx={{ color: shouldShowCardExpiredStyle() ? '#ed483d' : '' }}>{card?.title}</Typography>
          {renderStatusIcon()}
        </Stack>
      </CardContent>
      {shouldShowCardActions() && (
        <CardActions sx={{ p: '0 4px 8px' }}>
          {!!card?.memberCount && (
            <Button size="small" startIcon={<GroupIcon />}>
              {card?.memberCount}
            </Button>
          )}
          {!!card?.commentCount && (
            <Button size="small" startIcon={<CommentIcon />}>
              {card?.commentCount}
            </Button>
          )}
          {!!card?.attachmentCount && (
            <Button size="small" startIcon={<AttachmentIcon />}>
              {card?.attachmentCount}
            </Button>
          )}
        </CardActions>
      )}
    </Card>
  );
}

export default CardView;
