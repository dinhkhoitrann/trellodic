import { mockData } from '@/apis/mock-data';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  //   const { cardId, boardId } = await request.json();
  return NextResponse.json({ card: mockData.board.columns[0].cards[0], success: true });
}
