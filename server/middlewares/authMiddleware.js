import JWT from "jsonwebtoken"
import users from "../models/model.js";

//decode

export const requireSignIn = (req,res,next) => {
    try {
        const decode = JWT.verify(req.headers.authorization,process.env.JWT_SECRET);
        req.user = decode;
        decode && next();
    } catch (error) {
        console.log("error from middleware",error);
    }
}


//check is admin

export const isAdmin = async(req,res,next) => {
    try {
        const user = await users.findById(req.user._id);
        if(user.role !== "admin") {
            return res.status(401).send({message:"Unauthorized Access"})
        }else{
            next();
        }
    } catch (error) {
        console.log("error from middleware isAdmin",error);
        return res.status(403).send({message:"error from isadmin middleware",error:error})
    }
}