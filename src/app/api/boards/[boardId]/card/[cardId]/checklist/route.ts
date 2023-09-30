import { Checklist } from '@/types/card.type';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { checklistTitle } = await request.json();
  const checklist: Checklist = {
    _id: Math.random().toString(),
    name: checklistTitle,
    items: [],
  };
  return NextResponse.json({ checklist });
}
