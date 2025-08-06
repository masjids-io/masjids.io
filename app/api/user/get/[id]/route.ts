import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
// You must import your authOptions from your next-auth configuration file.
// The path might be different based on your project structure.
import { authOptions } from "@/lib/auth";

// This is the handler for GET requests to /api/users/[id]
// It fetches a user's profile by the ID provided in the URL.
export async function GET(request: Request, { params }: { params: { id: string } }) {
  try {
    // 1. Get the current user's session from next-auth to ensure the request is authenticated.
    const session = await getServerSession(authOptions);

    // 2. Check if the user is authenticated.
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized. Please log in.' }, { status: 401 });
    }

    // 3. Access the token from the session object.
    const bearerToken = session.accessToken;

    if (!bearerToken) {
      console.error("Server configuration error: Access token not found in session.");
      return NextResponse.json(
        { error: 'Authentication token is missing.' },
        { status: 500 }
      );
    }

    // 4. Get the user ID from the dynamic route parameters.
    const { id } = params;
    if (!id) {
        return NextResponse.json({ error: 'User ID is required in the URL.' }, { status: 400 });
    }

    // 5. Define the target URL for the real backend, using the user ID from the parameter.
    const api_url = `http://198.199.81.24/api/v1/users/${id}`;

    // 6. Make the fetch request to the real backend.
    const apiResponse = await fetch(api_url, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${bearerToken}`,
      },
      cache: 'no-store', // Ensures fresh data for the user's profile
    });

    // 7. Check if the request to the backend was successful.
    if (!apiResponse.ok) {
      const errorResult = await apiResponse.json();
      console.error("Backend API Error:", errorResult);
      return NextResponse.json(
        { error: 'Failed to retrieve user data.', details: errorResult },
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
