import { useEffect, useRef, useState } from 'react';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Styles from './styles.module.css';
import { useTheme } from '@mui/styles';
import { Theme } from '@mui/material/styles';
import { Theme as AppTheme } from '@/common/enums';

type DescriptionViewProps = {
  editorVisible: boolean;
  onSave: (_data: string) => void;
  onShowHideEditor: () => void;
};

function DescriptionView({ editorVisible, onSave, onShowHideEditor }: DescriptionViewProps) {
  const theme = useTheme<Theme>();
  const [editorData, setEditorData] = useState('aaa');
  const [showMore, setShowMore] = useState(editorData.length <= 250);
  const editorDataRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!editorVisible && editorDataRef.current) {
      if (showMore) {
        editorDataRef.current.innerHTML = editorData;
      } else {
        editorDataRef.current.innerHTML = editorData.substring(0, 247) + '...';
      }
    }
  }, [editorData, editorVisible, showMore]);

  useEffect(() => {
    if (editorData.length <= 250) {
      setShowMore(true);
    } else {
      setShowMore(false);
    }
  }, [editorData.length, editorVisible]);

  const renderAction = () => {
    if (!editorVisible) {
      return <Button onClick={onShowHideEditor}>Edit</Button>;
    }
  };

  const renderEditor = () => {
    if (editorVisible) {
      return (
        <>
          <div className={theme.palette.mode === 'dark' ? Styles.editor : ''}>
            <CKEditor
              editor={ClassicEditor}
              data={editorData}
              config={{
                ckfinder: {
                  // Upload the images to the server using the CKFinder QuickUpload command.
                  uploadUrl:
                    // eslint-disable-next-line max-len
                    'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json',
                },
                toolbar: {
                  items: [
                    'undo',
                    'redo',
                    '|',
                    'heading',
                    '|',
                    'fontfamily',
                    'fontsize',
                    'fontColor',
                    'fontBackgroundColor',
                    '|',
                    'bold',
                    'italic',
                    'strikethrough',
                    'subscript',
                    'superscript',
                    'code',
                    '|',
                    'uploadImage',
                    'blockQuote',
                    'codeBlock',
                    '|',
                    'alignment',
                    '|',
                    'bulletedList',
                    'numberedList',
                    'todoList',
                    'outdent',
                    'indent',
                  ],
                  shouldNotGroupWhenFull: true,
                },
              }}
              onReady={(editor) => {
                // You can store the "editor" and use when it is needed.
                console.log('Editor is ready to use!', editor);
              }}
              onChange={(event, editor) => {
                const data = editor.getData();
                setEditorData(data);
                console.log({ event, editor, data });
              }}
              onBlur={(event, editor) => {
                console.log('Blur.', editor);
              }}
              onFocus={(event, editor) => {
                console.log('Event.', event);
                console.log('Focus.', editor);
              }}
            />
          </div>
          <Box sx={{ mt: 2 }}>
            <Button variant="contained" onClick={() => onSave(editorData)}>
              Save
            </Button>
            <Button
              sx={{
                color: (theme) => (theme.palette.mode === AppTheme.Dark ? '#B6C2CF' : 'grey'),
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

  const renderEditorData = () => {
    if (!editorVisible) {
      return (
        <div className={Styles.data}>
          <Box ref={editorDataRef} sx={{ ml: 2, cursor: 'pointer' }} onClick={onShowHideEditor} />
          {!showMore && (
            <Button onClick={() => setShowMore(!showMore)} endIcon={<ExpandMoreIcon />}>
              Show more
            </Button>
          )}
          {showMore && editorDataRef.current && editorDataRef.current.innerHTML.length > 250 && (
            <Button onClick={() => setShowMore(!showMore)} endIcon={<ExpandLessIcon />}>
              Show less
            </Button>
          )}
        </div>
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
            bgcolor: (theme) =>
              theme.palette.mode === AppTheme.Light ? theme.palette.grey[300] : theme.palette.grey.A700,
          }}
          onClick={onShowHideEditor}
        >
          <CardContent>Add a more detailed description…</CardContent>
        </Card>
      );
    }
  };

  return (
    <Box sx={{ mt: 3 }}>
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
