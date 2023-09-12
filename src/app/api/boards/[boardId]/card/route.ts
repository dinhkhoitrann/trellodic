import { NextResponse } from 'next/server';
import { revalidateTag } from 'next/cache';
import { TAGS_CACHE } from '@/utils/constants';

export async function POST(request: Request, { params }: { params: { boardId: string } }) {
  const { cardTitle, columnId } = await request.json();

  revalidateTag(`${TAGS_CACHE.BOARDS}/${params.boardId}`);
  return NextResponse.json({ cardTitle: cardTitle, columnId, success: true });
}
