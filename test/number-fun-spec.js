// Your code here
const { expect, util } = require('chai');
const { returnsThree , reciprocal} = require('../problems/number-fun');


describe("returnsThree() function call behavior", () => {
    it("should return three when called", () => {
        const num = returnsThree();
        expect(num).to.equal(3);
    });
});

describe("reciprocal() function call behavior", () => {
    it("should return the reciprocal of the passed argument", () => {
        const num = 2;
        const result = reciprocal(num);
        expect(result).to.equal(0.5);
    } );
    it("should not accept numbers larger than 1,000,000", () => {
        const num = 1000001;
        expect(()=> reciprocal(num)).to.throw(TypeError);
    });
     it("should not accept numbers smaller than 1", () => {
        const num = 0;
        expect(()=> reciprocal(num)).to.throw(TypeError);
    });
});
