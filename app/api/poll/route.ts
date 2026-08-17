import { NextResponse } from 'next/server';
import { getResult, deleteResult } from '@/lib/resultStore';

// Frontend polls this endpoint every 3 seconds
// GET /api/poll?session=abc123
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const sessionId = searchParams.get('session');
  if (!sessionId) return NextResponse.json({ ready: false });

  const result = getResult(sessionId);
  if (result === null) {
    return NextResponse.json({ ready: false });
  }

  // Found it — clean up and return
  deleteResult(sessionId);
  return NextResponse.json({ ready: true, house: result });
}
