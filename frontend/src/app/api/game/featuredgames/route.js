import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("punogames");
    console.log("runningggg")
    const featuredGamesData = await db
    .collection("featuredgames")
      .aggregate([
        {
          $lookup: {
            from: "allgames",
            localField: "game_id",
            foreignField: "_id",
            as: "gameDetails"
          }
        },
        {
          $unwind: {
            path: "$gameDetails",
            preserveNullAndEmptyArrays: true
          }
        },
        {
          $sort: { "priority": 1 }
        },
        {
          $limit: 10
        },
        {
          $project: {
            game_id: "$gameDetails._id",
            game_name: "$gameDetails.game_name",
            description: "$gameDetails.description",
            game_file: "$gameDetails.game_file",
            cat_arr: "$gameDetails.cat_arr",
            featured_img: "$gameDetails.featured_img",
            title: "$gameDetails.title",
            developer_name: "$gameDetails.developer_name",
            release_date: "$gameDetails.release_date",
            priority: 1
          }
        }
      ])
      .toArray();
      console.log(featuredGamesData, "featureeeee")
    return new Response(JSON.stringify(featuredGamesData), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
}catch (error) {
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
