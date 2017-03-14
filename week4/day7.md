# Scope and Closures

---

## What is Scope

---

### To Compile or Not Compile...
- Javascript contrary to most beliefs is a compiled language
- In traditionally compiled language the process, typically is as follows:
    - `tokenizing/lexing` : break up a a string of characters into meaningful chunks, called tokens

---

- Example: `var a = 2`
    - The program would more than likely be broken up into `var`, `a`, `=`, `2`
    - lexing determines if `a` should be *stateless* or *stateful*
    - `parsing` takes a stream `array` of tokens and turns into a tree of nested elements which represents the grammatical structure of the program
        - This is called an "AST (Abstract Syntax Tree)"

---

- `code-generation` - is the process of taking the AST and turning it into executable code
- Javascript does all these steps (a lot more), however, the difference between Javascript and other compiled languages is that Javascript doesn't have the luxury of time to compile.  The code is compiled usually milliseconds before the code runs

---

# Understanding Scope

---

- Scope is a conversation between three different parts of the whole Javascript Engine
    - Engine: responsible for start-to-finish compilation and execution of our JS program
    - Compiler: handles the work of parsing and code-generation (making the code executable)
    - Scope: collects a list of all the declared identifiers and enforces a strict rule of what is available and where

---

- How these three components work in terms of breaking down the statement `var a = 2` is as follows:
    1. The **compiler** will ask **scope** if a variable `a` exists in this particular scope declaration
        - if so it'll ignore the declaration and move on
        - otherwise it'll create a new variable declaration

---

2. The **compiler** will then produce the code for the **Engine** to later execute, to handle the `a = 2` assignment
    - the **Engine** will ask **Scope** if there is a variable declared in that current scope, otherwise it will move up the scope levels until it hits the global scope
    - if the engine finds the variable, it will assign the value, otherwise it will raise an error

---

- Summary:
    - **Compiler** asks **scope** if the variable exists, it will then set up the code to be executed
    - Once the **engine** is ready to execute, it will ask **scope** to traverse the scope chains looking for the variable to assign the value to, if not found it raises an error

---

# Compiler Speak

---

- *LHS* - Left Hand Side Assignment Operation
    - when the variable appears on the left Side
        - `var a = 2`
    - when we are trying to assign a value to the variable

---

- *RHS* - Right Hand Side Assignment Operation
    - not really RHS more like when not LHS
    - more like "go get the value"
    - `console.log(a)`
        - retrieve the value of `a` and display it in the console

---

- Summary:
    - LHS means assign this value to:
    - RHS means find the source/value of:

---

# Nested Scope
- The engine will traverse up the nested scope chain until it either finds the variable or throws up an error if it reaches the global scope without finding the variable

---

# Lexical Scope

# What is Lexical Scope

- Lexical Scope is determined by where the author declared the variable and is set in stone by the time the compiler processes the code

---

- Some notes:
    - lexical scope works up not down
        - bubbles up the scopes till it reaches the declaration or the global scope
    - it stops looking once it finds an assignment
    - you can cheat lexical scope using `eval` and `with` but it is not worth the trouble due to the performance hit they inflict

---

# Function vs Block Scope

---

- As discussed before
    - we have different scope environments that hold variables
    - lexical scope is determined by where you declare your variables
    - let's discuss what can create these levels of scopes and why

---

## Function Scopes

- First up, functions can create scope
    ```
    function foo(a) {
        var b = 2;
    }
    console.log(b) // reference error
    ```

---

- Traditionally, you think of functions as these mechanisms for manipulating code or performing jobs
- However, you can use a function to "hide" code
- The practical result is that all the new variables and code are tied to the scope that encloses rather, rather than any of the previously enclosing scope

---

### So, why?
1. "Principle of Least Privilege"
    - You should only expose what is minimally necessary and hide everything

---

```
function doSomething(a) {
    b = a + doSomethingElse( a * 2 );

    console.log( b * 3 );
}

function doSomethingElse(a) {
    return a - 1;
}

var b;

doSomething( 2 ); // 15
```

---

- The problems with this above snippet are:
    - The variable `b` and `doSomethingElse` are likely private implementations of `doSomething`
        - By having them exposed to the enclosing scope, you risk improper use of them and their usage may violate pre-condition assumptions of `doSomething()`
- The proper way to "hide" scope
- The end result will be the same, but the private details will be hidden away thus less prone to bugs

---

```
function doSomething(a) {
    function doSomethingElse(a) {
        return a - 1;
    }
    var b;
    b = a + doSomethingElse( a * 2 );
    console.log( b * 3 );
}
doSomething( 2 ); // 15
```

---

2. Collision Avoidance
    - Prevent unintended collision between identifiers with the same name but different values and/or uses

---

- Ways to prevent:
    1. it is to use either functions to hide away the variable
    2. Global Namespacing

