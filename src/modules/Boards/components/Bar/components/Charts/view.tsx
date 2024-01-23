import { useState } from 'react';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  Tooltip,
  Typography,
} from '@/components/UIElements';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import Modal from '@/components/Modal';
import TaskStatusChart from './components/TaskStatus';
import NoSelectedChart from './components/NoSelectedChart';
import TasksCount from './components/TasksCount';
// import PercentageTaskStatus from './components/PercentageTaskStatus';

const chartMap = {
  '': NoSelectedChart,
  taskStatus: TaskStatusChart,
  tasksCount: TasksCount,
  // percentageTaskStatus: PercentageTaskStatus,
};

function ChartsView() {
  const [chart, setChart] = useState<keyof typeof chartMap>('');
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const SelectedChart = chartMap[chart];

  const handleModalVisibility = () => {
    setIsVisibleModal(!isVisibleModal);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setChart(event.target.value as keyof typeof chartMap);
  };

  return (
    <>
      <Tooltip title="Charts">
        <ShowChartIcon
          sx={{ cursor: 'pointer', color: (theme) => (theme.palette.mode === 'light' ? 'white' : '') }}
          onClick={handleModalVisibility}
        />
      </Tooltip>
      <Modal
        isVisibleModal={isVisibleModal}
        onClose={handleModalVisibility}
        sx={{
          transform: 'translate(-50%, -250px)',
          width: { xs: '95%', md: '60%' },
          bgcolor: 'background.paper',
          border: (theme) => (theme.palette.mode === 'dark' ? '1px solid #716e6e' : 'unset'),
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
          Evaluate your work accurately
        </Typography>
        <Typography textAlign="center">
          Choose which data you want to evaluate, and we show you all about that
        </Typography>
        <Stack direction="row" justifyContent="flex-end" sx={{ my: 2 }}>
          <FormControl sx={{ m: 1, minWidth: 200 }} size="small">
            <InputLabel id="demo-select-small-label">Chart</InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={chart}
              label="Chart"
              onChange={handleChange}
            >
              <MenuItem value="taskStatus">Task status by assignee</MenuItem>
              <MenuItem value="tasksCount">Tasks count by column</MenuItem>
              {/* <MenuItem value="percentageTaskStatus">Percentage of task status</MenuItem> */}
            </Select>
          </FormControl>
        </Stack>
        <SelectedChart />
      </Modal>
    </>
  );
}

export default ChartsView;
