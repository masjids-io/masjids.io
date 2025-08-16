import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth/next';
// Pastikan path ke authOptions sudah benar
import { authOptions } from "@/lib/auth";

// Handler untuk permintaan GET ke /api/events
// Rute ini akan mengambil daftar event dan meneruskan query parameters.
export async function GET(request: Request) {
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

    // 3. Dapatkan query parameters dari URL permintaan yang masuk.
    const { searchParams } = new URL(request.url);

    // 4. Definisikan URL dasar untuk backend.
    const api_url = `http://198.199.81.24/api/v1/event`;

    // 5. Bangun URL lengkap dengan meneruskan query parameters.
    const fullUrl = `${api_url}?${searchParams.toString()}`;

    // 6. Lakukan permintaan fetch ke backend.
    const apiResponse = await fetch(fullUrl, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${bearerToken}`,
      },
      cache: 'no-store', // Gunakan 'no-store' untuk selalu mendapatkan data terbaru
    });

    // 7. Periksa apakah permintaan ke backend berhasil.
    if (!apiResponse.ok) {
      const errorResult = await apiResponse.json();
      console.error("Backend API Error:", errorResult);
      return NextResponse.json(
        { error: 'Failed to fetch events data.', details: errorResult },
        { status: apiResponse.status }
      );
    }

    // 8. Jika berhasil, parse dan kembalikan respons.
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
