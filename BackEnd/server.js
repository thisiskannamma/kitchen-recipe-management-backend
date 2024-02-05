const express=require("express");
const connectDB=require("../BackEnd/Database");
require("dotenv").config();
connectDB();

const authRoutes=require('../BackEnd/Routes/authRoutes')
const recipeRoutes=require("../BackEnd/Routes/recipeRoutes")
const categoryRoutes=require("../BackEnd/Routes/categoryRoutes")

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

app.get('/', (req, res) => res.send(`
<div>
<p>Because my rendor app couldn't able to connect to mongoDB compass.please use this link to check details  </p>
<p>To get all mentor List - <a>http://localhost:5000/Mentors<a> </p>
<br>
<p>To get all Students List - http://localhost:5000/Students </p>
<br>
<p>To get mentor based on ID - http://localhost:5000/Mentors/get-mentor/65a4d070b0657ec3378751c5<p>
<br>
<p>To get students with no mentor - http://localhost:5000/Students/no-mentors<p>
<br>
<p>To get all students for a particular mentor - http://localhost:5000/Students/mentor-students/65a4ce5db0657ec3378751c0 </p>
<br>



`))