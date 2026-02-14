const fs = require('fs')

// console.log("start");

// const file = fs.readFileSync('./fsdemo.txt', 'utf-8');
// console.log(file);

// fs.readFile
// console.log("end");
fs.copyFileSync('./demo.txt', './copy1.txt');
