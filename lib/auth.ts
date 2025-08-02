import { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { jwtDecode } from "jwt-decode"; // Import the JWT decoding library

// Extend the Session type to include the error property
declare module "next-auth" {
  interface Session {
    error?: string;
    accessToken?: string;
  }
}

// This function will be called when the access token has expired.
async function refreshAccessToken(token: any) {
  try {
    const response = await fetch("http://198.199.81.24/api/v1/auth/refresh_token", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        refreshToken: token.refreshToken, // Send the existing refresh token
      }),
    });

    const refreshedTokens = await response.json();

    if (!response.ok) {
      throw refreshedTokens;
    }

    // The backend response should contain a new accessToken.
    return {
      ...token,
      accessToken: refreshedTokens.accessToken,
      refreshToken: refreshedTokens.refreshToken ?? token.refreshToken,
    };
  } catch (error) {
    console.error("Error refreshing access token", error);
    // If refresh fails, add an error flag to the token.
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "john.doe@example.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter an email and password");
        }

        const res = await fetch(`http://198.199.81.24/api/v1/auth/login`, {
          method: 'POST',
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
          headers: { "Content-Type": "application/json" }
        });
        
        const responseData = await res.json();

        if (!res.ok || responseData.status !== 'success') {
          throw new Error(responseData.message || "Invalid credentials");
        }

        const { authenticateUserData } = responseData;

        if (authenticateUserData) {
          return {
            id: authenticateUserData.userId,
            email: credentials.email,
            accessToken: authenticateUserData.accessToken,
            refreshToken: authenticateUserData.refreshToken,
          };
        } else {
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      // 1. Initial sign in
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.id = user.id;
        token.email = user.email; 
        return token;
      }

      // 2. On subsequent requests, check if the token is expired by decoding it
      try {
        const decodedToken = jwtDecode<{ exp: number }>(token.accessToken as string);
        
        // The 'exp' claim is in seconds, Date.now() is in milliseconds.
        if (decodedToken.exp * 1000 > Date.now()) {
          // Token is still valid
          return token;
        }
      } catch (error) {
        console.error("Error decoding token, attempting to refresh.", error);
        // If decoding fails, the token is likely invalid or expired, so we proceed to refresh.
      }

      // 3. Token has expired or is invalid, try to refresh it
      console.log("Access token has expired, refreshing...");
      return refreshAccessToken(token);
    },
    async session({ session, token }) {
      // Pass data from the JWT to the client-side session
      if (token) {
        session.user.id = token.id;
        session.user.email = token.email;
        session.accessToken = token.accessToken;
        session.error = token.error as string; // Pass error for client-side logout
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET || 'your-super-secret-key',
};
