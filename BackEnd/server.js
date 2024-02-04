const express=require("express");
const connectDB=require("../BackEnd/Database");
require("dotenv").config();
connectDB();

const authRoutes=require('../Backend/Routes/authRoutes')
const recipeRoutes=require("../Backend/Routes/recipeRoutes")
const categoryRoutes=require("../Backend/Routes/categoryRoutes")

const app=express();
app.use(express.json());

//CORS middleware
const cors=require("cors");
app.use(cors());
app.use("/auth",authRoutes);
app.use("/recipe",recipeRoutes);
app.use('/category',categoryRoutes)



const PORT=process.env.PORT || 3000;

app.listen(PORT,()=>{console.log(`server conneted to port ${PORT}`)});