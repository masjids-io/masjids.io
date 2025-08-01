'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Suspense, useEffect } from 'react';

// Prop types
interface ChildrenType {
  children: React.ReactNode;
}
// A simple loading component
const FallbackLoading = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', width: '100%', background: '#fff' }}>
    <p>Loading...</p>
  </div>
);

const AuthProtectionWrapper = ({ children }: ChildrenType) => {
  const { status } = useSession();
  const { push } = useRouter();

  useEffect(() => {
    // If the session status is 'unauthenticated', redirect to the login page
    if (status === 'unauthenticated') {
      push(`/login`);
    }
  }, [status, push]);

  // While the session is being checked, show a loading indicator
  if (status === 'loading') {
    return <FallbackLoading />;
  }

  // If authenticated, render the protected content
  if (status === 'authenticated') {
    return <Suspense fallback={<FallbackLoading />}>{children}</Suspense>;
  }

  // Fallback while redirecting (if status is 'unauthenticated')
  return <FallbackLoading />;
};

export default AuthProtectionWrapper;