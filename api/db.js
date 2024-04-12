import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

mongoose.connect(process.env.MONGO_URL)

const db=mongoose.connection;

db.on('connected',()=>{
    console.log('connected to database')
})

db.on('error',(error)=>{
    console.log(error)
})

db.on('disconnected',()=>{
    console.log('disconnected from database')
})

export default db;