const path = require('path')

let myPath = 'JSPIDER/react/logo.jpeg'

console.log(path.dirname(myPath));
console.log(path.basename(myPath));
console.log(path.extname(myPath));


let myPath2 = 'JSPIDER/js'
console.log(path.join(myPath2,'image','hero.jpeg'));