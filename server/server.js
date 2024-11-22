import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/dbconn.js"
import authRoutes from "./routes/authRoutes.js"
import cors from 'cors'

const app = express();

//Env Config
dotenv.config();

const port = process.env.PORT || 8080;

//read about this 
//middleware
app.use(cors());
app.use(express.json());

//use routes
app.use("/api/v1/auth",authRoutes);

//calll db
connectDB();

app.get("/",(req,res)=>{
    res.send("<h1>Welocme to my App</h1>")
})

app.listen(port,()=>{
    console.log(`Port is Running on ${process.env.MODE_TYPE} on port numnber : ${port}`);
})