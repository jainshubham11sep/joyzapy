import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const client = await clientPromise;
    const db = client.db("punogames");

    const allgames = await db
      .collection("allgames")
      .find({})
      // .sort({ metacritic: -1 })
      // .limit(10)
      .toArray();

    // Properly return the response using new Response() constructor

    const transformedGames = allgames.map((game) => ({
      game_id: game._id,
      layout:game.layout,
      game_name: game.game_name,
      description: game.description,
      game_file: game.game_file,
      featured_img: game.featured_img,
      title: game.title,
      developer_name: game.developer_name,
      release_date: game.release_date,
      screenshots: game.screenshots,
      cat_arr: game.cat_arr,
    }));

    return new Response(JSON.stringify(transformedGames), {
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

  //   const res = await fetch("https://data.mongodb-api.com/...", {
  //     headers: {
  //       "Content-Type": "application/json",
  //       "API-Key": process.env.DATA_API_KEY,
  //     },
  //   });
  //   const data = await res.json();

  //   return Response.json({ data });
}
