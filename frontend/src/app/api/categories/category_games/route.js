import clientPromise from "@/lib/mongodb";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const { cat_name } = await request.json();
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

    const category = await db
      .collection("allcategories")
      .find({
        cat_name: cat_name
      })
      .limit(1)
      .toArray();

    let categoryId = category[0]._id.toString()

    const categoryData = await db
      .collection("allgames")
      .find(
        {
          cat_arr: { $in: [categoryId] },
        },
        { projection: projection }
      )

      .limit(10)
      .toArray();

    return new Response(JSON.stringify(categoryData), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 200,
    });
  } catch (error) {
    console.error(error, "error");


    return new Response(JSON.stringify({ error: "Failed to fetch games" }), {
      headers: {
        "Content-Type": "application/json",
      },
      status: 500,
    });
  }
}
