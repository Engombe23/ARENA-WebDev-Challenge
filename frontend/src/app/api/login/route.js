import { NextResponse } from 'next/server';

export async function POST(req) {
    try {
        const body = await req.json();

        // Call Django's login endpoint
        const djangoResponse = await fetch('http://localhost:8000/api/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        const data = await djangoResponse.json();

        if (djangoResponse.ok) {
            // Authentication successful
            return NextResponse.json({ success: true, user: data.user });
        } else {
            // Authentication failed
            return NextResponse.json({ success: false, message: data.message }, { status: djangoResponse.status });
        }
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}
