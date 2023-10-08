import { ChangeEvent, useRef } from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AttachmentIcon from '@mui/icons-material/Attachment';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import ActionButton, { ActionButtonRef } from '@/components/ActionButton';
import PopoverWrapper from '../Popover';

type AttachmentViewProps = {
  files: File[];
  loading: boolean;
  onUpload: (_event: ChangeEvent<HTMLInputElement>) => void;
  onSave: (_onSuccess: () => void) => void;
  onRemoveFile: (_removedFile: File) => void;
  onRemoveAll: () => void;
};

function AttachmentView({ files, loading, onUpload, onSave, onRemoveFile, onRemoveAll }: AttachmentViewProps) {
  const ref = useRef<ActionButtonRef>(null);

  const handleClose = () => {
    ref.current?.handleClose();
  };

  return (
    <ActionButton
      ref={ref}
      startIcon={<AttachmentIcon />}
      popoverContent={
        <PopoverWrapper title="Attach" onClose={handleClose}>
          <Typography sx={{ mt: 2 }}>Attach a file from your computer</Typography>
          <Typography variant="caption" sx={{ color: '#95a5a6' }}>
            You can upload *.doc, *.docx, *.pdf files
          </Typography>

          {files.length > 0 && (
            <>
              <Box sx={{ maxHeight: '300px', overflow: 'auto', px: '2px', my: 3 }}>
                {files.map((file, index) => (
                  <Stack
                    direction="row"
                    alignItems="center"
                    justifyContent="space-between"
                    spacing={1}
                    key={index}
                    sx={{
                      p: 2,
                      my: 1,
                      border: '1px solid #cecece',
                      borderRadius: '8px',
                    }}
                  >
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <FileCopyIcon fontSize="small" />
                      <Typography sx={{ maxWidth: '200px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {file?.name}
                      </Typography>
                    </Stack>
                    <RemoveCircleOutlineIcon
                      fontSize="small"
                      sx={{ cursor: 'pointer' }}
                      onClick={() => onRemoveFile(file)}
                    />
                  </Stack>
                ))}
              </Box>
              <Stack direction="row" spacing={1}>
                <Button variant="contained" disabled={loading} onClick={() => onSave(handleClose)}>
                  {loading ? 'Saving' : 'Save'}
                </Button>
                <Button variant="outlined" color="error" onClick={onRemoveAll}>
                  Remove all
                </Button>
              </Stack>
            </>
          )}
          <Button variant="contained" component="label" fullWidth startIcon={<FileUploadIcon />} sx={{ mt: 2 }}>
            Upload File
            <input type="file" accept=".pdf,.doc,.docx" hidden onChange={onUpload} />
          </Button>
        </PopoverWrapper>
      }
    >
      Attachment
    </ActionButton>
  );
}

export default AttachmentView;
