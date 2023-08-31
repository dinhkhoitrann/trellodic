import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CommentIcon from '@mui/icons-material/Comment';
import GroupIcon from '@mui/icons-material/Group';
import AttachmentIcon from '@mui/icons-material/Attachment';

function CardView() {
  return (
    <Card
      sx={{
        cursor: 'pointer',
        boxShadow: '0 1px 1px rgba(0, 0, 0, 0.2)',
        overflow: 'unset',
      }}
    >
      <CardMedia sx={{ height: 140 }} image="https://tinyurl.com/3f4rkpuf" title="green iguana" />
      <CardContent sx={{ p: 1.5, '&:last-child': { p: 1.5 } }}>
        <Typography>Tran Dinh Khoi</Typography>
      </CardContent>
      <CardActions sx={{ p: '0 4px 8px' }}>
        <Button size="small" startIcon={<GroupIcon />}>
          20
        </Button>
        <Button size="small" startIcon={<CommentIcon />}>
          10
        </Button>
        <Button size="small" startIcon={<AttachmentIcon />}>
          30
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardView;
