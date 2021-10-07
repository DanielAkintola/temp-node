const http = require("http");

http.createServer((req,res)=>{
    if(req.url == "/"){
        res.write("Welcome to our home page");
        res.end();
    }
     else if(req.url == "/about"){
        res.write("Welcome to our about page");
        res.end();
    }
    else{
        res.writeHead(200,{"content-type":"text/html"});
        res.end(`404 not found<br>
        <a href="/">Go back</a>
        `);
    }
  
    
}).listen(3000);