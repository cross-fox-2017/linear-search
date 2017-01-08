// release 0..
function linearSearch(value,randomNum) {
  for (var i = 0; i < randomNum.length; i++) {
    if (randomNum[i] == value) {
      return i
    }
  }
  return -1
}

let random_numbers = [6,29,18,2,72,19,18,10,37]

console.log(linearSearch(18, random_numbers));
// 2
console.log(linearSearch(10, random_numbers));
// 7
console.log(linearSearch(9, random_numbers));
// -1


// release 1

function globalLinearSearch(letter, word) {
  let wordTemp = []
  for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      wordTemp.push(i)
    }
  }
  return wordTemp
}

let word_split = 'hakunamatata'.split('')

console.log(globalLinearSearch('a', word_split));
// [ 1, 5, 7, 9, 11 ]
