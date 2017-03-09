#  Higher Order Functions, Abstraction and Functional Programming

---

```
Tzu-li and Tzu-ssu were boasting about the size of their latest programs.
‘Two-hundred thousand lines,’ said Tzu-li, ‘not counting comments!’
Tzu-ssu responded, ‘Pssh, mine is almost a million lines already.’
Master Yuan-Ma said, ‘My best program has five hundred lines.’
Hearing this, Tzu-li and Tzu-ssu were enlightened
```

---

- Large programs are costly
  - complexity
  - easy to hide bugs
  - confusing

---

- Which is better?

```
var total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
console.log(total);

// or

console.log(sum(range(1,10)));
```

---

## Abstracting Complexity

- Although, the second example is probably larger in size (when you consider the source code), it is smaller in footprint when it comes to your application
- You are using built-in tools, instead of rolling your own

---

- Also, in terms of vocabulary (think syntactical) you are correct in using range and sum to add numbes 1-10, versus loops and counters

---

## Abstracting Complexity

- Abstracting is expressing simpler concepts than the program as a whole
  - You hideaway the details of what you're doing and view the problem at a higher (abstract) level

---

- Put 1 cup of dried peas per person into a container.
- Add water until the peas are well covered.
- Leave the peas in water for at least 12 hours.
- Take the peas out of the water and put them in a cooking pan.
- Add 4 cups of water per person.
- Cover the pan and keep the peas simmering for two hours.
- Take half an onion per person. Cut it into pieces.

---

- Add it to the peas. Take a stalk of celery per person.
- Cut it into pieces with a knife. Add it to the peas.
- Take a carrot per person. Cut it into pieces. With a knife!
- Add it to the peas. Cook for 10 more minutes.

---

```
Per person: 1 cup dried split peas, half a chopped onion, a stalk of celery, and a carrot.

Soak peas for 12 hours. Simmer for 2 hours in 4 cups of water (per person). Chop and add vegetables. Cook for 10 more minutes.
```

---

- The second recipe is easier to read and understand, but requires you to be familiar with cooking terms *soak, chop, simmer*
- When programming, you can't rely on words begging to be used from the dictionary, so you tend to fall into the first step of programming, writing out incredibly detailed steps
- It **must** become second nature to notice when a particular step is waiting to be abstracted away into a new word

---

## Abstracting in Practice

```
var array = [1,2,3];
for (var i = 0; i < array.length; i++) {
  console.log(array[i]);
}
```

- How can we abstract this into a function?

---

- What if we want to do something else than logging the elements?

```
function forEach(items, action) {
  for (var i = 0; i < items.length; i++) {
    action(items[i]);
  }
}
forEach(['wampa', 'x-wing', 'tie fighter'], blast);
```

---


- We actually don't need to write `forEach` it exists for us already

```
var nums = [1,2,3,4,5];
var sum = 0;
nums.forEach(function(number) {
  sum += number;
});
console.log(sum);
```

---

## Higher-Order Functions

- *Functions that operate on other functions, either by taking them as arguments or by returning them are called higher-order functions*

---


- ![inline 90%](../image/wut.jpeg)
- Accept that functions are values
  - They can be evaluated to return some value, not just perform actions
- Higher-order functions allow us to abstract over *actions* as well as *values*

---

- You can have functions that create new functions

```
function addThis(m) {
  return function(n) {
    return m + n;
  };
}
var addThese = addThis(10);
console.log(addThese(20));
```

- Confusing at first, I know (look up currying)

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

---

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

## Reduce Method

- The array method `reduce` is used to iterate through an array and condense it into one value.
- To use reduce you pass in a callback whose arguments are an accumulator and the current value.
- The accumulator is like a total that reduce keeps track of after each operation.
- The current value is just the next element in the array you're iterating through.
- reduce has an optional second argument which can be used to set the initial value of the accumulator. If no initial value is specified it will be the first array element and currentVal will start with the second array element.

---

```
var singleVal = array.reduce(function(accumulator, currentVal) {
  return accumulator - currentVal;
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

![left](../image/supers.gif)

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

## Flatten an array of arrays

- Use the `reduce` method in combination with the `concat` method to "flatten" an array of arrays into a single array

```
var arrays = [[1, 2, 3], [4, 5], [6]];
// your function here

// -> [1, 2, 3, 4, 5, 6];
```

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
