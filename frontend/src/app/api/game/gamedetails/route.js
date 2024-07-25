import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(request) {
  try {
    const { game_name } = await request.json(); // Extract gameId from the request body

    if (!game_name) {
      return new Response(JSON.stringify({ error: "Invalid game" }), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 400, // Bad Request
      });
    }

    const client = await clientPromise;
    const db = client.db("punogames");

    const pipeline = [
      { $match: { game_name:(game_name) } },
      {
        $lookup: {
          from: "allcategories",
          let: { catIds: "$cat_arr" },
          pipeline: [
            {
              $match: {
                $expr: {
                  $in: [{ $toString: "$_id" }, "$$catIds"],
                },
              },
            },
          ],
          as: "matchedCategories",
        },
      },
      {
        $addFields: {
          category_names: {
            $map: {
              input: "$matchedCategories",
              as: "category",
              in: "$$category.cat_name",
            },
          },
        },
      },
      {
        $project: {
          matchedCategories: 0,
        },
      },
    ];

    const game = await db.collection("allgames").aggregate(pipeline).toArray();

    if (!game || game.length === 0) {
      return new Response(JSON.stringify({ error: "Game not found" }), {
        headers: {
          "Content-Type": "application/json",
        },
        status: 404, // Not Found
      });
    }

    return new Response(JSON.stringify(game[0]), {
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
