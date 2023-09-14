import mongoose from 'mongoose';
import dotenv from 'dotenv';

// check usage of return db
const dbConnection = async function(req, res){
    const db = await mongoose.connect(dotenv.config().parsed.DB_URL);
    return db;
}

export default dbConnection;