import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useLabels } from '@/hooks';
import { MODES } from '@/utils/constants';

function LabelsView() {
  const { mode, title, render, onBackToViewMode } = useLabels();

  return (
    <Box sx={{ px: 2, mt: 2 }}>
      <Box sx={{ display: 'grid', gridTemplateColumns: '32px 1fr 32px', alignItems: 'center' }}>
        <Box>
          {mode !== MODES.VIEW && (
            <IconButton sx={{ width: 'fit-content' }} onClick={onBackToViewMode}>
              <NavigateBeforeIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
        <Typography textAlign="center">{title}</Typography>
        <span></span>
      </Box>
      {render()}
    </Box>
  );
}

export default LabelsView;
