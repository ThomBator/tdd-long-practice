const Triangle = require('./triangle');

class Scalene extends Triangle {
    constructor(side1, side2, side3) {
        super(side1, side2, side3);
        this.isValidTriangle = super.hasValidSideLengths();




    }

    getPerimeter() {
        return super.getPerimeter();
    }

    hasValidSideLengths() {
        return super.hasValidSideLengths();
    }

    isScalene(){
        let isTriangle = super.hasValidSideLengths();
        if(isTriangle) {
            return (
                this.side1 !== this.side2
                &&
                this.side1 !== this.side3
                &&
                this.side2 !== this.side3
                )
        }
        else {
            return false;
        }

    }

    //should override Triangle class with same name
    validate() {

        if(this.isScalene()) {
            this.isValidScalene = true;
        }
        else {
            this.isValidScalene = false;
        }

    }



}


module.exports = Scalene;
