import dbConnect from '../../../utils/dbConnect';
import Table from '../../../models/Table';

dbConnect()

export default async (req, res) => {
    const {
        query: { id },
        method
    } = req;
    switch (method) {
        case 'DELETE':
            try {
                const deleteItem = await Table.deleteOne({ _id: id });

                if (!deleteItem) {
                    return res.status(400).json({ statusCode: 400 });
                }

                res.status(200).json({ statusCode: 200, data: deleteItem });
            } catch (error) {
                res.status(400).json({ statusCode: 400 });
            }
            break;
    }
}