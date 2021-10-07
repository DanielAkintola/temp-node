const http = require("http");

http.createServer((req,res)=>{
        console.log("Welcome to our home page");
        res.end("Hello world");
   
  
    
}).listen(3000,()=>{
    console.log("WELCOME");
});