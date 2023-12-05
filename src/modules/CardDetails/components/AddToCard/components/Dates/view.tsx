import { useRef, useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Button from '@mui/material/Button';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRange } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import ActionButton, { ActionButtonRef } from '@/components/ActionButton';
import PopoverWrapper from '../Popover';

type DatesViewProps = {
  isPending: boolean;
  isSuccess: boolean;
  onSave: (_startDate: Dayjs, _endDate: Dayjs) => void;
};

function DatesView({ isPending, isSuccess, onSave }: DatesViewProps) {
  const [dates, setDates] = useState<DateRange<Dayjs>>([dayjs(new Date()), dayjs(new Date())]);
  const ref = useRef<ActionButtonRef>(null);

  useEffect(() => {
    if (isPending) return;
    if (isSuccess) handleClose();
  }, [isPending, isSuccess]);

  const handleClose = () => {
    ref.current?.handleClose();
  };

  const handleSave = () => {
    if (dates[0] && dates[1]) {
      onSave(dates[0], dates[1]);
    }
  };

  return (
    <ActionButton
      ref={ref}
      startIcon={<AccessTimeIcon />}
      renderPopover={() => (
        <PopoverWrapper title="Dates" onClose={handleClose}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
              localeText={{ start: 'Start date', end: 'End date' }}
              sx={{ mt: 2 }}
              value={dates}
              onChange={(newValue) => setDates(newValue)}
            />
          </LocalizationProvider>
          <Button variant="contained" disabled={isPending} sx={{ mt: 2 }} onClick={handleSave}>
            {isPending ? 'Saving...' : 'Save'}
          </Button>
        </PopoverWrapper>
      )}
    >
      Dates
    </ActionButton>
  );
}

export default DatesView;
