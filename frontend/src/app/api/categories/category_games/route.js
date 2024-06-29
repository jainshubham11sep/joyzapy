import clientPromise from "@/lib/mongodb";

export async function GET() {
  try {
    const client = await clientPromise;
    let categoryId = "667d4d2f7fd5b95183945740";
    const db = client.db("punogames");

    const projection = {
      _id: 1,
      game_name: 1,
      description: 1,
      game_file: 1,
      featured_img: 1,
      title: 1,
      developer_name: 1,
      release_date: 1,
    };
    const categoryData = await db
      .collection("allgames")
      .find(
        {
          cat_arr: { $in: [categoryId] },
        },
        { projection: projection }
      )
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
