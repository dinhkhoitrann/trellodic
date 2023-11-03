import { useChat, Message } from 'ai/react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function ChatWithGPTView() {
  const { input, handleInputChange, handleSubmit, isLoading, messages } = useChat();
  // messages -> [user asks a question, gpt-4 response, user asks again, gpt-4 responds]

  return (
    <Box>
      {messages.map((message: Message) => {
        return (
          <div key={message.id}>
            {message.role === 'assistant' ? (
              <h3 className="text-lg font-semibold mt-2">GPT-4</h3>
            ) : (
              <h3 className="text-lg font-semibold mt-2">User</h3>
            )}

            {message.content.split('\n').map((currentTextBlock, index) => {
              if (currentTextBlock === '') {
                return <Typography key={message.id + index}>&nbsp;</Typography>; // " "
              }
              return <Typography key={message.id + index}>{currentTextBlock}</Typography>;
            })}
          </div>
        );
      })}
      <Box sx={{ mt: 8 }}>
        <form onSubmit={handleSubmit}>
          <Typography>User Message</Typography>
          <TextField
            fullWidth
            placeholder="Send a message"
            multiline
            value={input}
            sx={{ mt: 1, mb: 2 }}
            onChange={handleInputChange}
          />
          <Button variant="contained" disabled={isLoading} type="submit">
            Send message
          </Button>
        </form>
      </Box>
    </Box>
  );
}

export default ChatWithGPTView;
