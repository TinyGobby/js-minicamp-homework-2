//Do not change any of the function names

function getBiggest(x, y) {
  //x and y are integers.  Return the larger integer
  //if they are the same return either one
  if (x>y) {
    return x;
  } else if (y>x) {
    return y;
  } else {
    return x;
  }
}

function greeting(language) {
  if (language === 'German') {
    return 'Guten Tag!';
  } else if (language === 'English') {
    return 'Hello!';
  } else if (language === 'Spanish') {
    return 'Hola!';
  } else {
    return 'Hello!';
  }
  //return a greeting for three different languages:
  //language: 'German' -> 'Guten Tag!'
  //language: 'English' -> 'Hello!'
  //language: 'Spanish' -> 'Hola!'
  //if language is undefined return 'Hello!'
}

function isTenOrFive(num) {
  //return true if num is 10 or 5
  //otherwise return false
  var isitTrue = false;
  switch (num) {
    case 5:
    case 10:
    isitTrue = true;
    break;    
    default:
isitTrue = false;
break;
  }
  return isitTrue;
}

function isInRange(num) {
  //return true if num is less than 50 and greater than 20
if (num<50 && num>20) {
  return true;
} else {
  return false;
}
}

function isInteger(num) {
  //return true if num is an integer
  //0.8 -> false
  //1 -> true
  //-10 -> true
  //otherwise return false
  //hint: you can solve this using Math.floor
  if (num%1 === 0) {
    return true;
  } else {
    return false;
  }
}

function fizzBuzz(num) {
  //if num is divisible by 3 return 'fizz'
  //if num is divisible by 5 return 'buzz'
  //if num is divisible by 3 & 5 return 'fizzbuzz'
  //otherwise return num
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzbuzz';
  } else if (num % 3 === 0) {
    return 'fizz';
  } else if (num % 5 === 0) {
    return 'buzz';
  } else {
    return num;
  }
}

function isPrime(num) {
  //return true if num is prime.
  //otherwise return false
  //hint: a prime number is only evenly divisible by itself and 1
  //hint2: you can solve this using a for loop
  //note: 0 and 1 are NOT considered prime numbers
if (num===0 || num===1 || num%2===0 || num%3===0 || num%5===0 ) {
  return false;
} else return true;
}

function returnFirst(arr) {
  //return the first item from the array
  return arr[0];
}

function returnLast(arr) {
  //return the last item of the array
  var lastItem = arr.pop();
  return lastItem;
}

function getArrayLength(arr) {
  //return the length of the array
  return arr.length;
}

function incrementByOne(arr) {
  //arr is an array of integers  
  //increase each integer by one
  //return the array
  for (var h = 0; h<arr.length;  h++) {
    arr[h]++;
  }
  return arr;
}

function addItemToArray(arr, item) {
  //add the item to the end of the array
  //return the array
  arr.push(item);
  return arr;
}

function addItemToFront(arr, item) {
  //add the item to the front of the array
  //return the array
  //hint: use the array method .unshift
  arr.unshift(item);
  return arr;
}

function wordsToSentence(words) {
  //words is an array of strings
  //return a string that is all of the words concatenated together
  //spaces need to be between each word
  //example: ['Hello', 'world!'] -> 'Hello world!'
  var sentence = '';
  for (var i = 0; i < words.length; i++) {
sentence += words[i];
if (i<words.length-1) {
  sentence += ' ';
}
  }
  return sentence;
}

function contains(arr, item) {
  //check to see if item is inside of arr
  //return true if it is, otherwise return false
var x = 0;
for (var i = 0; i<arr.length; i++) {
  if (arr[i] === item) {
    x = 1;
  }
}
if (x === 1) {
  return true;
} else {
  return false;
}
}

function addNumbers(numbers) {
  //numbers is an array of integers.
  //add all of the integers and return the value
  var total = 0;
  for (var k = 0; k<numbers.length; k++) {
    total += numbers[k];
  }
  return total;
}

function averageTestScore(testScores) {
  //testScores is an array.  Iterate over testScores and compute the average.
  //return the average
  var average = 0;
  for (var l = 0; l<testScores.length; l++) {
      average += testScores[l];
  }
return average / testScores.length;
}

function largestNumber(numbers) {
  //numbers is an array of integers
  //return the largest integer
  var largestInteger = 0;
  for (var m = 0; m < numbers.length; m++){
    if (numbers[m] > largestInteger) {
      largestInteger = numbers[m];
    }
  }
  return largestInteger;
}

//Do not modify code below this line.
////--------------------------------

module.exports = {
  getBiggest: getBiggest,
  greeting: greeting,
  isTenOrFive: isTenOrFive,
  isInRange: isInRange,
  isInteger: isInteger,
  fizzBuzz: fizzBuzz,
  isPrime: isPrime,
  returnFirst: returnFirst,
  returnLast: returnLast,
  getArrayLength: getArrayLength,
  incrementByOne: incrementByOne,
  addItemToArray: addItemToArray,
  addItemToFront: addItemToFront,
  wordsToSentence: wordsToSentence,
  contains: contains,
  addNumbers: addNumbers,
  averageTestScore: averageTestScore,
  largestNumber: largestNumber
};
