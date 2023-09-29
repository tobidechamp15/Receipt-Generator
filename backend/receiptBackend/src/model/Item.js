import mongoose from "mongoose";



const totalSchema = mongoose.Schema({
    
})



const itemSchema = mongoose.Schema({
    item:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    price:{
        type:Number,
        required: true
    },
    quantity:{
        type:Number,
        required: true
    },
    total:[totalSchema],
    required: true

},{
    timestamps: true
})

const Item = mongoose.model("Item", itemSchema)

export default Item;