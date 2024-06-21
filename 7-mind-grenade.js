

function addValues(num1,num2){
    console.log(`the sum is: ${num1 + num2}`);
}

function difference(num3,num4){
    console.log(`diff. of two numbers is = ${num3 - num4}`);
}

module.exports.sum = addValues;
module.exports.sub = difference;