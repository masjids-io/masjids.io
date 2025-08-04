'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect, useRef } from 'react';

interface ChildrenType {
  children: React.ReactNode;
}

const FallbackLoading = () => (
  <div style={{ 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center', 
    height: '100vh', 
    width: '100%', 
    background: '#fff' 
  }}>
    <p>Loading...</p>
  </div>
);

const AuthProtectionWrapper = ({ children }: ChildrenType) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const hasRedirected = useRef(false);

  useEffect(() => {
    // Only redirect once and when we're sure the user is unauthenticated
    if (status === 'unauthenticated' && !hasRedirected.current) {
      hasRedirected.current = true;
      router.replace('/login'); // Use replace instead of push
    }
  }, [status, router]);

  // Show loading while session is being determined
  if (status === 'loading') {
    return <FallbackLoading />;
  }

  // If unauthenticated, show loading while redirecting
  if (status === 'unauthenticated') {
    return <FallbackLoading />;
  }

  // Only render children if authenticated
  if (status === 'authenticated' && session) {
    return <Suspense fallback={<FallbackLoading />}>{children}</Suspense>;
  }

  // Fallback
  return <FallbackLoading />;
};

export default AuthProtectionWrapper;