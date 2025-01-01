import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const ProtectedPage = ({ children } : any) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const checkAuth = async () => {
          try {
            const response = await fetch('/api/authenticated', { credentials: 'include' });
            if (!response.ok) {
                router.push('/login');
            } else {
                setIsAuthenticated(true);
            }
          } catch (error) {
              console.error('Error checking authentication:', error);
              return false;
          }  
        };

        checkAuth();
    }, []);

    if (!isAuthenticated) {
        return <p>Loading...</p>;
    }

    return children;
};

export default ProtectedPage;
