import { mockData } from '@/apis/mock-data';
import { NextResponse } from 'next/server';

export async function GET(_: Request, { params }: { params: { boardId: string } }) {
  const { boardId } = params;
  console.log(boardId);
  return NextResponse.json({ data: { board: mockData.board } });
}
