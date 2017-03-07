## Day 3
### Let's Get Funky

![](../../image/funky.gif)

---

## Class Goals

- Learn what the heck are:
  - Functions
  - Parameters aka arguments
  - First Class Objects?
  - Return statements
  - The other type of loops (while, do while)
  - Switch statements

---

## Functions

- In Javascript we can divide our code into reusable parts called **functions**

```
function functionName() {
  console.log('hello mundo');
}
```

- You can **invoke** or **call** (means use) this function by using it's name followed by parentheses
`functionName();`

---

## Functions

- Each time a function is called, that's how many times it will run it's code
- It will not run unless you invoke it
  - Well that's not exactly true, you can make it invoke itself, but more on that later

*Instructions*

- Create a function that prints "Hello World" to the console
- Make sure you call it

---

## Parameters

- Functions wouldn't be too useful if we couldn't send them data
- *Parameters* are variables that act as placeholders for the values that are passed to the function when called

```
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
```

---

## Arguments

- *Arguments* are values that are *passed* into the function when it's called

`ourFunctionWithArgs(10,5);`

---

*Instructions*

- Create a function that takes two arguments, multiplies them, and logs the result out to the console

---

## Functions

- In JavaScript, *Scope* refers to the visibility of variables. Variables which are defined outside of a function block have *Global* scope. This means, they can be seen everywhere in your JavaScript code.

```
var foo = 'foo';
function sayFoo() {
  console.log(foo);
}
```

---

*Instructions*

- Create a variable called `bar` outside of a function
- Log that variable to the console inside a function called `sayBar`

---

## Functions

- Try this in your editor

```
function sayBar() {
  var bar = 'bar';
  console.log('inside', bar);
}
sayBar();
console.log('outside', bar);
```

---

- It is possible to have both local and global variables with the same name
- When you do this, the local variable takes precedence over the global variable

```
var bar = 'bar';

function sayBar() {
  var bar = 'foo';
  console.log('inside', bar);
}

sayBar();
console.log('outside', bar);

```

---

## Declaring Functions

- There are several ways to declare functions
- This is a **function declaration**

```
function declaration() {// code //}
```

- This creates a function that you have to call later by name
- There's also a tricky thing called **hoisting** that we'll get into later

---

## Declaring Functions

- If you put a function where an interpreter would expect to see an expression, you've created a **function expression**

```
var area = function() {// code //}
```

- This is what's called an **anonymous expression** because the function has no name
- Issue can be that it can be hard to debug

```
var area = function area() {// code //}
```

---
## Functions

- You can also declare functions inside each other

```
function foo() {
  var foo = 'foo';
  function sayFoo() {
    console.log(foo);
  }
  sayFoo();
}
foo();
```

---

## Lexical Scope

- *Lexical Scope* is the scope of the variable based on it's location within the source code

```
var foo = 'foo';
function levelOne() {
  var bar = 'bar';
  function levelTwo() {
    var fooBar = 'fooBar';
  }
}
```

---

*Instructions*

Fix the broken function on the next page so that each log statement works

---

```
function fooNess() {
  var bar = "bar";
  console.log(bar);
  function theBar() {
    var fooBar = "foobar";
    console.log(fooBar);
  }
}
function fooBarNess() {
  var foo = "foo";
  console.log(foo);
}
```

---

## First Class Objects

- In Javascript, functions are treated as *First Class Objects*
- This means not only can they modify code but can also:
  - have properties
  - store the function in a variable
  - pass a function as a parameter to another function
  - return a function from a function

---

- In English, one way to think of it is that functions can not only do a job, but they can be a value as well

---

## Returning a Value

- We can pass values into a function with arguments
- You can use a **return** statement to send a value back out of a function

```
function plusThree(num) {
  return num + 3;
}
var answer = plusThree(5); // 8

```

---

*Instructions*

- Create a function called `area`
- This function needs to take the width and height of an element and find the area
  - "width x height"
- Return the value

---

## Assignments and Returned Values

- We can also take the return value of a function and store it to a variable

```
function timesMe(num1, num2) {
  return num1 * num2;
}
var product = timesMe(5, 7);
```

---

*Instructions*

- Call the processArg with an argument of 7 and assign it to the variable `processed`

```
var processed = 0;

function processArg(num) {
  return (num + 3) / 5;
}
```

---


