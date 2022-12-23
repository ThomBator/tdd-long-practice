// Your code here
const { expect } = require('chai');
const reverseString = require('../problems/reverse-string');


describe('reverseString function', function () {
    it('Should return passed string in reverse', function() {
        let forwardString = 'fun';
        let reverseStringCall = reverseString(forwardString);
        expect(reverseStringCall).to.equal('nuf');
    })

    it('Should throw a TypeError if a non-string is passed', function() {
        let arg = 1;
        expect( () => reverseString(arg)).to.throw(TypeError);
    })
})
