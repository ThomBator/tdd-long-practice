function myMap(array, callback) {
  let newArr = [];
  for(let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }

  return newArr;

}



module.exports = myMap;
