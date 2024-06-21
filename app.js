//npm - global command comes with node 
//npm --version

// local dependency -  use it only in this particular project 
//npm i <package name>

// global depencdency - use it in project
//npm install -g <package name>
// sudo npm install -g <package name> (for mac)

// package.json - manifesr file (stores important info about project/package)
// manual approach (create package.json in the root , create properties etc.)
// npm init (step by step, press enter to skip)
// npm init -y (everything default)

const _ = require('lodash')

const items = [1, [2, [3, [4]]]]
const newItems = _.flattenDeep(items); // make multiple array into one array
console.log(newItems);