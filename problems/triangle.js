// Your code here

class Triangle {
    constructor(side1, side2, side3) {
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }

    getPerimeter() {
        return this.side1 + this.side2 + this.side3;
    }

    hasValidSideLengths() {
        return (
            this.side1 + this.side2 > this.side3
            &&
            this.side2 + this.side3 > this.side1
            &&
            this.side1 + this.side3 > this.side2
        );
    }

    validate() {
        if(this.hasValidSideLengths()) {
            this.isValid = true;
            return true;
        }
        else {
            this.isValid = false;
            return false;
        }
    }

    static getValidTriangles(...triangles) {
        let validTriangles = [];
        for(let triangle of triangles) {

            if(triangle.validate()) {
                validTriangles.push(triangle);
            }
        }

        return validTriangles;
    }
}


module.exports = Triangle;
