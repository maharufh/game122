const express = require('express');
const app = express();
const fs = require("fs");

const path = require('path');

 
const devices = {
  laptops: [
    { brand: "HP", model: "Spectre x360" },
    { brand: "Lenovo", model: "ThinkPad X1" },
    { brand: "Apple", model: "MacBook Air M2" },
    { brand: "Apple", model: "MacBook Pro M3" }
  ],
  phones: [
    { brand: "Google", model: "Pixel 8" },
    { brand: "OnePlus", model: "11 Pro" },
    { brand: "Apple", model: "iPhone 15" },
    { brand: "Apple", model: "iPhone 15 Pro" }
  ]
};

 


console.log(devices);

app.get('/prod', (req, res) => {
  console.log('req.query = ' ,req.query);
  let prod = devices[req.query.product];
  let filteredProd = prod.filter((p) =>p.brand == req.query.brand);


  res.json(filteredProd);
});

//req.body
app.use(express.json());
app.post('/signup',(req,res) =>{
    if(req.body == undefined){
        return res.json({message:" provide all details ,without details we cant create user"});
        
    }
    const{name,email,password} = req.body;
    if(!name || ! email || !password){
        return res.json({message:"provide all the input fields"})
    }
 
  return res.json({message:"user printed in server console"})
})
 
 //res.send
 app.get('/res/send', (req,res) =>{
    // return res.send({message:"we are sending json data"});
    return res.send(fs.readFileSync('./home.html'));
 })

 //res.downlaod
 app.get('/question',(req,res) =>{
    res.download(path.join(__dirname, 'que.pdf'),'Nodejs pdf',(err) =>{
        if(err){
            console.log("something wrong");
            res.json({message:"server side error"});
        }else{
            console.log("file downloaded successfully");
            res.json({message:"file downloaded successfully"});
             
        }
    });

 })

 //res.status
 app.post('/api/status', (req,res) =>{
    return res.status(404).json({message:"problem from client"});
 });

 app.delete('/delete', (req,res) =>{
    return res.sendStatus(204);
 });

 app.get('/set', (req,res)=>{
    res.set("custom-headers", 'JSP');
    return res.json({message:" we have send custom header"});
 })
 app.get('/cookie', (req,res)=>{
    res.cookie("c", 'xyz');
    return res.json({message:"   cookies given from server"});
 })
//middleware


const m1 =((req,res,next) =>{
    console.log("middleware executing");
    req.name = "JSP";
    next();
})

const m2 = ((req,res,next) =>{
    console.log("middleware executing");
    req.name = "MERN";
    next();
})

app.use (m1,m2)
app.get('/midd', (req,res)=>{

   
    return res.json({message:" middleware server", name:req.name});
 })
 

app.listen(3000, 'localhost' ,() => {
  console.log( " server started at http://localhost:3000");
});