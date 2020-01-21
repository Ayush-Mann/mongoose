var mongoose = require('mongoose')
var Schema = mongoose.Sche

var addressSchema = new Schema({
    village: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        required: true,
    },
    state:{
        type:String,
        required:true,
    },
    pin:{
        type: Number,
        required:true,

    },
    userId:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }]



})
module.exports = mongoose.model('Address',addressSchema);
