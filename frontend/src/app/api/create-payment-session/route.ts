import { NextResponse } from 'next/server';
import Stripe from 'stripe';

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || '', {
    apiVersion: '2024-12-18.acacia',
});

export async function POST(req: Request) {
    try {
        // Parse request body
        const { session_name, price } = await req.json();

        // Validate required fields
        if (!session_name || !price) {
            return NextResponse.json(
                { error: 'Missing required fields: session_name or price' },
                { status: 400 }
            );
        }

        // Create a Stripe Checkout session
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'gbp', // Adjust to your preferred currency
                        product_data: {
                            name: session_name, // Name of the sport/session
                        },
                        unit_amount: price, // Amount in cents
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cancel`,
            metadata: {
                sport: session_name
            }
        });

        // Return the Checkout session URL
        return NextResponse.json({ url: session.url });
    } catch (error) {
        console.error('Error creating payment session:', error);
        return NextResponse.json(
            { error: 'Failed to create payment session' },
            { status: 500 }
        );
    }
}