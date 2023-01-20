import User from "../models/User";
import bcrypt from "bcryptjs"
export const getAllUser=async(req,res,next)=>{
    let users;
    try {
        users=await User.find()
    } catch (error) {
        console.log(error);
    }
    if (!users) {
        return res.status(404).json({message:'No Users Founds'})
    }
    return res.status(200).json({users})
}
export const signup=async(req,res,next)=>{
    const {name,email,password}=req.body
    let existingUser
    try {
        existingUser = await User.findOne({email})
    } catch (error) {
        console.log(error);
    }
    if (existingUser) {
        return res.status(404).json({message:'Users Already Exists! Login Instead'})
    }
    const hashedPassword = bcrypt.hashSync(password)
    const user = new User({
        name,
        email,
        password:hashedPassword,
    })
    try {
        await user.save()
    } catch (error) {
        console.log(error);
    }
    return res.status(201).json({user})
}