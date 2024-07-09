import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(request) {
    const { cat_arr } = await request.json();
    console.log(cat_arr, "cat_arrcat_arr");

    if (!cat_arr || !Array.isArray(cat_arr)) {
        return new Response(JSON.stringify({ error: 'Invalid cat_arr' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const client = await clientPromise;
        const db = client.db("punogames");

        const catgames = await db
            .collection("allgames")
            .aggregate([
                {
                    $match: { cat_arr: { $in: cat_arr } }, // Match documents where any element in cat_arr is in the cat array
                },
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
                        matchedCategories: 0, // Exclude the matchedCategories field
                    },
                },
            ])
            .toArray();

        if (catgames.length === 0) {
            return new Response(JSON.stringify({ error: 'No games found for the given categories' }), {
                status: 404,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        console.log(catgames, "catgamescatgames");
        return new Response(JSON.stringify(catgames), {
            status: 200,
            headers: { 'Content-Type': 'application/json' }
        });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
