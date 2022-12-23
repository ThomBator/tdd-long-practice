
const Triangle = require('./triangle');
class Isosceles extends Triangle {
    constructor(side1, side2, side3){
        super(side1, side2, side3);
        this.isValidTriangle = super.hasValidSideLengths();
    }


    getPerimeter() {
        return super.getPerimeter();
    }

    hasValidSideLengths() {
        return super.hasValidSideLengths();
    }

    isIsosceles(){
        if(this.hasValidSideLengths()) {
            return (
            this.side1 === this.side2
            ||
            this.side1 === this.side3
            ||
            this.side2 === this.side3

            )
        }
        else {
            return false;
        }

    }

    //should override Triangle class with same name
    validate() {
        if(this.isIsosceles()) {
            this.isValidIsosceles = true;
        }
        else {
            this.isValidIsosceles = false;
        }

    }

}

module.exports = Isosceles;
