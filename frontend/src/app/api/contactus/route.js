import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { name, email, phone, subject, message } = await request.json(); // Extract gameId from the request body
    // console.log(gameId,"gameIdgameId")
    if (!name || !email || !message || !phone || !subject) {
      return new Response(
        JSON.stringify({
          code: 400,
          error: "Name, email, and message are required",
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          status: 400, // Bad Request
        }
      );
    }

    const client = await clientPromise;
    const db = client.db("punogames");
    const result = await db.collection("contactus").insertOne({
      name,
      email,
      phone,
      subject,
      message,
    });

    if (result.acknowledged) {
      return new Response(
        JSON.stringify({
          code: 200,
          message: "Contact form submitted successfully",
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          status: 201, // Created
        }
      );
    } else {
      return new Response(
        JSON.stringify({
          code: 400,
          message: "Failed to submit request",
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
          status: 401, // Created
        }
      );
    }
  } catch (error) {
    console.error(error, "error");

    return new Response(
      JSON.stringify({ error: "Failed to fetch game details" }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 500, // Server Error
      }
    );
  }
}
