# Class Goals

<<<<<<< HEAD
- [ ] Introduction to Data Structures
- [ ] Arrays
- [ ] More Built In Javascript Methods
- [ ] Code Blocks
- [ ] Control Operators
- [ ] Equality Operators
- [ ] Comparison Operators
- [ ] If/Else Statements
- [ ] The DOM

---

## Data Sets 

- To work with a chunk of digital data we need to find a way to represent and organize it in machine memory 
- For example, say we want to represent a collection of numbers: 2,3,5,7,9
- We could store it as a string `"2, 3, 5, 7, 9"` but that would make accessing this information a nightmare

---

- Fortunately Javascript gives a data type specfically for storing sequences of values

---

## Arrays
=======
---

- [ ] Data Structures
- [ ] Arrays
- [ ] Array Methods
- [ ] Equality Operators
- [ ] Comparison Operators
- [ ] If/else statements

---

## Review

- What are the 6 JavaScript values?

---  

## Data Structures 

- Are ways to organize your various values in a way that makes sense to your program
- One way to organize data values in JavaScript is through *arrays*

---

## Syntax
### Arrays
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- With JavaScript **array** variables, we can store several pieces of data in one place.
- You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:
`var sandwich = ["peanut butter", "jelly", "bread"]`

---

<<<<<<< HEAD
## Arrays
=======
## Syntax
### Arrays
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- arrays can contain any kind of value

*Instructions*
Create an array and try to cram as many different types of values in it

---

<<<<<<< HEAD
## Arrays
=======
## Syntax
### Arrays
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- You can also nest arrays within other arrays, like this:
`[["Bulls", 23], ["White Sox", 45]]`
- This is also called a Multi-dimensional Array.

*Instructions*
Create a nested array

---

<<<<<<< HEAD
## Arrays
=======
## Syntax
### Arrays
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- We can access the data inside arrays using indexes

- Array indexes are written in the same bracket notation that strings use, except that instead of specifying a character, they are specifying an entry in the array

- Watch the zero based indexing

---

```
var array = [1,2,3];
array[0]; // equals 1
var data = array[1];  // equals 2
```
*Instructions*

- Create a variable called myData and set it to equal the first value of myArray using bracket notation.
`var myArray = [1,2,3,4]`

---

<<<<<<< HEAD
## Arrays
=======
## Syntax
### Arrays
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- Unlike strings, the entries of arrays are mutable and can be changed freely.

```
var ourArray = [3,2,1];
ourArray[0] = 1; // equals [1,2,1]
```
*Instructions*
Modify the data stored at index 0 of ourArray to a value of 9.

---

<<<<<<< HEAD
## Arrays
=======
## Syntax
### Arrays
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- One way to think of a multi-dimensional array, is as an array of arrays. When you use brackets to access your array, the first set of brackets refers to the entries in the outer-most (the first level) array, and each additional pair of brackets refers to the next level of entries inside.

---

<<<<<<< HEAD
## Arrays
=======
## Syntax
### Arrays
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

```
var arr = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
```
---

*Instructions*

```
var myArray = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]];

//Using bracket notation select an element from myArray such that myData is equal to 8.

var myData;
```

---

```
var arr = [
    ['hello'],
    ['class'],
    ['how'],
    ['are'],
    ['you',['!']]
];
```
*Instructions*
- set the 'o' in 'hello' to a variable
- set the last 'l' in 'class' to a variable
- set the '!' to a variable

---

<<<<<<< HEAD
## A Quick Note on Properties

- So far we've used `.length` to get the length of a string and we're about to use a few more 
- These are called properties
- Almost all Javascript values have properties (except null and undefined)

---

## Properties

- The two most common ways to access properties is through the dot operator `.` or bracket notation `[]`
- For example, say we are trying to access a property called `x` on a value 
- We could write `value.x` or `value[x]`
  - Both of these examples access a property called "X" but not the same property

---

- `value.x`
  - the keyword following the dot must be a valid variable (.length)
- `value[x]`
  - the keyword inside the brackets are evaulated and then the result is used as the property name

---

`var myString = 'Hello World!';`

What is the value of `myString.length`;
What is the value of `myString[3]`

---

- What about `myString["length"]`?

---

