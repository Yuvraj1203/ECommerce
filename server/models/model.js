import mongoose , {Schema} from "mongoose";

const userSchema = new Schema({
        name : {
            type : String,
            required : true,
            trim : true
        },
        email : {
            type : String,
            required : true,
            unique : true,
            trim : true
        },
        phone : {
            type : String,
            required : true,
            trim : true,
            unique : true
        },
        password : {
            type : String,
            required : true,
            trim : true,
        },
        address : {
            type : String,
            required : true,
            trim : true
        }
    },
    {timestamps:true}
)

const users = mongoose.model("users",userSchema);

export default users;