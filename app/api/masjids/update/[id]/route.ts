import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
// You must import your authOptions from your next-auth configuration file.
import { authOptions } from "@/lib/auth";

// This is the handler for PATCH requests to /api/masjids/[id]
// It updates an existing masjid's details.
export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  try {
    // 1. Get the current user's session to ensure they are authenticated.
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ error: 'Unauthorized. Please log in.' }, { status: 401 });
    }

    // 2. Extract the bearer token from the session.
    const bearerToken = (session as any)?.accessToken;

    if (!bearerToken) {
      console.error("Server configuration error: Access token not found in session.");
      return NextResponse.json(
        { error: 'Authentication token is missing.' },
        { status: 500 }
      );
    }

    // 3. Get the masjid ID from the dynamic route parameters.
    const { id } = params;
    if (!id) {
        return NextResponse.json({ error: 'Masjid ID is required in the URL.' }, { status: 400 });
    }

    // 4. Get the update data from the incoming request body.
    const body = await request.json();

    // 5. IMPORTANT FOR SECURITY: Create the final payload for the backend.
    //    We overwrite the ID in the body with the ID from the URL to prevent a user
    //    from trying to update a different record.
    const secureBody = {
        ...body,
        id: id,
    };

    // 6. Define the target URL for the real backend.
    //    Based on your example, the backend endpoint for updates is singular.
    const api_url = "http://198.199.81.24/api/v1/masjid";

    // 7. Make the fetch request to the real backend.
    const apiResponse = await fetch(api_url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${bearerToken}`,
      },
      body: JSON.stringify(secureBody),
    });

    // 8. Check if the backend request was successful.
    if (!apiResponse.ok) {
      const errorResult = await apiResponse.json();
      console.error("Backend API Error:", errorResult);
      return NextResponse.json(
        { error: 'Failed to update masjid data.', details: errorResult },
        { status: apiResponse.status }
      );
    }

    // 9. If successful, parse and return the response.
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
