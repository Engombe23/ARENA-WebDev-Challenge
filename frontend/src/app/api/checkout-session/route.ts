import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2024-12-18.acacia',
});

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const sessionId = searchParams.get('session_id');

    if (!sessionId) {
        return NextResponse.json({ error: 'Session ID is required' }, { status: 400 });
    }

    try {
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        // Include additional information if needed
        const sport = session.metadata?.sport || 'Unknown';
        const date_time = session.metadata?.date_time || new Date().toISOString();

        return NextResponse.json({
            session_id: session.id,
            sport,
            amount_total: session.amount_total,
            date_time,
        });
    } catch (error) {
        console.error('Error retrieving Stripe session:', error);
        return NextResponse.json({ error: 'Failed to retrieve session' }, { status: 500 });
    }
}
