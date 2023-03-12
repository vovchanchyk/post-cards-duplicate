import mongoose from "mongoose";


  const OrderItem = new mongoose.Schema({

    cardId : {
        type : String,
        required: true
    },
    title : {
        type : String,
        required: true
    },
    count: {
        type : Number,
        required: true
    },

});

const DeliveryAddress = new mongoose.Schema({
    country : {
        type : String,
        required: true
    },
    city : {
        type : String,
        required: true
    },
    address: {
        type : String,
        required: true
    },
    postcode: {
        type : String,
        required: true
    },
});

const Order = new mongoose.Schema({
    orderDate : {
        type: Date,
        default: Date.now
    },
    name : {
        type : String,
        required: true
    },
    surname : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    orderItems : {
        type : [OrderItem],
        required: true,
    },
    deliveryAddress : {
        type: DeliveryAddress,
        required: true,
    },
    status:{
        type: String,
        enum:['Pending', 'Paid', 'Process', 'Done'],
        default:'Pending',
        required: true,
    },
});




export default mongoose.model('Order', Order);