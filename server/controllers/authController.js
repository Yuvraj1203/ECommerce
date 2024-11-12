import { HashPassword } from "../helpers/authHelper.js";
import users from "../models/model.js";

const registerController = async(req,res) => {
    try {
        const {name,email,phone,password,address} = req.body;
        //check every field is filled
        if(!name || !email || !phone || !password || !address) return res.send({message:"EVERY fiEELD IS COMPULSORY, PLEASE FILL EACH FIELD"});
        //check if already exist
        const existingUser = await users.findOne({email});
        if(existingUser) return res.send({message:"EMAIL ALREADY REGISTERED"});
        //hash pass
        const hashedPass = await HashPassword(password);
        //register
        const user = await new users({name,email,phone,password:hashedPass,address}).save();
        return res.status(200).send({message:"User registration Successful",user})
    } catch (error) {
        console.log("error while registration from controller =>=> ",error);
        return res.status(500).send({message: "error while registering"});
    }
}

export {registerController}