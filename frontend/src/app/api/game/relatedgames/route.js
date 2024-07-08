import clientPromise from "@/lib/mongodb";
import { ObjectId } from "mongodb";

export async function POST(request) {

    const { cat_arr } = await request.json();
    console.log(cat_arr, "cat_arrcat_arr")
    if (!cat_arr || !Array.isArray(cat_arr)) {
        return res.status(400).send({ error: 'Invalid cat_arr' });
    }

    try {
        const client = await clientPromise;
        const db = client.db("punogames");
        const catgames = await db
            .collection('allgames')
            .aggregate([
                {
                    $match: { cat_arr: { $in: cat_arr.map(id => new ObjectId(id)) } },
                },
                {
                    $lookup: {
                        from: 'allcategories',
                        let: { catIds: '$cat_arr' },
                        pipeline: [
                            {
                                $match: {
                                    $expr: {
                                        $in: [{ $toString: '$_id' }, '$$catIds'],
                                    },
                                },
                            },
                        ],
                        as: 'matchedCategories',
                    },
                },
                {
                    $addFields: {
                        category_names: {
                            $map: {
                                input: '$matchedCategories',
                                as: 'category',
                                in: '$$category.cat_name',
                            },
                        },
                    },
                },
                {
                    $project: {
                        matchedCategories: 0,
                    },
                },
            ])
            .toArray();

        res.send(catgames);
    } catch (error) {
        console.error(error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
}
