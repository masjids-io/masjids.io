import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
// You must import your authOptions from your next-auth configuration file.
// The path might be different based on your project structure.
import { authOptions } from "@/lib/auth";

// This is the handler for POST requests to /api/masjids
export async function POST(request: Request) {
  try {
    // 1. Get the current user's session from next-auth.
    //    This is a secure, server-side way to get session data.
    const session = await getServerSession(authOptions);

    // 2. Check if the user is authenticated. If not, return an unauthorized error.
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized. Please log in.' }, { status: 401 });
    }
    
    // 3. IMPORTANT: Access the token from the session object.
    //    This assumes you have configured the `jwt` and `session` callbacks in your
    //    next-auth options to expose the access token as `session.accessToken`.
    //    If you named it differently (e.g., session.apiToken), change it here.
    const bearerToken = (session as any).accessToken;

    if (!bearerToken) {
      console.error("Server configuration error: Access token not found in session.");
      return NextResponse.json(
        { error: 'Authentication token is missing.' },
        { status: 500 }
      );
    }

    // 4. Get the form data from the incoming request.
    const body = await request.json();
    
    // 5. Define the target URL for the real backend.
    const api_url = "http://198.199.81.24/api/v1/masjid";

    // 6. Make the fetch request to the real backend, using the dynamic token from the user's session.
    const apiResponse = await fetch(api_url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${bearerToken}`,
      },
      body: JSON.stringify(body),
    });

    // 7. Check if the request to the backend was successful.
    if (!apiResponse.ok) {
      const errorResult = await apiResponse.json();
      console.error("Backend API Error:", errorResult);
      return NextResponse.json(
        { error: 'Failed to create masjid data.', details: errorResult },
        { status: apiResponse.status }
      );
    }

    // 8. If successful, parse and return the response.
    const result = await apiResponse.json();
    return NextResponse.json(result, { status: 201 }); // 201 Created

  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}
