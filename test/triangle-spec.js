// Your code here
const chai = require('chai');
const expect = chai.expect;
const Isosceles = require('../problems/isosceles');
const Scalene = require('../problems/scalene');
const Triangle = require('../problems/triangle');

describe('functionality of Triangle class and its subclasses', ()=> {
    //Triangle Class testing starts here


    describe('functionality of Triangle class', ()=> {

        let validTriangle, validTriangle2,  invalidTriangle;
        beforeEach(()=> {
            validTriangle = new Triangle(4,4,7);
            validTriangle2 = new Triangle(8,8,14);

            invalidTriangle = new Triangle(4,1000, 35);
        });

        describe('constructor functionality', ()=> {
            it('should take in 3 side parameters and set them as instance properties', ()=> {
                expect(validTriangle.side1).to.equal(4);
                expect(validTriangle.side2).to.equal(4);
                expect(validTriangle.side3).to.equal(7);
            })
    });

        describe('getPerimter() method functionality', ()=> {

            it('should provide the perimiter of the triangle', ()=> {
            let perimeter = 15;
            expect(validTriangle.getPerimeter()).to.equal(15);
        });

    });


        describe('hasValidSideLengths() method functionality', ()=> {
            it('should only return true if triangle is valid', ()=> {

            expect(validTriangle.hasValidSideLengths()).to.equal(true);
            expect(invalidTriangle.hasValidSideLengths()).to.equal(false);
        });
    })

        describe('validate() method functionality', ()=> {
            it('should add isValid property value of true or false to the triangle object depending on validity', () => {
            validTriangle.validate();
            invalidTriangle.validate();

            expect(validTriangle.isValid).to.equal(true);
            expect(invalidTriangle.isValid).to.equal(false);
            });
        });

        describe('getValidTriangles static method functionality', ()=> {
            it('should return a list of all valid triangles',  ()=>{

            let triangleList = Triangle.getValidTriangles(validTriangle, validTriangle2, invalidTriangle);
            expect(triangleList).to.eql([validTriangle, validTriangle2]);

            });
        });
    });

//Scalene Class Testing Starts Here
    describe('functionality of Scalene class', ()=> {
        let validScalene, invalidScalene;
        beforeEach(()=> {
            validScalene = new Scalene(5,4,7);
            invalidScalene = new Scalene(1,1,70000);
        });

        describe('constructor functionality', ()=> {
            it('should create new objects with 3 sidelength properties and an isValidTriangle property', ()=> {
                expect(validScalene.side1).to.equal(5);
                expect(validScalene.side2).to.equal(4);
                expect(validScalene.side3).to.equal(7);
                expect(validScalene.isValidTriangle).to.equal(true);
                expect(invalidScalene.isValidTriangle).to.equal(false);


            });
        });

        describe('isScalene method functionality', ()=> {
            it('should return true if the triangle is a valid Scalene triangle, else false', ()=> {
                expect(validScalene.isScalene()).to.equal(true);
                expect(invalidScalene.isScalene()).to.equal(false);
            });
        });
        describe('validate() overidden method functionality', ()=> {
            it('should add isValidScalene property of true or false to Scalene depending on whether is valid or not', ()=> {
            validScalene.validate();
            invalidScalene.validate();

            expect(validScalene.isValidScalene).to.equal(true);
            expect(invalidScalene.isValidScalene).to.equal(false);
        });
    });



    });

//Isocoles class testing starts here
    describe('functionality of Iscoceles Class', ()=> {
        let validIsoceles, invalidIsoceles;
        beforeEach(()=> {
            validIsoceles = new Isosceles(4, 6, 6);
            invalidIsoceles = new Isosceles(5,7,1111);

        })
        describe('constructor method functionality', ()=> {
            it('should should create new objects with 3 sidelength properties and an isValidTriangle property', ()=> {
                expect(validIsoceles.side1).to.equal(4);
                expect(validIsoceles.side2).to.equal(6);
                expect(validIsoceles.side3).to.equal(6);
                expect(validIsoceles.isValidTriangle).to.equal(true);
                expect(invalidIsoceles.isValidTriangle).to.equal(false);

            });
        });
        describe('isIscosceles method functionality', ()=> {
            it('should return true only if Iscocles has two sides the same length and is valid Triangle', ()=>{

                expect(validIsoceles.isIsosceles()).to.equal(true);
                expect(invalidIsoceles.isIsosceles()).to.equal(false);

            });
        })

        describe('validate() overidden method functionality', ()=> {
            it('should add isValidScalene property of true or false to Scalene depending on whether is valid or not', ()=> {
            validIsoceles.validate();
            invalidIsoceles.validate();

            expect(validIsoceles.isValidIsosceles).to.equal(true);
            expect(invalidIsoceles.isValidIsosceles).to.equal(false);
        });
    });



    });

});
