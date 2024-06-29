import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("punogames");
    const categoryData = await db
      .collection("allcategories")
      .find({})
      // .sort({ metacritic: -1 })
      .limit(10)
      .toArray();

    // Properly return the response using new Response() constructor
    return new Response(JSON.stringify(categoryData), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200, // HTTP status code
    });
  } catch (error) {
    console.error(error, "error");

    // Return an error response properly
    return new Response(JSON.stringify({ error: "Failed to fetch games" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500, // Indicate a server error
    });
  }
}
