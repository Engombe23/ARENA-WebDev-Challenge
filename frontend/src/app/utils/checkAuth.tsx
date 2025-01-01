const checkAuth = async () => {
  try {
    const response = await fetch('http://localhost:800/api/authenticated/', {
      credentials: 'include',
    });

    if (response.ok) {
      const data = await response.json();
      return data.authenticated;
    } else {
      return false;
    }
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
}

export default checkAuth;