```
var MyLibrary = {
    data: 'stuff',
    doSomething: function () {
        //....
    },
    somethingElse: function () {
        //....
    }
}
var appData = MyLibrary.data;
var appFk = MyLibrary.doSomething();
```

---

3. Module Management
    - Loading files through the AMD or commonjs pattern

---

4. Functions as scopes
    - You still pollute the global scope with when using functions as scope so you can get around this with either:
        - anonymous functions
        - IIFEs

---

- The IIFE
    - The IIFE hides away a function by turning a function declaration into a function expression

```
(function foo() {
  console.log('hi')
})();
foo(); // Reference Error
```

---

- The first of parenthesis makes the function an expression, while the next pair executes it immediately
- This allows the function to run automatically but will further encapsulate all the detail by hiding away even the name of the function itself
- You can also pass in a parameter, in this case the window object to further define what is global and what isn't

---

```
var a = 2;

(function IIFE( global ){

    var a = 3;
    console.log( a ); // 3
    console.log( global.a ); // 2

})( window );

console.log( a ); // 2
```

---

4. Block Scope
    - You can use use a block of code as scope
    ```
    for (...) {
        //....scoped
    }
    ```
    - declare variables as close as possible, as local as possible, to the process that is going to use them

---

- However, Javascript does not have a mechanism for block scoping when using the keyword `var`
- There are mechanisms to add this feature in

---

- `try/catch`
```
try {
    undefined();
}
catch (err){
    // err is block scoped
    console.log(err)
}
```

---

- `let`
    - will block scope variables to the current scope
    - they will not hoist so keep that in mind
- `const`
    - block scoped and immutable

---

# Hoisting

---

- Javascript doesn't run line by line as you might assume
- While it's sort of true, JS actually processes variables and functions first, so it actually leaps from line to line

---

```
a = 2;
var a;
console.log(a) // 2
console.log(b) // undefined
var b = 2;
```

---

- The variables are *hoisted* to the top followed by functions
- Going back to the conversation the compiler has with scope and engine, when we see `var a = 2` we are tempted to think of that as one statement.  However, JS sees it as two:
    - `var a` - during compile phase
    - `a = 2` - during execution phase

---

- **NOTE**
    - only declarations themselves are hoisted, while any assignments or any other executable logic is left in place
    - hoisting is done per scope level
    - function declarations are hoisted but not function expressions
    - functions are hoisted first, then variables

---

- **NOTE**
    - duplicate variables are ignored by the interpreter so it is a really bad idea to use duplicate definitions
    - Function declarations in blocks hoist to the enclosing scope, rather than being conditional as something like this would imply

---

```
foo(); // "b"
var a = true;
if (a) {
   function foo() { console.log( "a" ); }
}
else {
   function foo() { console.log( "b" ); }
}
```

---

## TL;DR

- Hoisting is the mechanism JS uses to move variables and functions to the top of it's enclosing scope
- It is done per scope level
- Hoists functions than variables
- assignments are left in their spot so be wary of that
- function declarations are not hoisted to the top of it's enclosing scope when declared inside of blocks so be wary
- duplicate definitions are ignored

---

Exercises

1. Review some Array Exercises

```
// let's use reduce
// flatten this data into one flat array (reduce, concat)
var data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// flatten this complex array into one array of the cast members
// should look like ['Christian Bale', 'Michael Caine', 'Liam Neeson'...]
// no movie star should be repeated

var input = [
  {
    title: "Batman Begins",
    year: 2005,
    cast: [
      "Christian Bale",
      "Michael Caine",
      "Liam Neeson",
      "Katie Holmes",
      "Gary Oldman",
      "Cillian Murphy"
    ]
  },
  {
    title: "The Dark Knight",
    year: 2008,
    cast: [
      "Christian Bale",
      "Heath Ledger",
      "Aaron Eckhart",
      "Michael Caine",
      "Maggie Gyllenhal",
      "Gary Oldman",
      "Morgan Freeman"
    ]
  },
  {
    title: "The Dark Knight Rises",
    year: 2012,
    cast: [
      "Christian Bale",
      "Gary Oldman",
      "Tom Hardy",
      "Joseph Gordon-Levitt",
      "Anne Hathaway",
      "Marion Cotillard",
      "Morgan Freeman",
      "Michael Caine"
    ]
  }
];
```

2. Next we are going to build a weather machine app
    - https://www.freecodecamp.com/challenges/show-the-local-weather
    - http://codepen.io/robaguilera/full/wgXRpO/ // as an example
    - http://codepen.io/robaguilera/pen/PpjXLP // this you can fork
    - You want to grab the users current location data with geolocation api
    - Next you're going to pipe that info into the "open weather map" api
    - From there you're going to manipulate the DOM so that it displays the users current location and weather
    - You also want to add a button that toggles from farenheit to celsius
