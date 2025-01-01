'use client';

import React, { useEffect, useState } from 'react';

const SuccessPage = () => {
    const [sessionDetails, setSessionDetails] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    // Extract session_id from the query parameters
    const queryParams = new URLSearchParams(window.location.search);
    const sessionId = queryParams.get('session_id');

    useEffect(() => {
        const fetchSessionDetails = async () => {
            try {
                const response = await fetch(`/api/checkout-session?session_id=${sessionId}`);
                const data = await response.json();
                setSessionDetails(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching session details:', error);
                setLoading(false);
            }
        };

        if (sessionId) {
            fetchSessionDetails();
        } else {
            setLoading(false);
        }
    }, [sessionId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!sessionDetails) {
        return <div>Payment successful, but no session details were found.</div>;
    }

    return (
        <div className="p-4">
            <h1 className="text-2xl font-bold text-green-600">Payment Successful!</h1>
            <p className="text-lg">Thank you for your booking.</p>
            <div className="mt-4">
                <h2 className="text-xl font-semibold">Session Details</h2>
                <p><strong>Sport:</strong> {sessionDetails.sport}</p>
                <p><strong>Price:</strong> £{sessionDetails.amount_total / 100}</p>
                <p><strong>Date:</strong> {new Date(sessionDetails.date_time).toLocaleString()}</p>
            </div>
        </div>
    );
};

export default SuccessPage;
