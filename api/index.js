import express from 'express';
import './db.js';


const app=express()


app.listen(3000, ()=>{
    console.log('Server listening to port 3000')
})