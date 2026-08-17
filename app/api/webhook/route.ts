import { NextResponse } from 'next/server';

const WEBHOOK_URL = 'https://wf.promptxai.com/api/v1/webhooks/uFM3JeYCcafhAHgHQZjkH/sync';

export async function POST(request: Request) {
  try {
    const payload = await request.json();

    console.log('================================');
    console.log('SENDING TO:', WEBHOOK_URL);
    console.log('SESSION ID:', payload.sessionId);
    console.log('================================');

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const rawText = await response.text();
    console.log('STATUS:', response.status);
    console.log('BODY:', rawText.slice(0, 300));
    console.log('================================');

    if (!response.ok) {
      console.error('Activepieces HTTP error:', response.status);
      return NextResponse.json({ house: null, error: `Activepieces error: ${response.status}` }, { status: 502 });
    }

    let data: any = {};
    try { data = JSON.parse(rawText); } catch { data = {}; }

    // Extract house from wherever Activepieces puts it
    let house = null;
    if (data?.body?.house)               house = data.body.house;
    else if (data?.house)                house = data.house;
    else if (data?.walls || data?.rooms) house = data;

    console.log('HOUSE FOUND:', !!house);
    return NextResponse.json({ house, async: false });

  } catch (error: any) {
    console.error('Webhook error:', error.message);
    return NextResponse.json({ house: null, error: error.message }, { status: 500 });
  }
}