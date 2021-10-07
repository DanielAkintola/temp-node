const fs = require("fs");
console.log("first task started");

fs.readFile("./data/first.txt",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
        console.log("Task Completed")
    }
});

console.log("Starting next task");