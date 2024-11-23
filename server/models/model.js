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
            trim : true
        },
        role: {
            type: String,
            default: "client", // 0 for user, 1 for admin
            enum: ["admin","client"]
        }
    },
    {timestamps:true}
)

const users = mongoose.model("users",userSchema);

export default users;