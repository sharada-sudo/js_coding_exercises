const {sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered}  = require("../challenges/exercise006");

console.log(sumMultiples);

describe("sumMultiples",()=>{
    test("it returns the sum of any numbers that are multiples of 3 and 5", () =>{
        const result =sumMultiples([1,3, 5]);
        const expected =8 ;
        expect(result).toBe(expected);
    });
});

describe("isValidDNA" , ()=>{
    test("returns true if the string contains characters 'C','G','T','A' ", () => {
        expect(isValidDNA("Hello")).toBe(false);
        

});
   
});       
 


