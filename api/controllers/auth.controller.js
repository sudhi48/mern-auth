import User from "../models/user.model.js"


export const signup =async (req,res) => {
    try{
        const {username, email,password} = req.body
        const newUser= new User({username,email,password})
        await newUser.save()
        console.log('user created successfully')
        res.status(201).json({message: 'User created successfully'})
    }    
    catch(error){
        res.status(501).json({error: 'Internal Server Error'})
        console.log(error)
    }
}