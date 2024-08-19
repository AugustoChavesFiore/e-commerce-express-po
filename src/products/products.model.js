//modelo de mongose 
import  { Schema, model } from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },

    category: {
        type: String,
        required: true,
        trim: true,
    },
    
    stock: {
        type: Number,
        required: true,
        trim: true,
        default: 0
    },

});

export const ProductModel = model('Product', productSchema);