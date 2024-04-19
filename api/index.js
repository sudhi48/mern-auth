import express from 'express';
import './db.js';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';

const app=express()

app.listen(3000, ()=>{
    console.log('Server listening to port 3000')
})

app.use(express.json())

app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)
