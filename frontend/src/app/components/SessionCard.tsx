'use client'

import React, { useState } from 'react';
import { getCookie } from '../utils/getCookie';

const SessionCard = ({ session }: any) => {
  const [loading, setLoading] = useState(false);

  const handleJoinNow = async () => {
    setLoading(true);  // Set loading state to true when the user clicks "Book Session"

    try {
      const csrfToken = getCookie('csrftoken');

      const authResponse = await fetch('/api/authenticated', {
        method: 'GET',
        credentials: 'include', 
        headers: {
          'X-CSRFToken': csrfToken,
        },
      });

      const authData = await authResponse.json();
      console.log(authData);

      if (!authData.authenticated) {
        window.location.href = '/login';
        return;
      }
      
      // Redirect to Stripe payment
      const response = await fetch('/api/create-payment-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          session_name: session.sport,
          price: session.price_per_participant * 100,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        window.location.href = data.url;
      } else {
        console.error('Payment failed:', data.error);
      }

    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);  // Set loading state back to false after the process completes
    }
  }

  return (
    <div className='bg-white shadow-md rounded-lg p-4'>
      <h2 className='text-xl font-bold text-gray-800'>{session.sport}</h2>
      <p className='text-sm text-gray-600'>{new Date(session.date_time).toLocaleString()}</p>
      <p className='text-sm text-gray-600'>{session.location}</p>
      <p className='text-sm text-gray-600'>{session.game_size}</p>
      <p className='text-sm text-gray-600'>Price: £{session.price_per_participant} per participant</p>
      <p className='text-sm text-gray-600'>Slots Remaining: {session.slots_remaining}</p>
      <button
        onClick={handleJoinNow}
        className="mt-2 w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        disabled={loading}  // Disable the button while loading
      >
        {loading ? 'Loading...' : 'Book Session'}  {/* Show "Loading..." when in progress */}
      </button>
    </div>
  );
}

export default SessionCard;
