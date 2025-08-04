import { NextResponse } from 'next/server';

// Handler untuk permintaan GET ke /api/masjids
// Mengambil daftar masjid dengan meneruskan query parameter ke backend.
// Endpoint ini bersifat publik dan tidak memerlukan token.
export async function GET(request: Request) {
  try {
    // 1. Ambil query parameter dari URL permintaan yang masuk.
    const { searchParams } = new URL(request.url);

    // 2. Tentukan URL dasar untuk backend.
    const api_url = `http://198.199.81.24/api/v1/masjids`;

    // 3. Buat URL lengkap dengan meneruskan query parameter.
    const fullUrl = `${api_url}?${searchParams.toString()}`;

    // 4. Lakukan permintaan fetch ke backend.
    // Tidak ada header "Authorization" yang diperlukan karena endpoint ini publik.
    const apiResponse = await fetch(fullUrl, {
      method: "GET",
      cache: 'no-store', // Selalu ambil data terbaru dari server
    });

    // 5. Periksa apakah permintaan ke backend berhasil.
    if (!apiResponse.ok) {
      const errorResult = await apiResponse.json();
      console.error("Backend API Error:", errorResult);
      return NextResponse.json(
        { error: 'Gagal mengambil data masjid.', details: errorResult },
        { status: apiResponse.status }
      );
    }

    // 6. Jika berhasil, parse dan kembalikan respons.
    const result = await apiResponse.json();
    return NextResponse.json(result, { status: 200 }); // 200 OK

  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan internal pada server.' },
      { status: 500 }
    );
  }
}