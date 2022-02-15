/* 
ES5 Map Callback

function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}
 */

// ES2015 Arrow Functions Shorthand


/*
WORK
function double(arr) {
    return arr.map(val=> {
      return val * 2;
    });
  }

function double(arr) {
    return arr.map(val=> val * 2);
} */

//SOLUTION
const double = arr => arr.map(val => val * 2);

/* Write an ES2015 Version

Refactor the following function to use arrow functions:

Replace ALL functions with arrow functions:

function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}
*/

/* 
WORK
function squareAndFindEvens(numbers){
    var squares = numbers.map(num => num ** 2);
    var evens = squares.filter(square => square % 2 === 0);
    return evens;
}

const squareAndFindEvens = numbers =>{ 
    squares = numbers.map(num => num ** 2);
    var evens = squares.filter(square => square % 2 === 0);
    return evens;
}

const squareAndFindEvens = numbers =>{ 
    squares = numbers.map(num => num ** 2);
    var evens = squares.filter(square => square % 2 === 0);
    return evens;

const squareAndFindEvens = numbers =>{ 
    evens = numbers.map(num => num ** 2).filter(square => square % 2 === 0);
    return evens;
}
*/

//SOLUTION
const squareAndFindEvens = numbers => numbers.map(num => num ** 2).filter(square => square % 2 === 0);