## Arrays
=======
## Syntax
### Arrays
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- Now we are going to manipulate arrays
- An easy way to append data to the end of an array is via the push() function
- `.push()` takes one or more parameters and "pushes" them onto the end of the array
<<<<<<< HEAD
- Push is what we refer to as a *method*

---

## Arrays
=======

---

## Syntax
### Arrays
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

```
var arr = [1,2,3];
arr.push(4);
// arr is now [1,2,3,4]

```

---

<<<<<<< HEAD
## Arrays
=======
## Syntax
### Arrays
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

*Instructions*
- push `['dogs', 3]` onto the end of `myArray`;
```
var myArray = [["John", 23], ["cat", 2]];
```

---

<<<<<<< HEAD
## Arrays
=======
## Syntax
### Arrays
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- Another way to change the data in an array is with the .pop() function.

- `.pop()` is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable.

- Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.

---

<<<<<<< HEAD
## Arrays
=======
## Syntax
### Arrays
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

`var oneDown = [1, 4, 6].pop();`

- the variable oneDown now holds the value 6 and the array becomes [1, 4].

---

<<<<<<< HEAD
## Arrays
=======
## Syntax
### Arrays
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

*Instructions*

- pop off the last item from `myArray`

`var myArray = [["John", 23], ["cat", 2]];`

---

<<<<<<< HEAD
## Arrays
=======
## Syntax
### Arrays
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- pop() always removes the last element of an array. What if you want to remove the first?

- That's where `.shift()` comes in. It works just like .pop(), except it removes the first element instead of the last.

---

<<<<<<< HEAD
## Arrays
=======
## Syntax
### Arrays
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

*Instructions*

- shift off the first item from `myArray`

`var myArray = [["John", 23], ["cat", 2]];`

---

<<<<<<< HEAD
## Arrays
=======
## Syntax
### Arrays
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- Not only can you shift elements off of the beginning of an array, you can also unshift elements to the beginning of an array i.e. add elements in front of the array.

- `.unshift()` works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.

---

<<<<<<< HEAD
## Arrays
=======
## Syntax
### Arrays
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

*Instructions*

- Add ["Paul",35] to the beginning of the myArray variable using unshift().

`var myArray = [["John", 23], ["cat", 2]];`

---

## Time to work that array knowledge
<<<<<<< HEAD
![left](../../image/arrayquiz.gif)
=======
![left](../image/arrayquiz.gif)
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- Create a shopping list in the variable myList
  - The list should be a multi-dimensional array containing several sub-arrays
- The first element in each sub-array should contain a string with the name of the item
  - The second element should be a number representing the quantity
  - At least 5 sub-arrays

---

<<<<<<< HEAD
## Blocks
=======
## Syntax
### Blocks
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- When we need to group a series of statements together we use what's called a **block**

```
var amount = 99;
{
  amount *= 2;
  console.log(amount);
}
```

---

<<<<<<< HEAD
## Blocks
=======
## Syntax
### Blocks
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- That kind of standalone block is valid, but not commonly seen in Javascript, rather, it is used with what we call **control statements** which are statements that provide some kind of logic

---

<<<<<<< HEAD
## Conditionals
=======
## Syntax
### Conditionals
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- One type of control statements are **conditionals** aka decisions
- For example, we have the `if` block

---

```
var bank_balance = 100;

if (bank_balance < 10) {
  console.log('No can do chief!');
}
```

- Here we are checking if `bank_balance` is less than `10` log a message
- If that conditional evaluates to true, then the code inside that block will run
- Otherwise it gets skipped

---

- Why we do this is...

<<<<<<< HEAD
![](../../image/crossroad.jpg)

---

## Equality Operators
=======
![](../image/crossroad.jpg)

---

## Syntax
### Equality Operators
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- There are many **Comparison Operators** in JavaScript
  - Their job is to compare two values and kick back a boolean of either true or false
  - Most basic is `==`

---

```
var bal = 12;
if (bal == 12) {
  console.log('Hi');
}
```

---

<<<<<<< HEAD
## Equality Operators
=======
## Syntax
### Equality Operators
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- Strict equality (===) is the counterpart to the equality operator (==)
  - Unlike the equality operator, strict equality tests both the data type and value of the compared elements.

```
3 === 3   // true
3 === '3' // false
```

