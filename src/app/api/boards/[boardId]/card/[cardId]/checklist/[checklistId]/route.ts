import { NextRequest, NextResponse } from 'next/server';
import { Checklist } from '@/types/card.type';

export async function DELETE(
  _: Request,
  { params }: { params: { boardId: string; cardId: string; checklistId: string } },
) {
  return NextResponse.json({ checklistId: params.checklistId, success: true });
}

export async function POST(request: NextRequest) {
  const { checklistId, updatedTitle } = await request.json();
  const updatedChecklist: Checklist = {
    _id: checklistId,
    name: updatedTitle,
    items: [],
  };
  return NextResponse.json({ updatedChecklist, success: true });
}
