'use strict'
// Release 0
console.log("Linear Search")
let linearSearch = (target, values) => {
  let result = 0;
  if(values.indexOf(target) !== -1){
    result = values.indexOf(target);
    return values[result + 1];
  }
  return values.indexOf(target);
}
let random_numbers = [ 6, 29, 18, 2, 72, 19, 18, 10, 37 ];
console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(9, random_numbers));
// -1
// Release 1
console.log("Global Linear Search")
let globalLinearSearch = (target, values) => {
  let arr = [];
  for(let i = 0; i < values.length; i++){
    if(target === values[i]){
        arr.push(i);
    }
  }
  return arr;
}
let banana_arr = "banana".split("");
// ["b", "a", "n", "a", "n", "a"]
console.log(globalLinearSearch("a", banana_arr));
// [ 1, 3, 5 ]
