const chai = require('chai');
const expect = chai.expect;
const Person = require('../problems/person');

describe('Person Class functinality', ()=> {
    let person, otherPerson, obj, obj2;

    beforeEach(()=> {

        person = new Person('Tony', 24);
        otherPerson = new Person('Teddy', 75);
        obj = {
                'name' : 'Marty',
                'age'  : 70
            }
        obj2 = {};
    });

    describe('Person constructor functionality', ()=> {
        it('should have assigned name and age to new person when created', ()=> {
            expect(person.name).to.equal('Tony');
            expect(person.age).to.equal(24);
        });
    });
    describe('Person.sayHello() method', ()=> {
        it('should return a customized greeting when called', ()=> {
            const greeting = person.sayHello();
            expect(greeting).to.equal('Tony says hello!');

        });



    });

    describe('Person.visit method', ()=> {

        it('should return a customized string saying person visited otherPerson', () => {
            let visitString = person.visit(otherPerson);

            expect(visitString).to.equal('Tony visited Teddy.');


        })



    });

    describe('Person.switchVisit method', ()=> {
        it('should return a message saying otherPerson visited person', ()=> {
            let switchString = person.switchVisit(otherPerson);
            expect(switchString).to.equal('Teddy visited Tony.');
        });
    })


    describe('Person.update method', ()=> {


        it('should update person when valid object type is passed in', () => {


            person.update(obj);
            expect(person.name).to.equal('Marty');
            expect(person.age).to.equal(70);
        });


        it('should throw an error if an incompatible object is passed', ()=> {

        expect(() => person.update(obj2)).to.throw(TypeError);
        });



    });


    describe('Person.tryUpdate method', ()=> {
        it('should return true if update is sucessfully invoked', ()=> {
            expect(person.tryUpdate(obj)).to.equal(true);


        });

        it('should return false if an invalid object is passed', ()=> {
            expect(person.tryUpdate(obj2)).to.equal(false);


        });

    });

    describe('Person.greetAll static method function', ()=> {
        it('should return an array of greetings', ()=> {
            let greetArr = Person.greetAll([person, otherPerson]);
            let expectedResult = ['Tony says hello!', 'Teddy says hello!'];
            expect(greetArr).to.eql(expectedResult);
        })
    })



});
