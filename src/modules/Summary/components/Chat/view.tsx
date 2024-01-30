import { useRef } from 'react';
import { useChat, Message } from 'ai/react';
import SendIcon from '@mui/icons-material/Send';
import StopCircleOutlinedIcon from '@mui/icons-material/StopCircleOutlined';
import { Box, IconButton, InputAdornment, TextField, Typography } from '@/components/UIElements';

function ChatWithGPTView() {
  const { input, handleInputChange, handleSubmit, stop, isLoading, messages } = useChat();
  const formRef = useRef<HTMLFormElement>(null);
  // messages -> [user asks a question, gpt-4 response, user asks again, gpt-4 responds]

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      formRef.current?.dispatchEvent(new Event('submit', { cancelable: true, bubbles: true }));
    }
  };

  return (
    <Box>
      {messages.map((message: Message) => {
        return (
          <div key={message.id}>
            {message.role === 'assistant' ? <h3>GPT-3.5</h3> : <h3>User</h3>}

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
        <form ref={formRef} onSubmit={handleSubmit}>
          <Typography>User Message</Typography>
          <TextField
            fullWidth
            placeholder="Message ChatGPT..."
            multiline
            value={input}
            sx={{ mt: 1, mb: 2 }}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {isLoading ? (
                    <IconButton onClick={() => stop()}>
                      <StopCircleOutlinedIcon />
                    </IconButton>
                  ) : (
                    <IconButton type="submit">
                      <SendIcon />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
          />
        </form>
      </Box>
    </Box>
  );
}

export default ChatWithGPTView;
