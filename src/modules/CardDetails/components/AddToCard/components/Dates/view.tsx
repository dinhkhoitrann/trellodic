import { useRef, useState, useEffect } from 'react';
import dayjs, { Dayjs } from 'dayjs';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { DateRange } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
import ActionButton, { ActionButtonRef } from '@/components/ActionButton';
import { Card } from '@/types/card.type';
import PopoverWrapper from '../Popover';

type DatesViewProps = {
  card: Card;
  isPending: boolean;
  isSuccess: boolean;
  onSave: (_startDate: Dayjs, _endDate: Dayjs) => void;
  onRemoveDates: () => void;
};

function DatesView({ card, isPending, isSuccess, onSave, onRemoveDates }: DatesViewProps) {
  const [enabledDate, setEnabledDate] = useState(true);
  const [dates, setDates] = useState<DateRange<Dayjs>>([
    dayjs(card.startDate || new Date()),
    dayjs(card.endDate || new Date()),
  ]);
  const ref = useRef<ActionButtonRef>(null);

  const handleEnabledDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked;
    setEnabledDate(checked);

    if (!checked) {
      onRemoveDates();
    }
  };

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
          <FormGroup>
            <FormControlLabel
              control={<Switch checked={enabledDate} onChange={handleEnabledDateChange} />}
              label="Enable date"
            />
          </FormGroup>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateRangePicker
              localeText={{ start: 'Start date', end: 'End date' }}
              sx={{ mt: 2 }}
              value={dates}
              disabled={!enabledDate}
              onChange={(newValue) => setDates(newValue)}
            />
          </LocalizationProvider>
          <Button variant="contained" disabled={!enabledDate || isPending} sx={{ mt: 2 }} onClick={handleSave}>
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
