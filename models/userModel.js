const { Schema, model } = require("mongoose");
const UserSchema = new Schema({
    name:{
        type:String,
        required: false
    },
    address:{
        type:String,
        required: false
    },
    mobile:{
        type:Number,
        required: false
    },
    id:{
        type:Number,
        required:true
    }
},{versionKey:false})
const UserModel = model('users',UserSchema);
module.exports={
    UserModel
}