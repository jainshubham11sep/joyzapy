import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(request) {
  try {
    const { gameId } = await request.json(); // Extract gameId from the request body
    console.log(gameId,"gameIdgameId")

    if (!ObjectId.isValid(gameId)) {
      return new Response(JSON.stringify({ error: "Invalid game ID" }), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 400, // Bad Request
      });
    }

    const client = await clientPromise;
    const db = client.db("punogames");
    const game = await db.collection("allgames").findOne({ _id: new ObjectId(gameId) });

    if (!game) {
      return new Response(JSON.stringify({ error: "Game not found" }), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 404, // Not Found
      });
    }

    return new Response(JSON.stringify(game), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200, // OK
    });
  } catch (error) {
    console.error(error, "error");

    return new Response(JSON.stringify({ error: "Failed to fetch game details" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500, // Server Error
    });
  }
}
