const express =require('express');

const app = express()

app.use(express.json());

const cors = require("cors");

app.use(cors());

const connectDB = require("./config/db");

connectDB()
 
const articleRouter=require('./routers/articleRouter')



app.get("/", (req, res) => {
    res.send("Api is running...");
  });
app.use('/news',articleRouter)  
app.listen(9000,()=>{
    console.log(" server is running on port 9000")
})