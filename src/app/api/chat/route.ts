import { OpenAIStream, StreamingTextResponse } from 'ai';
import openai from '@/lib/openai';

export async function POST(request: Request) {
  const { messages } = await request.json();
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'When responding, welcome the user always as User and say welcome to the Tasky app',
      },
      ...messages,
    ],
    temperature: 0.7,
    n: 1,
    stream: true,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
