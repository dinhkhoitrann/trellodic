import { useEffect, useRef, useState } from 'react';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { Box, Button, Card, CardContent, Stack, Typography } from '@/components/UIElements';
import EditorForm from '@/components/Editor/components/Form';
import EditorView from '@/components/Editor/components/View';
import { Card as CardType } from '@/types/card.type';

type DescriptionViewProps = {
  editorVisible: boolean;
  isLoading: boolean;
  card: CardType;
  onSave: (_data: string) => void;
  onShowHideEditor: () => void;
};

function DescriptionView({ editorVisible, isLoading, card, onSave, onShowHideEditor }: DescriptionViewProps) {
  const [editorData, setEditorData] = useState(card.description || '');
  const [showMore, setShowMore] = useState(false);
  const editorDataRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorVisible && editorDataRef.current) {
      editorDataRef.current.innerHTML = editorData;

      if (editorDataRef.current.clientHeight > 200) {
        setShowMore(true);
      }
    }
  }, [editorData, editorVisible]);

  const handleEditorDataChange = (data: string) => {
    setEditorData(data);
  };

  const renderAction = () => {
    if (!editorVisible) {
      return <Button onClick={onShowHideEditor}>Edit</Button>;
    }
  };

  const renderEditor = () => {
    if (editorVisible) {
      return (
        <>
          <EditorForm data={editorData} onDataChange={handleEditorDataChange} />
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" disabled={isLoading} onClick={() => onSave(editorData)}>
              {isLoading ? 'Saving' : 'Save'}
            </Button>
            <Button
              sx={{
                color: (theme) => (theme.palette.mode === 'dark' ? '#B6C2CF' : 'grey'),
                ml: 1,
              }}
              onClick={onShowHideEditor}
            >
              Cancel
            </Button>
          </Box>
        </>
      );
    }
  };

  const renderButtons = () => {
    if (!editorDataRef.current || (editorDataRef.current && editorDataRef.current.clientHeight <= 200)) return;

    if (showMore) {
      return (
        <Button onClick={() => setShowMore((prevState) => !prevState)} endIcon={<ExpandMoreIcon />}>
          Show more
        </Button>
      );
    }

    return (
      <Button onClick={() => setShowMore((prevState) => !prevState)} endIcon={<ExpandLessIcon />}>
        Show less
      </Button>
    );
  };

  const renderEditorData = () => {
    if (!editorVisible) {
      return (
        <>
          <Box sx={{ maxHeight: showMore ? '200px' : 'unset', overflowY: 'hidden' }}>
            <EditorView ref={editorDataRef} sx={{ ml: 2, cursor: 'pointer' }} onClick={onShowHideEditor} />
          </Box>
          <Box sx={{ mt: 2 }}>{renderButtons()}</Box>
        </>
      );
    }
  };

  const renderEmptyData = () => {
    if (!editorVisible && !editorData) {
      return (
        <Card
          elevation={0}
          sx={{
            cursor: 'pointer',
            bgcolor: (theme) => (theme.palette.mode === 'light' ? theme.palette.grey[300] : theme.palette.grey.A700),
          }}
          onClick={onShowHideEditor}
        >
          <CardContent>Add a more detailed description…</CardContent>
        </Card>
      );
    }
  };

  return (
    <Box sx={{ mt: 6 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <Stack direction="row" alignItems="center" spacing={1}>
          <DescriptionOutlinedIcon />
          <Typography
            variant="body2"
            component="span"
            sx={{ fontSize: '1rem', textOverflow: 'ellipsis', overflow: 'hidden' }}
          >
            Description
          </Typography>
        </Stack>
        {renderAction()}
      </Stack>
      <Box sx={{ mt: 2 }}>
        {renderEditor()}
        {renderEditorData()}
        {renderEmptyData()}
      </Box>
    </Box>
  );
}

export default DescriptionView;
