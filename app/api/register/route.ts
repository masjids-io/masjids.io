// app/api/register/route.ts

import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { 
        email, 
        username, 
        password, 
        firstName, 
        lastName, 
        phoneNumber, 
        gender, 
        role 
    } = body;

    // Optional: Add server-side validation here with a library like Zod for extra security.

    // This is a SERVER-SIDE request, so CORS policies do not apply.
    const apiRes = await fetch(`http://198.199.81.24/api/v1/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        username,
        password,
        isEmailVerified: false,
        firstName,
        lastName,
        phoneNumber,
        gender,
        role,
      }),
    });

    const data = await apiRes.json();

    // If the external API returned an error, forward it to the client
    if (!apiRes.ok) {
      return NextResponse.json(
        { message: data.message || 'Failed to register' },
        { status: apiRes.status }
      );
    }

    // Send a success response back to the client
    return NextResponse.json(data, { status: 201 }); // 201 Created

  } catch (error) {
    console.error('REGISTRATION API ERROR:', error);
    return NextResponse.json(
      { message: 'An internal server error occurred.' },
      { status: 500 }
    );
  }
}