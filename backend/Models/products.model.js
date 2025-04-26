import mongoose from "mongoose";

const productSchema= mongoose.Schema({
    name:{
        type:String,
        required:[true,"Please Enter a name"],
        trim:true,
    },
    description:{
        type:String,
        required:[true,"Please provide a description"]
    },
    price:{
        type:Number,
        required:[true,"Please provide a price"],
        default:0,
        min:[0,"Price cannot be negative"]
    },
    image:{
        type:String,
        required:true,
    },
    quantity:{
        type:Number,
        required:true,
        default:0
    },
    category:{
        type:String,
        required: [true, "Please specify a category"],
    }

},{
    timestamps:true
})

const Product = mongoose.model("Product",productSchema);

export default Product;