# Day 8
## Arrow Functions, Promises, Recursion and an Intro to Debugging

---

# Class Goals

- Learn about how to rewrite functions as arrow functions
- Learn about Promises (you were using already using promises for the quote and weather app)
- Learn about what the heck currying is

---

## Arrow Functions

- New to ES6 is the arrow function
- As the name suggests, these are functions that are defined with a `=>`

---

```
let reflect = value => value;

// is basically

let reflect = function(value) {
  return value;
}
```

---

## WHY?

+ Can't change the binding of `this` (cover this next week)
+ No duplicate named parameters
+ Shorter to write as you can eliminate the `return` keyword in some instances
- No arguments object (when you need that you can just use a regular function)

---

```
// one argument
let val = sum1 => sum1 + sum2;

// two arguments
let val = (sum1, sum2) => sum1 + sum2;
```

---

```
// no arguments
let getName = () => 'Robert';
```

---

```
// if you need a more traditional function with more than one statement
let sum = (sum1, sum2) => {
  sum1 += 10;
  return sum1 + sum2;
}
```

---

```
// as a callback
let sorted = someArr.sort((a,b) => a > b)
```

---

## As an IIFE

```
let person = ((name) => {
    return {
      getName: function() {
        return name;
    }
  }
})('Nicholas');
```
---

```
// rewrite this function as an arrow function
// answer at the bottom of the notes

var data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
var flattenedData = data.reduce(function(acc, value) {
  return acc.concat(value);
}, []);
```

---

## Promises

---

- What is a callback?

---

## Inversion of Control

- is when you give control of your program to another process (an external library, an API call, etc)
- the problem is that what if that process fails?  now you've got a hung program
- so what if we could, instead of handing over complete control, we could write some code that would give us the capability to know when a task finishes, and then we could decide what to do next?
- wish no more, these are called `promises`

---

## What the Heck is going on in here?
## Or, Intro to Debugging

---

## Recursion

- What is recursion?
  - When a function calls itself until it doesn't
  - Simple

---

## Before

```
function factorialize(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
}
factorialize(5);
```
---


```
function factorial(x) {

  if (x === 0) {
    return 1;
  }
  return x * factorial(x-1);
}
console.log(factorial(5));
```

---

## Practice Time

- Write a program that computes the sum of an array of integers using recursion
- Hint: You may have to *pop* off a piece of the array everytime through

```
let array = [1,2,3,4,5,6] // should equal 21
```

---

# Exercise Time!

---

- Recursion Exercise
- A custom range function
- Write a JavaScript program to get the integers in range (x, y)

```
customRange(4, 12) // should return [5, 6, 7, 8, 9, 10, 11]
```

---

- Diff two arrays
- Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

```
diffArray([1,2,3,4,5],[1,2,3,4,5]) // should return []
diffArray([1,2,3], [1,2,3,4,5])  // should return [4, 5]
diffArray(['a','b', 'z'], ['b', 'c', 'd']) // should return ['z', 'c', 'd']
```

---

- Modals Everywhere
- Create a modal that is hidden until a user clicks the "open modal button"
- The user should be able to click the X to close the modal
- Bonus Points: You should add an overlay behind the modal so that a user can click it to close the modal
- I gave you some barebones styling so you'll have to add some in yourself (practice some CSS)
- http://codepen.io/robaguilera/pen/Opxvzz

---

## Answers

- Arrow Functions

```
let flattenedData = data.reduce(acc, value) => acc.concat(value));
```

---

- Recursion

```
let data = [1,2,3,4,5,6];

let sums = (data) => {
  if (data.length === 1) {
    return data[0];
  }
  return data.pop() + sums(data);
}

console.log(sums(data));
```
