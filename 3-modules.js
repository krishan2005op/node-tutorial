// Modules - encapsulated code (only share minimum)
// CommonJS, every file is module (by default)


const krishan = require('./4-firstmodule')
console.log(krishan);

const sayHi /*same as function anme*/  = require('./5-utilas')
sayHi('susan')

const data = require('./6-alternative-flavor')
console.log(data);

const addValues = require('./7-mind-grenade')
addValues.sub(7,7);
addValues.sum(7,7);