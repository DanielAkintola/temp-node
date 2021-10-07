const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const reshape = _.flattenDeep(items);
console.log(reshape);
console.log("Hello world");