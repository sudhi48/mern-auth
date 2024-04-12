import express from 'express';
import './db.js';
import userRoutes from './routes/user.route.js';

const app=express()

app.listen(3000, ()=>{
    console.log('Server listening to port 3000')
})

app.use('/api/user',userRoutes)
