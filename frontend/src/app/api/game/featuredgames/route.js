import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("punogames");
    const featuredGamesData = await db
      .collection("featuredgames")
      .aggregate([
        {
          $lookup: {
            from: "allgames", // the foreign collection
            localField: "game_id", // field in the featuredgames collection
            foreignField: "_id", // field in the allgames collection
            as: "gameDetails", // output array field containing joined records
          },
        },
        {
          $unwind: "$gameDetails", //Flatten the gameDetails array
          preserveNullAndEmptyArrays: true, //Include documents that don't have a match in the joined collection
        },
        {
          $limit: 10, // Limit the results for simplicity
        },
        {
          $sort: { priority: 1 }, // Sort by priority in ascending order
        },
        {
          $project: {
            game_id: "$gameDetails._id",
            game_name: "$gameDetails.game_name",
            description: "$gameDetails.description", // You can include fields from joined documents
            game_file: "$gameDetails.game_file",
            cat_arr: "$gameDetails.cat_arr",
            featured_img: "$gameDetails.featured_img",
            title: "$gameDetails.title",
            developer_name: "$gameDetails.developer_name",
            release_date: "$gameDetails.release_date",
            priority: "$priority",
          },
        },
      ])
      .toArray();

    // Properly return the response using new Response() constructor
    return new Response(JSON.stringify(featuredGamesData), {
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
