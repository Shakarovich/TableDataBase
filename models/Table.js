const mongoose = require("mongoose")

const TablesSchema = new mongoose.Schema({
    date:{
        type:Date,
        required:[true, 'Date is required']
    },
    name:{
        type:String,
        required:[true, 'Name is required']
    },
    amount:{
        type: Number,
        required:[true, 'Amount is required']
    },
    distance:{
        type:Number,
        required:[true, 'Distance is required']
    }
});


module.exports = mongoose.models.Tables || mongoose.model('Tables', TablesSchema);