import mongoose from "mongoose";

//connect mongo

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`db connection successful ${conn.connection.host}`)
    } catch (error) {
        console.log(`error while connecting to db : ${error}`)
    }
}

export default connectDB;