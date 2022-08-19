//write functions that correspond with math.test.js
const add = (a,b)=>{
    return a+b;
}
const subtract = (a,b)=>{
    return a-b;
}
const multiply = (a,b)=>{
    return a*b;
}
const divide = (a,b)=>{
    return a/b;
}
const squareRoot = (a)=>{
    return Math.sqrt(a);
}
const max = (a,b)=>{
    return Math.max(a,b);
}

module.exports = {
    add,
    subtract,
    multiply,
    divide,
    squareRoot,
    max
}