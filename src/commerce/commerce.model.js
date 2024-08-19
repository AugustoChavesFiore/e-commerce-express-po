
import { model, Schema } from "mongoose";


const commerceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'Product'
    }],
    seller: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    totalSales: {
        type: Number,
        default: 0
    },

});

export const CommerceModel = model('Commerce', commerceSchema);