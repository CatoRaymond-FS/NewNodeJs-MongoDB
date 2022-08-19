const {
    uppercase, 
    lowercase
} = require('./string');

//write describe function
describe("Testing the string module",()=>{

    test("Should uppercase a string input",()=>{
        const result = uppercase("hello");
        expect(result).toBe("HELLO");
    });

    test("should lowercase string input",()=>{
        const result = lowercase("HELLO");
        expect(result).toBe("hello");
    });
});