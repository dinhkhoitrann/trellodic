import { OpenAIStream, StreamingTextResponse } from 'ai';
import openai from '@/lib/openai';

export async function POST(request: Request) {
  const { prompt } = await request.json();
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'When responding, welcome the user always as User and say welcome to the Tasky app',
      },
      {
        role: 'user',
        // eslint-disable-next-line max-len
        content: `Hi there, provide a summary of the following categories. List all the todos (write its due date explicitly if any) along with corresponding category and count how many todos are in each category. Additionally, identify done and not to be done todos. You need to remind user to create sub-tasks for every todo, focus on todos set due date and todos have not done yet, and let's do all remaining todos. Then, tell the user to have a productive day! Note: you should present your answer in HTML language. Here the data: ${prompt}`,
      },
    ],
    temperature: 0.8,
    n: 1,
    stream: true,
  });
  const stream = OpenAIStream(response);
  return new StreamingTextResponse(stream);
}
