import bcryptjs from 'bcryptjs';
import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    email:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    },
}, {timestamps: true});

userSchema.pre('save', async function(next){
    const user = this;
    //hash the password only if it  has been modified (or it  is new)
    if(!user.isModified('password')) return next();
    try{

        //hash password
        const hashedPassword= bcryptjs.hashSync(user.password, 10);
        //override the plain password with hashed one
        user.password=hashedPassword;
        next();
    }
    catch(err){
        return next(err);
    }
})

const User=mongoose.model('User',userSchema)
export default User;