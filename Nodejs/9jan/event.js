
 const fs = require('fs')

console.log("start");

fs.readFile('./text.txt', 'utf-8',(err,file) =>{
    console.log("file reading completed");
    setTimeout(()=>{
        console.log("timer 2");
    },)

    
    setImmediate(()=>{
        console.log("immediate 2");
    });
})
    setImmediate(()=>{
        console.log("immediate 1");
    });
    setTimeout(()=>{
        console.log("timer 1");
    },0)
console.log("end");