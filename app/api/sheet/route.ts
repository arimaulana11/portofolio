import { NextResponse } from "next/server";
import { google } from "googleapis";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    // FIX: Tidak pakai auth.getClient()
    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A1",
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            body.name,
            body.price,
            body.qty,
            body.description,
            new Date().toLocaleString("en-GB", {
              timeZone: "Asia/Jakarta",
            }),
          ],
        ],
      },
    });

    return NextResponse.json(
      { message: "Data berhasil ditambahkan" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
