import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { TAGS_CACHE } from '@/utils/constants';

export async function POST(request: Request, { params }: { params: { boardId: string } }) {
  const { columnTitle } = await request.json();

  revalidateTag(`${TAGS_CACHE.BOARDS}/${params.boardId}`);
  return NextResponse.json({ columnTitle, boardId: params.boardId, success: true });
}
