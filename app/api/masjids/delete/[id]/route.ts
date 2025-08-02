import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
// You must import your authOptions from your next-auth configuration file.
import { authOptions } from "@/lib/auth";
// This is the handler for DELETE requests to /api/masjids/[id]
// It deletes an existing masjid.
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
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
  
      // 4. Define the target URL for the real backend.
      const api_url = `http://198.199.81.24/api/v1/masjid/${id}`;
  
      // 5. Make the fetch request to the real backend.
      const apiResponse = await fetch(api_url, {
        method: "DELETE",
        headers: {
          "Authorization": `Bearer ${bearerToken}`,
        },
      });
  
      // 6. Check if the backend request was successful.
      if (!apiResponse.ok) {
        // Handle cases where the response might not have a JSON body
        try {
            const errorResult = await apiResponse.json();
            console.error("Backend API Error:", errorResult);
            return NextResponse.json(
              { error: 'Failed to delete masjid.', details: errorResult },
              { status: apiResponse.status }
            );
        } catch (e) {
            return NextResponse.json(
                { error: `Failed to delete masjid. Status: ${apiResponse.status}` },
                { status: apiResponse.status }
            );
        }
      }
  
      // 7. If successful, return a success response with a 204 status.
      return new Response(null, { status: 204 }); // 204 No Content
  
    } catch (error) {
      console.error("API Route Error:", error);
      return NextResponse.json(
        { error: 'An internal server error occurred.' },
        { status: 500 }
      );
    }
  }
