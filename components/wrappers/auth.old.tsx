'use client';

import { useSession, signOut } from 'next-auth/react'; // Make sure signOut is imported
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
  const router = useRouter(); // router is kept for potential future use, though signOut is preferred for auth redirects
  const hasRedirected = useRef(false);

  useEffect(() => {
    // If we are still checking the session or have already triggered a redirect, do nothing.
    if (status === 'loading' || hasRedirected.current) {
      return;
    }

    let shouldSignOut = false;

    // --- Condition 1: The user is definitively unauthenticated. ---
    if (status === 'unauthenticated') {
        shouldSignOut = true;
    }

    // --- Condition 2 (Your New Check): Session exists, but the accessToken is missing. ---
    // This indicates a malformed or incomplete session.
    if (status === 'authenticated' && !session?.accessToken) {
        console.error("Session is authenticated, but accessToken is missing. Signing out.");
        shouldSignOut = true;
    }

    // If we need to sign out, we do it here.
    if (shouldSignOut) {
        hasRedirected.current = true;
        // Using signOut is best because it clears the invalid session cookie.
        router.replace('/login');
    }

  }, [status, session]); // router can be removed from dependencies if only used for signOut

  // --- Rendering Logic ---

  // Show loading while the session status is being determined.
  if (status === 'loading') {
    return <FallbackLoading />;
  }

  // If the session is authenticated AND we have an accessToken, the user is valid.
  if (status === 'authenticated' && session?.accessToken) {
    return <Suspense fallback={<FallbackLoading />}>{children}</Suspense>;
  }

  // For all other cases (unauthenticated, session without accessToken),
  // the useEffect is handling the redirect. We show a loading fallback
  // to prevent a brief flash of content before the redirect occurs.
  return <FallbackLoading />;
};

export default AuthProtectionWrapper;