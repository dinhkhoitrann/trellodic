import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { withBoard, BoardGlobalProps } from '@/hocs';
import { useAlert } from '@/hooks';

type MembersViewProps = BoardGlobalProps & {
  onRemoveMember: (_memberId: string) => void;
};

function MembersView({ card, onRemoveMember }: MembersViewProps) {
  const members = card.memberIds;
  const { renderAlert, handleOpenAlert } = useAlert({
    title: 'Delete member?',
    okText: 'Delete',
    content: 'Are sure you would like to remove member',
    onOk: (params) => {
      onRemoveMember(params[0]);
    },
  });

  if (!members) {
    return <></>;
  }

  return (
    <>
      <Box>
        <Typography sx={{ mb: 1, fontWeight: 500 }}>Members</Typography>
        <Stack direction="row" spacing={1}>
          {[
            {
              _id: '1',
              name: '111',
              avatar: '',
            },
            {
              _id: '2',
              name: '222',
              avatar: '',
            },
          ].map((mem) => (
            <Box key={mem._id} sx={{ position: 'relative', ':hover #members-close-icon': { display: 'block' } }}>
              <Avatar alt={mem.name} src={mem.avatar} />
              <IconButton
                sx={{ position: 'absolute', top: -10, right: -4, display: 'none' }}
                size="small"
                id="members-close-icon"
                onClick={() => handleOpenAlert(mem._id)}
              >
                <CloseIcon sx={{ fontSize: '16px' }} />
              </IconButton>
            </Box>
          ))}
        </Stack>
      </Box>
      {renderAlert()}
    </>
  );
}

export default withBoard(MembersView);
