const fs= require("fs");

const data =  fs.readFileSync("./data/first.txt","utf8");
console.log(data);

fs.writeFileSync("./data/third.txt","hello world nodejs",{flag: "a"});