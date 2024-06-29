import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("punogames");
    const featuredgames = await db
      .collection("allgames")
      .aggregate([
        {
          $lookup: {
            from: "allgames", // collection to join
            localField: "gameId", // field from the input documents
            foreignField: "gameId", // field from the documents of the "from" collection
            as: "gameDetails", // output array field
          },
        },
        {
          $limit: 10,
        },
        {
          $unwind: "$gameDetails", // Optional: flatten the gameDetails if you always expect one match
        },
        {
          $project: {
            // Optional: define the structure of the output documents
            _id: "$gameDetails._id",
            game_name: "$gameDetails.game_name",
            description: "$gameDetails.description", // You can include fields from joined documents
            game_file: "$gameDetails.game_file",
            cat_arr: "$gameDetails.cat_arr",
            featured_img: "$gameDetails.featured_img",
            title: "$gameDetails.title",
            developer_name: "$gameDetails.developer_name",
            release_date: "$gameDetails.release_date",
            screenshots: "$gameDetails.screenshots",
            priority: "$priority",
          },
        },
      ])
      .toArray();

    // Properly return the response using new Response() constructor
    return new Response(JSON.stringify(featuredgames), {
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
