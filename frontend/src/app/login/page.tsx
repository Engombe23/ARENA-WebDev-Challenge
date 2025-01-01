'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const fetchCsrfToken = async() => {
    const response = await fetch('http://localhost:8000/api/csrf-token/', {
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      console.log('CSRF token fetched:', data.csrfToken);
      return data.csrfToken; 
    } else {
      console.error('Failed to fetch CSRF token');
      return null;
    }
  }

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const csrfToken = await fetchCsrfToken();
    
    try {
      const response = await fetch('/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrfToken,
        },
        body: JSON.stringify({ username, password })
      });
  
      const data = await response.json();
      if (response.ok) {
        router.push('/tailored-sessions');
      } else {
        setError(data.message || 'Login failed');
      }
    } catch(err) {
      setError('An error occured');
    }
  }

  return (
    <form onSubmit={handleLogin}>
      <h1>Login</h1>
      {error && <p style={{color: 'red'}}>{error}</p>}
      <div>
        <label>Username</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)}/>
      </div>
      <div>
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
      </div>
      <button type="submit">Login</button>
    </form>
  )
};



export default Login;