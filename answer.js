// Answer here for tasks.md

// Q1 Answer here...
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
// Q2 Answer here...
userSchema.update({
    email: {
        type: String,
        lowercase: true
    }
})
// Q3 Answer here...
userSchema.update({
    password: {
        type: String,
        minlength: 5,
    },
    createdAt: {
        type: Date,
        default: (new Date).getDate()
    }
}, )
module.exports = mongoose.model('User',userSchema);

// Q4 Answer here...
// 1. village -> String
//   2. city -> String
//   3. state -> String
//   4. pin -> number
//   5. user -> ObjectId of User from user schem
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

// Q5 Answer here...
addressSchema.update({
    state:{
        type:String,
        minlength:4,
        index:true
    },
    state:{
        type:String,
        minlength:4,
        index:true
    }
})

// Q6 Answer here...
userSchema.update({
    favourites:[{
        type: String,
       }]
})

// Q7 Answer here...
userSchema.update({
    timestamps:true
})

// Q8 Answer here...