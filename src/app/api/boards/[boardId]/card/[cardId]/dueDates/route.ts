import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { dueDates, cardId, boardId } = await request.json();
  return NextResponse.json({ dueDates, cardId, boardId });
}