## Return Statements

- You can also return multiple values with an array

```
function getSize(width, height, depth) {
  var area = width * height;
  var volume = width * height * depth;
  var sizes = [area, volume];
  return sizes;
}
```

---

## Return Statements

- When the JS engine encounters a `return` statement, it will return that value and stop running that function

```
function stopEarly() {
  console.log('Hello ');
  return;
  console.log('Did I run?');
}
stopEarly();
```

---

*Instructions*

- Modify the function `abTest` so that if `a` or `b` are less than `0` the function will terminate with a value of `undefined`

```
function abTest(a, b) {
  // Only change code below this line

  // Only change code above this line
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);
```

---
## Return Statements with Booleans

- What does a **strict comparison** return?

```
if (a === b) {
  // code
}
```

---

## Return Statements with Booleans

- A common **anti-pattern** (a commonly occurring solution to a problem that is a bad practice), is to use an `if/else` statement to do a comparison and then return `true/false`

```
function isEqual(a,b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
```
- How can we shorten this?

---

*Instructions*

- Shorten that if/else statement (hint: you should only have one line of code in that function)

---

## For Loop

- Let's review what a for loop is

---

## While Loops

- A `while` statement is another type of loop
- It executes a statement while the test condition evaluates to true

```
var n = 0;
var x = 0;
while (n < 3) {
  n++;
  x += n;
}
```

---

*instructions*

- Initialize a variable called `x`
- Create a while loop that "while" x is less than 10, you increment `x` by one and log x to the console

---

## Do While Loops

- Similar to a `while` loop except that a `do...while` will always run once even if the conditions are false

```
var n = 0;
var x = 0;
do {
  n++;
  x += n;
} while (n < 3)

```

---

- `for loops` are great when you need to run a code a specific number of times and you know how many times it needs to run
- `while loops` are useful when you don't know how many times a code should run (so when the condition is something other than a counter)
- `do...while` I have no idea when a do while loop is handy, never used one

---

## Switch Statements

- If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which defines various possible values. Statements are executed from the first matched case value until a break is encountered

---

- Here is a pseudocode example:

```
switch (num) {
  case value1:
    statement1;
    break;
  case value2:
    statement2;
    break;
    ...
  case valueN
      statementN;
      break;
}
```

---

## Switch Statements

- Case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed

---

*Instructions*
- Write a switch statement which tests a value and sets an answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"

```
function caseInSwitch(val) {
  switch(val) {
    // if value === 1 return 'alpha'
    // if value ==== 2 return 'beta'
  }
}
caseInSwitch(1);
```

---

## Default statements

- You can set a `default` statement that will catch any value that may not meet the logic specified

---

```
switch (num) {
  case value1:
    statement1;
    break;
  default:
    defaultStatement;
}
```

---

*Instructions*
- Write a switch statement to set answer for the following conditions:
"a" - "apple"
"b" - "bird"
"c" - "cat"
default - "stuff"

---

## Switch Statements with Identical Options

```
case 1:
case 2:
case 3:
result = "1, 2, or 3";
break;
case 4:
result = "4 alone";
}
```

---

*Instructions*

- Write a switch statement to set answer for the following ranges:
1-3 - "Low"
4-6 - "Mid"
7-9 - "High"

---

# Switch Statements

- If you have many options to choose from, a switch statement can be easier to write than many chained `if/else` statements

---

*Instructions*

- Convert the following into a switch statement

```
if (val === "bob") {
  answer = "Marley";
} else if (val === "jimi") {
  answer = "Hendrix";
} else if (val === "jim") {
  answer = "Morrison";
} else if (val === "janis") {
  answer = "Joplin";
} else if (val === 7) {
  answer = "Huh?";
}
```

---

- Return the remaining elements of an array after removing `n` elements from the head
- Head means beginning

- `removeElement([1, 2, 3], 2)` should return `[3]`
- `removeElement([1, 2, 3], 3)` should return `[]`
- `removeElement([1, 2, 3], 0)` should return `[1, 2, 3]`

---

- Here's another job interview question
- Factoralize a number
- A factorial is the product of all positive integers less than or equal to a number
- Factorials are often expressed as `n!` for shorthand notation
- For example `5! = 1 * 2 * 3 * 4 * 5` this will equal `120`
- Write a function that takes any number and returns the factorial of that number



