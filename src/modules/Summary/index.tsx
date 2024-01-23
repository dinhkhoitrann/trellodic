import { useState } from 'react';
import Fab from '@mui/material/Fab';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AssistantIcon from '@mui/icons-material/Assistant';
import Modal from '@/components/Modal';
import Section from '@/components/Accordion';
import ChatWithGPT from './components/Chat';
import Summary from './components/Summary';

function SummaryTodos() {
  const [showModal, setShowModal] = useState(false);

  const handleVisibilityModal = () => {
    setShowModal((prevState) => !prevState);
  };

  return (
    <>
      <Fab
        color="secondary"
        variant="extended"
        sx={{ position: 'fixed', bottom: 40, right: 24 }}
        onClick={handleVisibilityModal}
      >
        <AssistantIcon sx={{ mr: 1 }} />
        AI Assistant
      </Fab>
      <Modal
        isVisibleModal={showModal}
        onClose={handleVisibilityModal}
        sx={{
          width: { xs: '95%', md: '60%' },
          transform: 'translate(-50%, -250px)',
          bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
        }}
      >
        <>
          <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2, textAlign: 'center' }}>
            AI Assistant
          </Typography>
          <Typography>
            We&apos;ve harnessed the power of artificial intelligence to organize and categorize your todos for a more
            efficient and productive day. Now, let&apos;s dive into a comprehensive summary of your tasks, or chat with
            GPT about everything. This smart overview will help you stay on top of your to-do list effortlessly
          </Typography>
          <Box sx={{ mt: 2 }}>
            <Section title="Chat with GPT">
              <ChatWithGPT />
            </Section>
            <Section title="Summary">
              <Summary />
            </Section>
          </Box>
        </>
      </Modal>
    </>
  );
}

export default SummaryTodos;
