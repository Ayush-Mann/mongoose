var mongoose = require('mongoose')
var Schema = mongoose.Schema;
var userSchema = new Schema({
    name: {
        type: String,
        require: true,

    },
    email: {
        type: String,
        required: true,

    },
    age: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('User',userSchema);