---

<<<<<<< HEAD
## Equality Operators
=======
## Syntax
### Equality Operators
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- The inequality operator (!=) is the opposite of the equality operator
  - It means "Not Equal" and returns false where equality would return true and vice versa
  - Like the equality operator, the inequality operator will convert data types of values while comparing

---

```
1 != 2      // true
1 != "1"    // false
1 != '1'    // false
1 != true   // false
0 != false  // false
```

---

<<<<<<< HEAD
## Equality Operators
=======
## Syntax
### Equality Operators
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- The strict inequality operator (!==) is the opposite of the strict equality operator
  - It means "Strictly Not Equal" and returns false where strict equality would return true and vice versa
  -   Strict inequality will not convert data types

---

```
3 !== 3   // false
3 !== '3' // true
4 !== 3   // true
```

---
<<<<<<< HEAD

## Comparison Operators
=======
## Syntax
### Comparison Operators
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

- Like the equality operator, greater than operator will convert data types of values while comparing.

---

*Instructions*

```
var bal = 100;

if (val) {  // val is greater than bal
  console.log("Over 100");
}

```

---

<<<<<<< HEAD
## Comparison Operators
=======
## Syntax
### Comparison Operators
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- The greater than or equal to operator (>=) compares the values of two numbers. If the number to the left is greater than or equal to the number to the right, it returns true. Otherwise, it returns false.

- Like the equality operator, greater than or equal to operator will convert data types while comparing.


---

*Instructions*

```
var bal = 100;
if (val) {  // val is greater than or equal to bal
  console.log("Over 100");
}

```

---

<<<<<<< HEAD
## Comparison Operators
=======
## Syntax
### Comparison Operators
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- The less than operator (<) compares the values of two numbers. If the number to the left is less than the number to the right, it returns true. Otherwise, it returns false. Like the equality operator, less than operator converts data types while comparing.

---
<<<<<<< HEAD
## Comparison Operators
=======
## Syntax
### Comparison Operators
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- The less than or equal to operator (<=) compares the values of two numbers. If the number to the left is less than or equal the number to the right, it returns true. If the number on the left is greater than the number on the right, it returns false. Like the equality operator, less than or equal to converts data types.

---

<<<<<<< HEAD
## Comparison Operators
=======
## Syntax
### Comparison Operators
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- Sometimes you will need to test more than one thing at a time. The logical and operator (&&) returns true if and only if the operands to the left and right of it are true.

- The same effect could be achieved by nesting an if statement inside another if

---

```
if (num > 5) {
  if (num < 10) {
    return "Yes";
  }
}
return "No";

if (num > 5 && num < 10) {
  return "Yes";
}
return "No";
```

---

*Instructions*

- combine the two if statements into one statement
  - val must be less than or equal to 15
  - val must be greater than 10

```
var val = 11;

<<<<<<< HEAD
if (val) {
  if (val) {
=======
if (val <= 15) {
  if (val > 10) {
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414
    console.log('yes');
  }
}
console.log('no');

```

---

<<<<<<< HEAD
## Comparison Operators
=======
## Syntax
### Comparison Operators
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- The logical or operator (||) returns true if either of the operands is true. Otherwise, it returns false.

---
- combine the two if statements into one statement
  - val must be less than 10 or greater than or equal to 20

```
if (val) {
  console.log('yes');
}

if (val) {
  console.log('yes');
}

```

---

<<<<<<< HEAD
## Else statements
=======
## Syntax
### Else statements
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- When a condition for an if statement is true, the block of code following it is executed. What about when that condition is false? With an else statement, an alternate block of code can be executed.

---

```
if (num > 10) {
  console.log("si");
} else {
  console.log("no");
}
```

---

*Instructions*
- Combine the second `if` statement into an `else` statement.

```
var result = "";
var val;

if (val > 5) {
  console.log("Bigger than 5");
}

<<<<<<< HEAD
if (val <= 5) {
=======
if (val < 5) {
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414
  console.log("5 or Smaller");
}
```

---

<<<<<<< HEAD
## Else If
=======
## Syntax
### Else If
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- If you have multiple conditions that need to be addressed, you can chain if statements together with else if statements

