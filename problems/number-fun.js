const { returns } = require("chai-spies");

function returnsThree() {
  return 3;
}

function reciprocal(n) {
  if(n < 1 || n > 1000000) {
    throw new TypeError('Please enter a value between 1 and 1,000,000 inclusive');
  }
  else {
    return 1/n;
  }

}

console.log(returnsThree());

module.exports = {
  returnsThree,
  reciprocal
};
