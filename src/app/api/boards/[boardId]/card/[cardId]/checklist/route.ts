import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { checklistTitle, cardId, boardId } = await request.json();
  return NextResponse.json({ checklistTitle, cardId, boardId });
}
