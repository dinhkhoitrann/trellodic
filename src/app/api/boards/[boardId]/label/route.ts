import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { title, color } = await request.json();
  return NextResponse.json({ color, title });
}

export async function PUT(request: Request) {
  const { title, color } = await request.json();
  return NextResponse.json({ color, title });
}
