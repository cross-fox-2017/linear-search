'use strict'

// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  //write your code here
  var count = 0;
  for (var i =0; i<values.length; i++) {
    if (values.indexOf(target) == -1) {
      count = -1
    } else if(target == values[i]){
      count+= 1
    }
  }
  return count;
}

let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1

// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  //write your code here
  var tempArr = [];
  for (var i = 0; i < values.length; i++) {
    if (target == values[i]) {
      tempArr.push(i)
    }
  }
  return tempArr
}

let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]
