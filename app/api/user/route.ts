import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
// You must import your authOptions from your next-auth configuration file.
// The path might be different based on your project structure.
import { authOptions } from "@/lib/auth";

// This is the handler for GET requests to /api/users
// It fetches a list of all users, forwarding any query parameters.
export async function GET(request: Request) {
  try {
    // 1. Get the current user's session to ensure they are authenticated.
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized. Please log in.' }, { status: 401 });
    }

    // 2. Extract the bearer token from the session.
    const bearerToken = session.accessToken;

    if (!bearerToken) {
      console.error("Server configuration error: Access token not found in session.");
      return NextResponse.json(
        { error: 'Authentication token is missing.' },
        { status: 500 }
      );
    }

    // 3. Get the query parameters from the incoming request URL.
    const { searchParams } = new URL(request.url);

    // 4. Define the base URL for the real backend.
    const api_url = `http://198.199.81.24/api/v1/list-users`;

    // 5. Construct the final URL with the forwarded query parameters.
    const fullUrl = `${api_url}?${searchParams.toString()}`;

    // 6. Make the fetch request to the real backend.
    const apiResponse = await fetch(fullUrl, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${bearerToken}`,
      },
      cache: 'no-store', // Use 'no-store' to always get the freshest data
    });

    // 7. Check if the backend request was successful.
    if (!apiResponse.ok) {
      const errorResult = await apiResponse.json();
      console.error("Backend API Error:", errorResult);
      return NextResponse.json(
        { error: 'Failed to fetch users list.', details: errorResult },
        { status: apiResponse.status }
      );
    }

    // 8. If successful, parse and return the response.
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
