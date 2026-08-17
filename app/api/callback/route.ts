import { NextResponse } from 'next/server';
import { saveResult } from '@/lib/resultStore';

// Activepieces HTTP Request step calls this URL with the house result
// POST /api/callback
export async function POST(request: Request) {
  try {
    const data = await request.json();
    console.log('=== Callback received ===');
    console.log(JSON.stringify(data, null, 2).slice(0, 500));
    console.log('========================');

    // sessionId can be at different levels
    const sessionId = data?.sessionId
      || data?.body?.sessionId
      || data?.fields?.body?.sessionId;

    if (!sessionId) {
      console.warn('Callback missing sessionId:', data);
      return NextResponse.json({ error: 'missing sessionId' }, { status: 400 });
    }

    // Extract house from wherever Activepieces puts it
    let house = null;
    if (data?.house)               house = data.house;
    else if (data?.body?.house)    house = data.body.house;
    else if (data?.fields?.body?.house) house = data.fields.body.house;
    else if (data?.walls || data?.rooms) house = data;

    console.log('Saving result for sessionId:', sessionId, '| house found:', !!house);
    saveResult(sessionId, house);

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error('Callback error:', e);
    return NextResponse.json({ error: e.message }, { status: 500 });
  }
}

