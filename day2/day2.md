## Day 2
### Let's Get Funky

![](../image/funky.gif)

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

## Functions

- Functions wouldn't be too useful if we couldn't send them data
- *Parameters* are variables that act as placeholders for the values that are passed to the function when called
```
function ourFunctionWithArgs(a, b) {
  console.log(a - b);
}
```
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
  console.log(bar);
}
console.log(bar);
```

---

- It is possible to have both local and global variables with the same name
- When you do this, the local variable takes precedence over the global variable

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
  console.log(foo);
  function theBar() {
    var fooBar = "foobar";
    console.log(bar);
  }
}
function fooBarNess() {
  var foo = "foo";
  console.log(fooBar);
}
```

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

![left](../image/arrayquiz.gif)

- In Computer Science a queue is an abstract Data Structure where items are kept in order
- In the function on the next page, create a function that:
  - takes and an array and a number
  - it adds the number to the array
  - removes the first number
  - returns the result

---

// add function below here

// Test Setup
var testArr = [1,2,3,4,5];
var testNum = 6;

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
  case valueN:
    statementN;
    break;
}
```

---

## Switch Statements

- Case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed

---

*Instructions*
- Write a switch statement which tests val and sets answer for the following conditions:
1 - "alpha"
2 - "beta"
3 - "gamma"
4 - "delta"

```
function caseInSwitch(val) {
  var answer = "";
  return answer;  
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

## For Loops

- You can run the same code multiple times by using a loop
- The most common type of JavaScript loop is called a "for loop" because it runs "for" a specific number of times
- For loops are declared with three optional expressions separated by semicolons:

```
for ([initialization]; [condition]; [final-expression])
```

---

## For Loops

- The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable
- The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. When condition is false at the start of the iteration, the loop will stop executing

---

- The final-expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to increment or decrement your loop counter
- In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final-expression

```
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

---

![](../image/epic.gif)

## FizzBuzz

---

- Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

- When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

- (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, you’re now allowed to feel good about yourself.)

---
