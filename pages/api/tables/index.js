import dbConnect from '../../../utils/dbConnect'
import Table from '../../../models/Table'


dbConnect()

export default async (req, res) => {
    const {method} = req;
    switch (method){
        case 'GET':
            try {
                const table = await Table.find({});
                res.status(200).json({statusCode:200, data})
            } catch (error) {
                
            }
    }
}

