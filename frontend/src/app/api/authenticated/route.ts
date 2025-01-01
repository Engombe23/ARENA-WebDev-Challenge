import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    try {
        // Extract cookies and headers
        const cookies = request.headers.get('cookie') || '';
        const csrfTokenCookie = cookies
            .split('; ')
            .find((row) => row.startsWith('csrftoken='))?.split('=')[1];

        const csrfTokenHeader = request.headers.get('x-csrftoken');

        // Check if CSRF token is provided in both cookie and header
        if (!csrfTokenCookie || !csrfTokenHeader) {
            return NextResponse.json({ authenticated: false, error: 'CSRF token missing' }, { status: 403 });
        }

        // Validate CSRF token
        if (csrfTokenCookie !== csrfTokenHeader) {
            return NextResponse.json({ authenticated: false, error: 'CSRF token mismatch' }, { status: 403 });
        }

        // At this point, CSRF token is valid
        return NextResponse.json({ authenticated: true });
    } catch (error) {
        console.error('Error checking authentication:', error);
        return NextResponse.json({ authenticated: false, error: 'Internal server error' }, { status: 500 });
    }
}
