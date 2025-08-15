import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
// Pastikan path ke authOptions sudah benar
import { authOptions } from "@/lib/auth";


// Handler untuk permintaan POST ke /api/events
// Rute ini akan membuat event baru.
export async function POST(request: Request) {
    try {
      // 1. Dapatkan sesi pengguna saat ini untuk memastikan autentikasi.
      const session = await getServerSession(authOptions);
  
      if (!session) {
        return NextResponse.json({ error: 'Unauthorized. Please log in.' }, { status: 401 });
      }
  
      // 2. Ekstrak bearer token dari sesi.
      const bearerToken = session.accessToken;
  
      if (!bearerToken) {
        console.error("Server configuration error: Access token not found in session.");
        return NextResponse.json(
          { error: 'Authentication token is missing.' },
          { status: 500 }
        );
      }
  
      // 3. Dapatkan data event baru dari body permintaan yang masuk.
      const body = await request.json();
  
      // 4. Definisikan URL target untuk backend.
      const api_url = "http://198.199.81.24/api/v1/event";
  
      // 5. Lakukan permintaan fetch ke backend.
      const apiResponse = await fetch(api_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${bearerToken}`,
        },
        body: JSON.stringify(body),
      });
  
      // 6. Periksa apakah permintaan ke backend berhasil.
      if (!apiResponse.ok) {
        const errorResult = await apiResponse.json();
        console.error("Backend API Error:", errorResult);
        return NextResponse.json(
          { error: 'Failed to create event.', details: errorResult },
          { status: apiResponse.status }
        );
      }
  
      // 7. Jika berhasil, parse dan kembalikan respons dengan status 201.
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
