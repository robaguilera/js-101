# Object Oriented & Functional Programming

---

## Constructor Functions

- We can create objects using what's called a **constructor** function
- Often constructor functions are capitalized to make it clear that it is a constructor

```
var Car = function() {
  this.wheels = 4;
  this.engines = 1;
  this.seats = 5;
};
```

---

- In a constructor the this variable refers to the new object being created by the constructor. So when we write,

```
this.wheels = 4;
```

---

- To use a constructor function we call it with the `new` keyword in front of it

`var myCar - new Car():`

- myCar is now an **instance** of the Car constructor and it looks like the object it described
- Note that it is important to use the new keyword when calling a constructor. This is how Javascript knows to create a new object and that all the references to this inside the constructor should be referring to this new object.

---

- Now, once the myCar instance is created it can be used like any other object and can have its properties accessed and modified the same way you would usually. For example:
`myCar.turboType = "twin";`
- Our myCar variable now has a property turboType with a value of "twin".

---

*Instructions*

- Create an instance of a student
- Give this student the appropriate information to represent you

```
var Student = function () {
  this.name = "",
  this.age = null,
  this.subject = ""
}
```

---

- We can also add parameters to our constructor
```
var Car = function(wheels, seats, engines) {
  this.wheels = wheels;
  this.seats = seats;
  this.engines = engines;
};
var myCar = new Car(6, 3, 1);
```

---

*Instructions*

- Modify the Student constructor function to take in parameters and call those parameters with the appropriate attributes of one of your fellow classmates

---

- Objects have their own attributes, called **properties**, and their own functions, called **methods**.
- In the previous challenges we used the **this** keyword to reference public properties on the current object.
- We can also create private properties and private methods which aren't accessible from outside the object
- Useful for when we want to store information but want to control how it's used

---

```
var Car = function() {
  // this is a private variable
  var speed = 10;

  // these are public methods
  this.accelerate = function(change) {
    speed += change;
  };

  this.decelerate = function() {
    speed -= 5;
  };

  this.getSpeed = function() {
    return speed;
  };
};
```

---

## Map Method

- The `map` method is a convenient way to iterate through arrays.
- The map method will iterate through every element of the array, creating a new array with values that have been modified by the **callback** function, and return it. Note that it does not modify the original array.

---

```
var oldArray = [1, 2, 3];
var timesFour = oldArray.map(function(val){
  return val * 4;

});
console.log(timesFour); // returns [4, 8, 12]
console.log(oldArray);  // returns [1, 2, 3]
```

---

*Instructions*

- Use the map function to add 3 to every value in the variable oldArray, and save the results into variable newArray. oldArray should not change.

```
var oldArray = [1,2,3,4,5];
var newArray = oldArray;
```

---

## Filter Method

- The filter method is used to iterate through an array and filter out elements where a given condition is not true.
- Filter is passed a callback function which takes the current value (we've called that val) as an argument.
- Any array element for which the callback returns true will be kept and elements that return false will be filtered out.

---

- The following code is an example of using filter to remove array elements that are equal to five:

```
array = array.filter(function(val) {
  return val % 5 === 0;
});
```

---

*Instructions*

- Use filter to create a new array with all the values from oldArray which are less than 6.

```
var oldArray = [1,2,3,4,5,6,7,8,9,10];
var newArray = oldArray;
```

---

## Sort Method

- You can use the method sort to easily sort the values in an array alphabetically or numerically.
- Sort actually alters the array in place. However, it also returns this sorted array.
- The function you pass Sort is a compare function.

---

```
var array = [1, 12, 21, 2];
array.sort(function(a, b) {
  return a - b;

    });
```

- sort can be passed a compare function as a callback. The compare function should return a negative number if a should be before b, a positive number if a should be after b, or 0 if they are equal.

---

*Instructions*

- Use sort to sort the array from largest to smallest

```
var array = [1, 12, 21, 2];

array.sort();
```

---

## Reverse Method

- The array method `reduce` is used to iterate through an array and condense it into one value.
- To use reduce you pass in a callback whose arguments are an accumulator and the current value.
- The accumulator is like a total that reduce keeps track of after each operation.
- The current value is just the next element in the array you're iterating through.
- reduce has an optional second argument which can be used to set the initial value of the accumulator. If no initial value is specified it will be the first array element and currentVal will start with the second array element.

---

```
var singleVal = array.reduce(function(previousVal, currentVal) {
  return previousVal - currentVal;
}, 0);
```

---

*Instructions*

- Use the reduce method to sum all the values in array and assign it to singleVal.
- Should equal 30

```

var array = [4,5,6,7,8];
var singleVal = 0;

singleVal = array
```
---

![left](../img/supers.gif)

- Headover to functionalProgramming.js and try your hand at the exercises there

---

## Reverse Method

- You can use the reverse method to reverse the elements of an array.
- Reverse is another array method that alters the array in place, but it also returns the reversed array.

```
var myArray = [1, 2, 3];
myArray.reverse(); //3,2,1
```

## Concat Method

- Concat can be used to merge the contents of two arrays into one.
- Concat takes an array as an argument and returns a new array with the elements of this array concatenated onto the end.

```
var oldArray = [1,2,3];
var newArray = [4,5,6];
newArray = oldArray.concat(newArray);
```

---

## Split Method

- You can use the split method to split a string into an array.
- Split uses the argument you pass in as a delimiter to determine which points the string should be split at.

```
var monthString = 'Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec';
var splitMonths = [];
var splitMonths = monthString.split(',');
```

---

*Instructions*

- Split the variable into an array

```
var string = "Split me into an array";
var array = [];

// You're going to have to figure how to split the white space

array = string;
```

---

## Join Method

- We can use the join method to join each element of an array into a string separated by whatever delimiter you provide as an argument.
- The following is an example of using join to join all of the elements of an array into a string with all the elements separated by word and:

```
var veggies = ["Celery", "Radish", "Carrot", "Potato"];
var salad = veggies.join(" and ");
console.log(salad); // "Celery and Radish and Carrot and Potato"
```

---

## Algorithm Scripting

- The following are exercises that are designed to test what you've learned so far
- Some of these may be fustrating.  Remember to try them out for at least 15 mins.  Look up the Javascript documentation.  If by then you are still completely stuck then reach out for help from one of us or from each other!

---

## Reverse a String

- Reverse the provided string.
- You may need to turn the string into an array before you can reverse it.
- Your result must be a string.
- Hints: split, reverse, join

---

## Factorialize a number

- Return the factorial of the provided integer.
- If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
- Factorials are often represented with the shorthand notation n!
- For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

```
function factorialize(num) {
  return result;
}

factorialize(5);
```

---

## Find the Longest Word in a String

- Return the length of the longest word in the provided sentence.
- Your response should be a number
- Tips: split(), string.length, reduce, sort, for loops

```
function findLongestWord(str) {
  return str.length;
}
findLongestWord("The quick brown fox jumped over the lazy dog");
```

---

## Return Largest Numbers

- Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.
- Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

```
function largestOfFour(arr) {
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
```
