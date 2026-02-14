const express = require('express');
const cors = require ('cors');
const path = require('path')



const app = express();
app.use(cors({origins:"http://localhost:5173/"}));


app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,'public')))

app.get("/", (req,res) =>{
    res.sendFile(path.join(__dirname,'public','htmlpages','home.html'))
})
app.post("/testurl", (req,res) =>{
    console.log("req.body = ", req.body);
     return res.json({ name:"jsp", age:23})
})

///cors middleware
app.get("/user", (req,res) =>{
   res.json({name:"jsp",age:23})
})


app.listen(3000, 'localhost' ,() => {
    console.log( " server started at http://localhost:3000");
  });