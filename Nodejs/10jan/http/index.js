const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const { url, method } = req;

  function sendFile(path, type = "text/html") {
    res.writeHead(200, { "Content-Type": type });
    const file = fs.readFileSync(path, "utf-8");
    res.end(file);
  }

  // ================= GET =================
  if (method === "GET") {
    switch (url) {
      case "/":
      case "/home":
        sendFile("./pages/home.html");
        break;

      case "/signup":
        sendFile("./pages/signup.html");
        break;

      case "/login":
        sendFile("./pages/login.html");
        break;

      case "/password":
        sendFile("./pages/password.html");
        break;
      case "/delete":
        sendFile("./pages/delete.html");
        break;

      case "/about":
        sendFile("./pages/about.html");
        break;

      case "/style":
        sendFile("./style/style.css", "text/css");
        break;

      default:
        res.end("<h1>404 Page Not Found</h1>");
    }
  }

 
  else if (method === "POST") {

  
    if (url === "/signup") {
      req.on("data", (data) => {
        const u = JSON.parse(data.toString());
        const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

        const isUser = users.find((x) => x.email === u.email);

        if (isUser) {
          return res.end(JSON.stringify({ message: "User already exists" }));
        }

        users.push(u);
        fs.writeFileSync("./users.json", JSON.stringify(users));

        return res.end(JSON.stringify({ message: "Signup successful" }));
      });
    }

   
    else if (url === "/login") {
      req.on("data", (data) => {
        const loginUser = JSON.parse(data.toString());
        const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

        const isUser = users.find(
          (u) => u.email === loginUser.email
        );

        if (!isUser) {
          return res.end(JSON.stringify({ message: "Invalid email" }));
        }

        if (isUser.password !== loginUser.password) {
          return res.end(JSON.stringify({ message: "Invalid password" }));
        }

        return res.end(JSON.stringify({ message: "Login successful ✅" }));
      });
    }

    else {
      res.end(JSON.stringify({ message: "Invalid POST request" }));
    }
  }

 
  else if (method === "PUT") {

    if (url === "/changePassword") {
      req.on("data", (data) => {
        const userDetails = JSON.parse(data.toString());
        const users = JSON.parse(fs.readFileSync("./users.json", "utf-8"));

        const isUser = users.find(
          (u) => u.email === userDetails.email
        );

        if (!isUser) {
          return res.end(JSON.stringify({
            message: "User with this email does not exist"
          }));
        }

        if (isUser.password !== userDetails.oldPassword) {
          return res.end(JSON.stringify({
            message: "Invalid old password"
          }));
        }

        if (userDetails.oldPassword === userDetails.newPassword) {
          return res.end(JSON.stringify({
            message: "Old and new password cannot be same"
          }));
        }

        isUser.password = userDetails.newPassword;
        fs.writeFileSync("./users.json", JSON.stringify(users));

        return res.end(JSON.stringify({
          message: "Password changed successfully"
        }));
      });
    }

    else {
      res.end(JSON.stringify({ message: "Invalid PUT request" }));
    }
  }
  else if(method == "DELETE"){
    switch(url){
        case "/delete" : req.on("data", (user)=>{
            const us = JSON.parse(user.toString());
            const users = JSON.parse(fs.readFileSync("./users.json","utf-8"));
            const isUser = users.find((u)=>u.email == us.email);

            if(!isUser){
                return res.end(JSON.stringify({message : "user does not exist"}));
            }
            if (isUser.password !== us.password) {
                return res.end(JSON.stringify({ message: "Invalid password" }));
              }
              

            let filterUser = users.filter((u)=> u.email != us.email);
            fs.writeFileSync("./users.json",JSON.stringify(filterUser));
            return res.end(JSON.stringify({message : "user delete successful"}));
            
        })
            break;

        default : res.end(JSON.stringify({message : "invalid url delete"}));
    }
}


});

server.listen(3000, () => {
  console.log("Server running at http://localhost:3000");
});
