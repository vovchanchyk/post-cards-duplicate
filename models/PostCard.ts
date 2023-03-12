import mongoose from "mongoose";

const PostCard = new mongoose.Schema({

    category: {
        type:String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type : String,
        required: true,
    },
    author : {
        type:String,
        required: true,
    },

    title : {
        type:String,
        required: true,
    },
    description : {
        type:String,
        required: true,
    },
    instagram: {
        type:String,
        required: true,
    }
});





export default mongoose.model('PostCard', PostCard);