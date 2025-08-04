import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
// You must import your authOptions from your next-auth configuration file.
// The path might be different based on your project structure.
import { authOptions } from "@/lib/auth";

// This is the handler for GET requests to an endpoint like /api/me
// It fetches the profile of the currently authenticated user.
export async function GET(request: Request) {
  try {
    // 1. Get the current user's session from next-auth.
    const session = await getServerSession(authOptions);

    // 2. Check if the user is authenticated.
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized. Please log in.' }, { status: 401 });
    }

    // 3. IMPORTANT: Access the user ID and token from the session object.
    //    This assumes your `session` callback in next-auth is configured to expose
    //    the user's ID as `session.user.id` and the token as `session.accessToken`.
    //    Adjust the paths (e.g., `session.id`) if your configuration is different.
    const userId = (session as any)?.user?.id;
    const bearerToken = (session as any)?.accessToken;

    if (!userId) {
        console.error("Server configuration error: User ID not found in session.");
        return NextResponse.json(
          { error: 'User identifier is missing from session data.' },
          { status: 500 }
        );
    }

    if (!bearerToken) {
      console.error("Server configuration error: Access token not found in session.");
      return NextResponse.json(
        { error: 'Authentication token is missing.' },
        { status: 500 }
      );
    }

    // 4. Define the target URL for the real backend, using the user ID from the session.
    const api_url = `http://198.199.81.24/api/v1/users/${userId}`;

    // 5. Make the fetch request to the real backend.
    const apiResponse = await fetch(api_url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${bearerToken}`,
      },
      cache: 'no-store', // Ensures fresh data for the user's profile
    });

    // 6. Check if the request to the backend was successful.
    if (!apiResponse.ok) {
      const errorResult = await apiResponse.json();
      console.error("Backend API Error:", errorResult);
      return NextResponse.json(
        { error: 'Failed to retrieve user data.', details: errorResult },
        { status: apiResponse.status }
      );
    }

    // 7. If successful, parse and return the response.
    const result = await apiResponse.json();
    return NextResponse.json(result, { status: 200 }); // 200 OK

  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}
