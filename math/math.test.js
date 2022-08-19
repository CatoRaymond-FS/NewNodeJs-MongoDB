const {
    add,
    subtract,
    multiply,
    divide,
    squareRoot,
    max
} = require('./math');



//create describe function
describe("Testing the math module",()=>{
    test("Should add two numbers",()=>{
        const result = add(2,3);
        expect(result).toBe(5);
    });

    test("Should subtract two numbers",()=>{
        const result = subtract(10,3);
        expect(result).toBe(7);
    });

    test("Should multiply two numbers",()=>{
        const result = multiply(2,3);
        expect(result).toBe(6);
    });

    test("Should divide two numbers",()=>{
        const result = divide(10,2);
        expect(result).toBe(5);
    });

});

//create describe function
describe("Testing the math module",()=>{
    //create a test function using the math object to find square root of a number
    test("Should find square root of a number",()=>{
        const result = squareRoot(4);
        expect(result).toBe(2);
    });

    //create a test function using the math object to find the maximum between two numbers
    test("Should find the maximum between two numbers",()=>{
        const result = max(2,3);
        expect(result).toBe(3);
    });
});