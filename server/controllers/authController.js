import { comparePassword, HashPassword } from "../helpers/authHelper.js";
import users from "../models/model.js";
import JWT from "jsonwebtoken";

const registerController = async(req,res) => {
    try {
        const {name,email,phone,password} = req.body;
        //check every field is filled
        if(!name || !email || !phone || !password) return res.send({message:"EVERY fiEELD IS COMPULSORY, PLEASE FILL EACH FIELD"});
        //check if already exist
        const existingUser = await users.findOne({email});
        if(existingUser) return res.send({message:"EMAIL ALREADY REGISTERED"});
        //hash pass
        const hashedPass = await HashPassword(password);
        //register
        const user = await new users({name,email,phone,password:hashedPass}).save();
        return res.status(200).send({message:"User registration Successful",user})
    } catch (error) {
        console.log("error while registration from controller =>=> ",error);
        return res.status(500).send({message: "error while registering"});
    }
}

//login controller

const loginController = async(req,res) => {
    try {
        const {email,password} = req.body;
        //check every field is filled
        if(!email || !password) return ({message:"please fill each fields"});
        //is exist
        const user = await users.findOne({email});
        if(!user) return res.status(500).send({message:"user not register with this email"});
        //check pass is correct
        const isPassMatch = await comparePassword(password,user.password);
        if(!isPassMatch) return res.status(500).send({message:"password is incorrect"});
        //generate token
        const token = JWT.sign({_id:user._id},process.env.JWT_SECRET,{expiresIn:"7d"});
        return res.status(200).send({
            message:"login successfull",
            user,
            token
        })
    } catch (error) {
        console.log("error while login controller =>=> ",error);
        return res.status(500).send({message:"error while login controller"});
    }
}

//verify token (test)

const testController = (req,res) => {
    console.log("protected route");
    return res.status(200).send({message:"Protected route hahaha"});
}

export {registerController,loginController,testController}