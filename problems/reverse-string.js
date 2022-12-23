

function reverseString(string) {
  // Your code here
  if(!(typeof string === 'string')) {
    throw new TypeError();
  }
  else {
    let strArr = string.split('');
    strArr.reverse();
    let reversedStr = strArr.join('');
    return reversedStr;
  }
};


console.log(reverseString('Hello'));

module.exports = reverseString;
