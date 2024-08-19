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
    //stock debe ser una referencia a la coleccion de stock
    stock: {
        type: Schema.Types.ObjectId,
        ref: 'Stock',
        required: true
    }

});

export const ProductModel = model('Product', productSchema);