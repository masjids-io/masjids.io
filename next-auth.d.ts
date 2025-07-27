import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  /**
   * The user object you construct in the authorize callback.
   */
  interface User {
    id: string;
    email: string;
    name?: string | null;
    accessToken: string;
    refreshToken: string; // Add refreshToken
  }

  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    accessToken?: string;
    refreshToken?: string; // Add refreshToken
    user: {
      id?: string | null;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and sent to the `session` callback. */
  interface JWT {
    accessToken?: string;
    refreshToken?: string; // Add refreshToken
    id?: string;
  }
}
