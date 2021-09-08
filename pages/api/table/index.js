import dbConnect from '../../../utils/dbConnect'
import Table from '../../../models/Table'


dbConnect()

export default async (req, res) => {
    const {
        query,
        method
    } = req;
    switch (method) {
        case 'GET':
            console.log(query);
            try {
                if (!query.find) {
                    const table = await Table.find({}).sort({ date: 1 });
                    return res.status(200).json({ statusCode: 200, data: table });
                } else {
                    const table = await Table.aggregate([
                        {
                            // $unwind: {
                            //     path: "$name"
                            // },
                            // $replaceRoot: {
                            //     newRoot: "$name"
                            // },
                            $match: {
                                name: query.find,
                            }
                        }
                    ])
                    return res.status(200).json({ statusCode: 200, data: table });
                }
            } catch (error) {
                res.status(400).json({ statusCode: 400 });
            }
            break;

        case 'POST':
            try {
                const tableParam = await Table.create(req.body);
                res.status(200).json({ statusCode: 200, data: tableParam });
            } catch (error) {
                res.status(400).json({ statusCode: 400 });
            }
            break;

        default:
            res.status(400).json({ statusCode: 400 });
            break;
    }
}

