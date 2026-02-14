const express = require('express');
const stdRouter = require('./router/stdRouter.js');
const app = express();


app.use('/api/std', stdRouter);

app.use((req,res)=>{
    throw new URIError("invalid url");
});

app.use((err,req,res,next) =>{
    return res.status(404).json({message: err.message});
});

app.listen(3000, 'localhost' ,() => {
    console.log( " server started at http://localhost:3000");
  });