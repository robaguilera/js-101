# [fit] I. Intro to Programming

---

## SWBAT (Students Will Be Able To)

- Grasp the basic concepts of what programming is
- Understand what Javascript is used for
- Grasp and practice the basics of Javascript syntax
  - variables, comments, assignments, operators, control statements
- Complete a variety of assessments and exercises

---

## Basics of programming

- We will be covering in this section a very high level overview of what programming is
- From here on out, any terminology will be **bolded**
- Code will be displayed in `monospace`.

---

## Code

- **Source Code** or just **Code**, is a set of special instructions a computer reads in order to know what tasks to perform
- Usually, this code is saved in a file, although for javascript we can also type it into the browser for either practice or debugging purposes (more on this later)
- **Computer Language** or **Syntax**, are the rules for the valid format of this language

---

This is English.

lkjoer/I#(?)

that is not --^

---

`var student = 'Tom';` is valid Javascript

`varr student 'Tom';` is not and will result in the computer throwing it's hands up in the air

---

## Expressions

- An **Expression** is any reference to a value, or a set of value(s) and/or value(s) combined with operators
- For example:
  - `a = b * 2;`
  - `a` and `b` are called **variable expression**
      - means retrieve it's current value

---

## Expressions

- For example:
  - `a = b * 2;`
  - `2` is a **literal value expression**
      - it is named as such because it is not stored inside of a variable
  - `b * 2` is an **arithmetic expression**
  - `a = b * 2` is an **assignment expression**

---

## Statements

- In a computer language, a group of words, numbers, and operators that performs a specific task is called a **Statement**
- It is a collection of expressions
- Example
  - `a = 4 * 2;`
  - `a` and `b` are called a **variable**
      - boxes that hold values
  - `=` and `*` are operators
      - they perform actions
- Most statements in Javascript conclude with a semicolon

---

## Statements

- Example
  - `a = 4 * 2;`
  - `=` and `*` are operators
      - they perform actions
- Most statements in Javascript conclude with a semicolon

---

## Executing a Program

- So how does the computer interpret all this?
- The statements in the above examples are helpful for us to read, but the computer can't actually read that as written
- To be "executed" a special utility on the computer is used to translate the code into **machine language** the computer can understand
    - One such utility is an "compiler" that translates Javascript into machine-readable code

---

![](../image/assembly.png)

---

> Javascript is the duct tape of the internet
-- Charlie Campbell

---

# [fit] II. Javascript

---

Let's try a bit of code before we continue

- Open your favorite browser (not IE)
- Open the console on any page
    - either in "settings" or try "cmd/ctrl + opt/alt + j"

---

## Javascript

