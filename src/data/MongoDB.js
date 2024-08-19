import mongoose from 'mongoose';
import { env } from '../common/configs/env.js';

class MongoDB {
    static async connect() {
        try {
            await mongoose.connect(env.MONGO_URI);
            console.log('Database connected');
        } catch (error) {
            console.error('Error connecting to the database', error);
            throw error;
        }
    }
    static async disconnect() {
        try {
            await mongoose.disconnect();
            console.log('Database disconnected');
        } catch (error) {
            console.error('Error disconnecting the database', error);
            throw error;
        }
    }

};


export default MongoDB;