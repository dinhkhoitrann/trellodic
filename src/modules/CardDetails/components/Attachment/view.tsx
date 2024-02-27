import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import AttachmentIcon from '@mui/icons-material/Attachment';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, IconButton, List, ListItem, Stack, Typography } from '@/components/UIElements';
import { BoardGlobalProps, withBoard } from '@/hocs';
import { useAlert } from '@/hooks';

type AttachmentViewProps = BoardGlobalProps & {
  onDelete: (_params: string[], _onSuccess: () => void, _onError: () => void) => void;
};

function AttachmentView({ card, cardId, onRefreshCard, onRefreshBoard, onDelete }: AttachmentViewProps) {
  const { handleOpenAlert, renderAlert } = useAlert({
    title: 'Delete this file?',
    content: 'You can not get the file back',
    onOk: (restParams) =>
      onDelete(
        restParams,
        () => {
          onRefreshCard();
          onRefreshBoard();
        },
        () => {
          toast.error('Something went wrong, please try again');
        },
      ),
  });

  return (
    <>
      <Box sx={{ mt: 6 }}>
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" alignItems="center" spacing={1}>
            <AttachmentIcon />
            <Typography
              variant="body2"
              component="span"
              sx={{ fontSize: '1rem', textOverflow: 'ellipsis', overflow: 'hidden' }}
            >
              Attachments
            </Typography>
          </Stack>
        </Stack>
        <List>
          {card.attachments?.map((attachment) => (
            <ListItem
              key={attachment._id}
              secondaryAction={
                <IconButton edge="end" onClick={() => handleOpenAlert(attachment._id, cardId)}>
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItem.Button>
                <ListItem.Avatar sx={{ minWidth: '100px' }}>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h6">{attachment.extension}</Typography>
                  </Box>
                </ListItem.Avatar>
                <ListItem.Text
                  primary={
                    <Typography
                      sx={{
                        color: (theme) => (theme.palette.mode === 'dark' ? 'white' : 'black'),
                        fontWeight: 'bold',
                        mb: 1,
                        display: 'inline-block',
                      }}
                      onClick={() => {
                        window.open(attachment.url);
                      }}
                    >
                      {attachment.fileName}
                    </Typography>
                  }
                  secondary={`Added on ${dayjs(attachment.createdTime).format('DD-MM-YYYY HH:mm')}`}
                />
              </ListItem.Button>
            </ListItem>
          ))}
        </List>
      </Box>
      {renderAlert()}
    </>
  );
}

export default withBoard(AttachmentView);