```
if (num > 15) {
  return "Bigger than 15";
} else if (num < 5) {
  return "Smaller than 5";
} else {
  return "Between 5 and 15";
}
```

---

*Instructions*

- Convert the logic into if/else statements

```
if (val > 10) {
  console.log("Greater than 10");
}

if (val < 5) {
  console.log("Smaller than 5");
}

console.log("Between 5 and 10");
```

---

<<<<<<< HEAD
## Else Statements
=======
## Syntax
### Else Statements
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- Order is important in if, else if statements.

- The loop is executed from top to bottom so you will want to be careful of what statement comes first.

---

<<<<<<< HEAD
## Else Statements
=======
## Syntax
### Else Statements
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- if/else statements can be chained together for complex logic.
- Here is **pseudocode** (code we write as a blueprint of what we want to do) of multiple chained if / else if statements:

---

```
if (the user has not entered a bal (undefined)) {
  statement1
} else if (the users bal is less than 3) {
  statement2
} else if (condition3) {
  statement3
} else {
  statement
}
```

---

*Instructions*

- Write a chained if/else statement that satisfies the following conditions

```
num < 5 - log "Tiny"
num > 5 but less than 10 - log "Small"
num > 10 < 20 - log "Medium"
num >= 20 - log "Large"
```

<<<<<<< HEAD
```## The DOM
=======
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

![](../../image/epic.gif)

## FizzBuzz

---

- Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

- When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

- (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, you’re now allowed to feel good about yourself.)

---

## Extra Credit

- Write a loop that makes seven calls to console.log to output the following triangle:

```
#
##
###
####
#####
######
#######
```

- It may be useful to know that you can find the length of a string by writing .length after it.

---

## The DOM
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- As a browser loads a web page, it creates a model of that page
- The model is called a DOM tree, and it is stored in the browser's memory

<<<<<<< HEAD
=======
---

>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414
```
<html>
<body>
   <div id="page">
       <h1 id="list-item">List</h1>
       <h2>Buy Groceries</h2>
   </div>
   <ul>
       <li class="overdue"><em>Tomatoes</em></li>
       <li class="overdue">Bread</li>
       <li>Honey</li>
       <li>Ham</li>
   </ul>

</body>
</html>
```
- This document above will stored as 4 different types of nodes

---

<<<<<<< HEAD
![](../image/dom.jpg)

---

## The Document Node
=======
![](../../image/dom.jpg)

---

# The Document Node
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- Every element is represented as it's own node
- At the top level is a document node, it represents the entire page
- When you access any element you are navigating to it via the document node

---

<<<<<<< HEAD
## Element Node
=======
# Element Node
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- These are the individual elements that make up a web page
- You query the DOM looking for an element and once you have it, you can then access it's text or attributes

---

<<<<<<< HEAD
## Attribute Nodes
=======
# Attribute Nodes
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- The opening tags of HTML elements can carry attributes (classes, ID's, form names, etc)
- These nodes are not children of the element, but are directly part of that element
- Once you access this element you can access it's attribute and either read it or alter it

---

<<<<<<< HEAD
## Text Nodes
=======
# Text Nodes
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- Once you have accessed an element, you can then reach the text within that element
- This is stored in a text node
- These are viewed as children of the *element node*
- If there is another child element inside the *text node* (i.e. the `<em>` tag above), it is **NOT** a child of the text node, but of the element node
- No further branches can come off a text node

---

<<<<<<< HEAD
## Accessing Elements

---

## Select an Individual Element Node
=======
# Accessing Elements

---

# Select an Individual Element Node
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- `getElementById()` get an element with this ID value
- `querySelector` get an element with this class value

---

<<<<<<< HEAD
## Multiple Elements
=======
# Multiple Elements
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- `getElementsByClassName()` get all elements with this class name
- `getElementsByTagName()`  get all elements with this tag name (li, div, a)
- `querySelectorAll()` get all elements with this class name and/or tag name ('li.hot')

---

<<<<<<< HEAD
## Traversing Between Element Nodes
=======
# Traversing Between Element Nodes
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414

- `parentNode` selects the parent of the current element node
- `previousSibling / nextSibling`
- `firstChild / lastChild`

<<<<<<< HEAD
---```
=======
---
>>>>>>> 1aee1a2d67e14bcb5227e45face5e50df6d67414
