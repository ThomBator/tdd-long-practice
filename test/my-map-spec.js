const chai = require('chai');
const spies = require('chai-spies');
const myMap = require('../problems/my-map');
const expect = chai.expect;
chai.use(spies);


describe('myMap functionality', () => {

   let newArr, array, callback;

    beforeEach(()=> {
        array = [1,2,3];
        callback = (num) => num * 2;
        chai.spy.on(array, "map", ()=>{});
        newArr= myMap(array, callback);



    });

    it('should not mutate the input array', () => {

        expect(array).to.eql([1,2,3]);
        expect(array).to.not.eql(newArr);


    });

    it('should not call built in Array.map function', ()=> {
        expect(array.map).to.have.not.been.called();

    });

      it('should call passed callback on each array element', ()=> {
            const spy = chai.spy();
            myMap(array, spy);
            expect(spy).to.have.been.called.exactly(3);

    });




});
