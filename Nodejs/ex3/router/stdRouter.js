const express = require('express');
const stdRouter = express.Router()

stdRouter.get('/get', (req,res) =>{
    return res.json({message:" dummy user"})
});


stdRouter.post('/login', (req,res) =>{
    return res.json({message:" login succesfull"});
});


module.exports = stdRouter;