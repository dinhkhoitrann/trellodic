import { Box, Button } from '@/components/UIElements';
import { useCustomTheme } from '@/common/styles/theme';

type WorkspaceItemViewProps = {
  name: string;
  onGetWorkspace: () => void;
};

function WorkspaceItemView({ name, onGetWorkspace }: WorkspaceItemViewProps) {
  const customTheme = useCustomTheme();
  return (
    <Button
      fullWidth
      sx={{ justifyContent: 'left', alignItems: 'center', textAlign: 'left', mb: 1 }}
      startIcon={
        <Box
          sx={{
            width: '30px',
            height: '30px',
            lineHeight: '30px',
            background: customTheme.colors.workspaceAvatar,
            borderRadius: '4px',
            color: 'black',
            textAlign: 'center',
            fontSize: '14px !important',
            fontWeight: 'bold',
            mx: 1,
          }}
        >
          {name[0].toUpperCase()}
        </Box>
      }
      onClick={onGetWorkspace}
    >
      {name}
    </Button>
  );
}

export default WorkspaceItemView;
