 const os = require('os')
 console.log(os.freemem());
 console.log(os.arch());
 console.log(os.cpus());
 console.log(os.platform());
 console.log(os.totalmem()/1024**3);
 console.log(os.hostname());