- The history of [Javascript](https://embedwistia-a.akamaihd.net/deliveries/02b2a82f133a6d2c55210097cfb6e0daa04cf380/file.mp4)
- How HTML, CSS, and Javascript work together
- How you add it to the browser
    - take a look at adding-js.html

---

## Syntax
### Comments

- There are two ways to declare comments

```
// This is an in-line comment

/* This is a multi-line
   comment */
```

---

## Syntax
### Variables

- **Variables** allow computers to store and manipulate data dynamically.  When you create a variable you are essentially creating a label for the computer to use as an identifier for that data point.
`var userName`

*Instructions*
Initialize a variable.

---

## Syntax
### Assignment Operator

- You can also store values to a variable by with the **assignment** operator `=`
- Everything to the right of the `=` is evaluated first

`var userName = 'Micky';`
`var x = 12 + 1;`
`var isTrue = true;`

*Instructions*
Create a variable that holds your first name.

---

- About naming things....
  - Be wary of reserved keywords
  - Pick a name that makes sense

---

## Syntax
### Warning!
![left](../image/gotcha.gif)

- You can override variables  
- This is know as reassigning or compound assignment

```
var a = 12;
a = 16;
// can also reassign to it's original value
a = a + 12;
```


---

## Syntax
### Value Types

- Let's talk about Javascript's 6 different value types
  - number
  - string
  - null
  - undefined
  - boolean
  - object

---

## Syntax
### Value Types

-  **Value Types** are values that can be assigned to a variable

```
var a = 12 // number
var myDog = 'Osito' // string
var isTrue = true // boolean
var isFalse = false // boolean
var no = null
var who = undefined

```

---

## Syntax
### Arithmetic

- Addition
`var adding = 5 + 10;`
`console.log(adding) // 15`

- `-` subtract
- `*` multiply
- `/` divide

---

*Instructions*

- Practice adding, subtracting, and dividing numbers.

---

## Syntax
### Arithmetic

- You can also **increment** numbers with the `++` operator

```
var a = 12;
a++; //13
a = a + 1; //14
```

- How would you **decrement** a number?

---

*Instructions*

- Practice incrementing and decrementing a number

---

## Syntax
### Arithmetic

- We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as **floating point** numbers or floats.

`var myDecimal = 7.9;`

---

## Syntax
### Arithmetic

- The **remainder** operator `%` gives the remainder of the division of two numbers.

```
var x = 12 % 6;
console.log(x) // 0
var y = 10 % 4;
console.log(y) // 2
```
- In mathematics, a number can be checked even or odd by checking the remainder of the division of the number by 2.

---

*Instructions*

- Check whether `19` is odd
- Check whether `12` is even

---

## Syntax
### Compound Assignment

- Sometimes you'll need to use assignments to modify the contents of a variable
`var myVar = 1;`
`myVar = myVar + 5; //6 `
- We can do this in one step
`myVar += 5; //6`

---

*Instructions*

- Initialize a variable with a numerical value
- Use compound assignment to add any number to the original value

---
## Syntax
### Compound Assignment

- We can do the same with all other forms of operators

*Instructions*

- Do the same as the previous exercise but for `-`, `*`, `/`.

---

## Quiz!

![left](../image/quiz.gif)

- Every so often I will present you with an exercise to test what we've learned so far
- You will have about 5 to 20 mins depending on the difficulty of the quiz
- Please try these exercises for at least 5 to 10 mins before asking for help

---

- The algorithm to convert Celsius to Fahrenheit:
  - `fahrenheit` equals `celsius` times `9/5` plus `32`.
- Plug the `function` on the next page into our online repl and modify the code in-between the lines.

---

```
function convertToF(celsius) {
  var fahrenheit;
  // Only change code below this line

  // Only change code above this line
  return fahrenheit;
}

convertToF(30);

```

---

## Syntax
### Strings

`var myName = "Robert";`
- `myName` is a **string literal**
- it is a series of 0 or more characters inclosed in either single or double quotes
*Instructions*
- create two variables that hold your first and last name

---

## Syntax
### Strings

- When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: " or ' inside of your string?

- In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash `\` in front of the quote.


---

## Syntax
### Strings

```
var sampleStr = "Jim said, \"I could sure go for a cold one right now\".";
```
*Instructions*

- Use backslashes to assign a string to a variable so that if you were to print it to the console, you would see:

I am a "double quoted" string inside "double quotes".

---

## Syntax
### Strings

- You can also use single quotes inside a string literal
`var myStr = "Mark yelled 'Hello world' at the top of his lungs.";`

*Instructions*

- Change the provided string from double to single quotes and remove the escaping.

---

`var myStr = "<a href=\"http://www.example.com\" target=\"_blank\">Link</a>";`

---

## Answer

`var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';`

---

## Syntax
### Strings

- **Concatenation** is when you add strings together
```
var twoGether = "I am first" + "I am second";
```
*Instructions*
- create two variables (firstName and lastName)
- add them together in a third variable (fullName) to create your name

---

## Syntax
### Strings

- You can also use the compound assignment operator to concatenate strings

*Instructions*
- same exercise as before, but with the compound assignment operator.

---

## Syntax
### Strings

- You can combine strings and variables
*Instructions*
- Set a variable to a string equal to your name and build `myMsg` with your variable between the strings
- "Hi!  My name is  " + " and I am learning Javascript"!"

---

```
var myName = "Robert Aguilera";
var myStr = "Hi!  My name is " + myName + " and I am learning Javascript!";
```

---
## Syntax
### Strings

var someAdj = "cray cray";
var myStr = "Learning to code is ";

*Instructions*

- concat those two strings using compound assignment operators

---

## Syntax
### Strings

- Sometimes you'll need to know the length of a string
- Here you can use the **property** called `length`
  - This can be used on any strings to find the number of characters in that string

```
var x = 'four';
console.log(x.length); // 4
```

---

## Syntax
### Strings

- When you need to access a specific character in a string
  - `var myStr = 'Hello';`
  - You need to access it's **index** aka the position in which it sits
  - This is a numerical value  

---

## Syntax
### Strings (Index)

- We can access this position using *Bracket Notation*
```
var firstName = "Robert";
console.log(firstName[0]);
```

---

- Javascript and many other languages use what's called *Zero based* indexing
  - meaning they don't start counting at 1, but at 0


*Instructions*

Use bracket notation to find the first character in the firstName variable and assign it to firstLetterOfFirstName.
`var firstName = 'Jimmy';`

---

## Syntax
### Strings

- Often you'll hear whether something is *mutable* or *immutable**
- Strings are immutable
  - can't change em once they're created

---

## Strings

```
var myStr = "Ricky";
myStr[0] = "J";
console.log(myStr);
```

*Instructions*
- Fix this variable
`var misSpelt = 'Brokan';`

---

## Syntax
### Strings

- You can also assign single letters to other variables using bracket notation

*Instructions*
 - Set the third letter of `var myStr = 'Donald';` to a variable called `var thirdLetter;`

---

## Syntax
### Strings

- Let's say you have a word which is dynamic (you don't know what it is) and you need to access the last letter
`var firstName = 'Robbie';`
`var last = firstName[firstName.length - 1];`

---

## Pop Quiz!
![left](../image/doug.gif)

- We will now use our knowledge of strings to build a "Mad Libs" style word game.

- You will need to use string operators to build a new string, result, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb.

- The output should be a complete sentence.

---

```
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line

  // Your code above this line
  return result;
}

wordBlanks("dog", "big", "ran", "quickly");
```

---