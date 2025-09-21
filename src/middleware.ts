import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const ip = request.ip ?? 'unknown';
  // You can call out to a rate-limit service or just log
  console.log(`Request from IP: ${ip}`);

  return NextResponse.next();
}
