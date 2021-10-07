//os
const os = require("os");
// info about current user

const userInfo =  os.userInfo();

console.log(userInfo)
console.log(os.uptime());
const currentOs =  {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
};
console.log(currentOs); 


