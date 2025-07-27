
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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

        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
          method: 'POST',
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
          headers: { "Content-Type": "application/json" }
        });
        
        const responseData = await res.json();

        // Check for success status from your API
        if (!res.ok || responseData.status !== 'success') {
          throw new Error(responseData.message || "Invalid credentials");
        }

        const { authenticateUserData } = responseData;

        // If the nested user data object exists, construct the user object for NextAuth
        if (authenticateUserData) {
          return {
            id: authenticateUserData.userId,
            email: credentials.email, // Email is not in the response, so we pass it from the credentials form
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
    // This callback is called whenever a JWT is created or updated.
    async jwt({ token, user }) {
      // The 'user' object is passed on the first sign-in.
      // We are persisting the tokens and user id to the JWT.
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.id = user.id;
      }
      return token;
    },
    // This callback is called whenever a session is checked.
    async session({ session, token }) {
      // We are passing the tokens and user id to the client-side session.
      if (token) {
        session.accessToken = token.accessToken;
        session.refreshToken = token.refreshToken;
        session.user.id = token.id;
      }
      return session;
    }
  },
  pages: {
    signIn: '/login',
    error: '/login',
  },
  secret: process.env.NEXTAUTH_SECRET,
};