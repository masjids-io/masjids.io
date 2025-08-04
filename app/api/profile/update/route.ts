import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
// You must import your authOptions from your next-auth configuration file.
import { authOptions } from "@/lib/auth";

// This is the handler for PATCH requests to /api/profile/update
// It updates the profile of the currently authenticated user.
export async function PATCH(request: Request) {
  try {
    // 1. Get the current user's session to ensure they are authenticated.
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized. Please log in.' }, { status: 401 });
    }

    // 2. Extract the user ID and token from the session. This is crucial for security.
    const userId = (session as any)?.user?.id;
    const bearerToken = (session as any)?.accessToken;

    if (!userId || !bearerToken) {
      console.error("Server configuration error: User ID or token not found in session.");
      return NextResponse.json(
        { error: 'Authentication details are missing from session.' },
        { status: 500 }
      );
    }

    // 3. Get the update data from the incoming request body.
    const body = await request.json();

    // 4. IMPORTANT FOR SECURITY: Your backend expects the user ID in the request body.
    //    We will overwrite any ID in the incoming 'body' with the user ID from the
    //    secure session. This prevents a user from attempting to update another user's profile.
    const secureBody = {
        ...body,
        id: userId, // Ensure the ID is the one from the session.
    };

    // 5. Define the target URL for the real backend.
    //    Based on your example, the endpoint is /users for a PATCH.
    const api_url = "http://198.199.81.24/api/v1/users";

    // 6. Make the fetch request to the real backend.
    const apiResponse = await fetch(api_url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${bearerToken}`,
      },
      body: JSON.stringify(secureBody),
    });

    // 7. Check if the backend request was successful.
    if (!apiResponse.ok) {
      const errorResult = await apiResponse.json();
      console.error("Backend API Error:", errorResult);
      return NextResponse.json(
        { error: 'Failed to update user data.', details: errorResult },
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
