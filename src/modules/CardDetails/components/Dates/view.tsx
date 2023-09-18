import { useState, MouseEvent, ChangeEvent } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Checkbox from '@mui/material/Checkbox';
import Popover from '@mui/material/Popover';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRange } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function DatesView() {
  const [isDone, setIsDone] = useState(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [value, setValue] = useState<DateRange<Dayjs>>([dayjs(new Date()), dayjs(new Date())]);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCheckDone = (e: ChangeEvent<HTMLInputElement>) => {
    setIsDone(e.target.checked);
  };

  return (
    <Box>
      <Typography sx={{ mb: 1, fontWeight: 500 }}>Due date</Typography>
      <Stack direction="row" alignItems="center" spacing={1}>
        <Checkbox checked={isDone} onChange={handleCheckDone} />
        <Card
          aria-describedby={id}
          sx={{
            display: 'flex',
            alignItems: 'center',
            py: 1,
            px: 2,
            borderRadius: '4px',
            cursor: 'pointer',
            ':hover': {
              opacity: 0.6,
              transition: 'all 0.5s',
            },
          }}
          onClick={handleClick}
        >
          {new Date(value[1]?.toString() as string).toLocaleDateString()} <ExpandMoreIcon sx={{ ml: 1 }} />
        </Card>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
              localeText={{ start: 'Start date', end: 'End date' }}
              sx={{ p: 2 }}
              value={value}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
        </Popover>
      </Stack>
    </Box>
  );
}

export default DatesView;
