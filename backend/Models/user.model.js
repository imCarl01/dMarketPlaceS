import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please enter your name"]
    },
    email:{
        type:String,
        require:true
    },
    phone:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    address:{
        type:String,
        required:false
    },
    role:{
        type:String,
        enum:["user","admin"], // defining roles
        default:"user" // set defualt to "user"
    }
    

},{timestamps:true})

const User = mongoose.model("User", userSchema)

export default User;
