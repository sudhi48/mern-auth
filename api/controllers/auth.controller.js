import User from "../models/user.model.js"


export const signup =async (req,res,next) => {
    try{
        const {username, email,password} = req.body
        const hashedPassword= bcryptjs.hashSync(user.password, 10)
        const newUser= new User({username,email,password:hashedPassword})
        await newUser.save()
        console.log('user created successfully')
        res.status(201).json({message: 'User created successfully'})
    }    
    catch(error){
       next(error)
    }
}