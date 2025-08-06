import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
// You must import your authOptions from your next-auth configuration file.
// The path might be different based on your project structure.
import { authOptions } from "@/lib/auth";

// This is the handler for PATCH requests to /api/users/[id]
// It updates a user's profile by the ID provided in the URL.
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    // 1. Get the current user's session to ensure the request is authenticated.
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

    // 4. Get the user ID to update from the dynamic route parameters.
    const { id } = params;
    if (!id) {
        return NextResponse.json({ error: 'User ID is required in the URL.' }, { status: 400 });
    }

    // 5. Get the update data from the incoming request body.
    const body = await request.json();

    // 6. IMPORTANT FOR SECURITY: Create the final payload for the backend.
    //    We overwrite any ID in the body with the ID from the URL parameter to ensure
    //    the correct user is updated.
    const secureBody = {
        ...body,
        id: id,
    };

    // 7. Define the target URL for the real backend.
    const api_url = "http://198.199.81.24/api/v1/users";

    // 8. Make the fetch request to the real backend.
    const apiResponse = await fetch(api_url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${bearerToken}`,
      },
      body: JSON.stringify(secureBody),
    });

    // 9. Check if the request to the backend was successful.
    if (!apiResponse.ok) {
      const errorResult = await apiResponse.json();
      console.error("Backend API Error:", errorResult);
      return NextResponse.json(
        { error: 'Failed to update user data.', details: errorResult },
        { status: apiResponse.status }
      );
    }

    // 10. If successful, parse and return the response.
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
