import dotenv from 'dotenv';
import express from 'express';
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


const app=express()


app.listen(3000, ()=>{
    console.log('Server listening to port 3000')
})