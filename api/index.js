import cookieParser from 'cookie-parser';
import express from 'express';
import path from 'path';
import './db.js';
import authRoutes from './routes/auth.route.js';
import userRoutes from './routes/user.route.js';

const  __dirname=path.resolve();
const app=express()

app.use(express.static(path.join(__dirname,'/client/dist')))
app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'))
});

app.listen(3000, ()=>{
    console.log('Server listening to port 3000')
})

app.use(express.json())
app.use(cookieParser())

app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)

app.use((err,req,res,next)=>{
    const statusCode= err.statusCode || 500
    const message =err.message || 'Internal Server Error'
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    })   
})