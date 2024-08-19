//modelo de mongose 
import  { Schema, model } from 'mongoose';

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },

    role: {
        type: String,
        enum: ['admin', 'user', 'seller'],
        default: 'user'
    }
});

export const UserModel = model('User', userSchema);