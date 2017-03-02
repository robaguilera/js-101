# Day 3

---

## Objects

- Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

- Objects are useful for storing data in a structured way, and can represent real world objects, like a person


---

```
var person = {
  "name" : "John Doe",
  "age" : 22,
  "nationality" : "American",
  "newUser" : true
}
```

---

*Instructions*

 - Create an object called `myPet`
  - Give the follow properties
    - "name", "type", "age"
  - And set each property to it's appropriate value

---

## Accessing Object Properties

- There are two ways to access the properties of an object: the dot operator "." and bracket notation "[]", similar to an array
- The dot operator is what you use when you know the name of the property you're trying to access ahead of time

---

```
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2
```

---

*Instructions*

- Access the appropriate properties for the object `testObj` using the dot operator

```
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj;
var shirtValue = testObj;

```

---

## Accessing Object Properties

- The second way to access the properties of an object is bracket notation '[]'
- If the property of the object you are trying to access has a space in it, you will need to use bracket notation

```
var myObj = {
  "first name" : "John",
  "last name" : "Doe"
}
var firstName = myObj["first name"]; // John
```

---

*Instructions*

```
var testObj = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line

var entreeValue;
var drinkValue;
```

---

## Accessing Object Properties

- Another use of bracket notation on objects is to use a variable to access a property. This can be very useful for iterating through lists of the object properties or for doing the lookup.

```
var myDog = "Hunter";
var dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
}
var breed = dogs[myDog];
console.log(breed);// "Doberman"
```

---

*Instructions*

- Use the playerNumber variable to lookup player 16 in testObj using bracket notation.

```
var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

var playerNumber;      
var player = testObj;   
```

---

## Updating Object Properties

- After you've created a JavaScript object, you can update its properties at any time just like you would update any other variable
- You can use either dot or bracket notation to update.

```
var ourDog = {
  "name": "Glen",
  "legs": 4,
  "tails": 1,
};
ourDog.name = "Rick";

```

---

*Instructions*

- Change out every property of the `ourDog` object into one of your choosing

```
var ourDog = {
  "name": "Fido",
  "type" : "Poodle",
  "color" : "Brown"
};
```

---

## Adding properties

- You can add new properties to existing JavaScript objects the same way you would modify them

```
ourDog.age = 14;
ourDog["alive"] = true;
```

---

## Delete properties

```
delete ourDog.age;
```


---

*Instructions*

- Add an age property
- Add a height property
- Delete the nationality property

```
var person = {
  "name" : "Jimmy Choo",
  "nationality" : "Russian"
}
```

---

- Now is about time we take a look at some Javascript documentation
- https://developer.mozilla.org/en-US/docs/Web/JavaScript

---

## Checking for properties

- Sometimes it is useful to check if the property of a given object exists or not
- We can use the `.hasOwnProperty(propname)` method of objects to determine if that object has the given property name.
- hasOwnProperty() returns true or false if the property is found or not.

---

```
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false
```

---

*Instructions*

- Copy the function and modify it so that it tests if "myObj" has the property "car".  If not return "Not Found"

```
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // code here
}

// Test your code by modifying these values
checkObj("gift");
```

---

## Complex Objects

- Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, and objects.

---

```
var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [
      "CD",
      "Cassette",
      "LP" ],
    "gold": true
  }
];
```

---

## Complex Objects

- This is an array which contains one object inside. The object has various pieces of metadata about an album. It also has a nested "formats" array. If you want to add more album records, you can do this by adding records to the top level array.

- Objects hold data in a property, which has a key-value format. In the example above, "artist": "Daft Punk" is a property that has a key of "artist" and a value of "Daft Punk".

---

```
{
  "artist": "Daft Punk",
  "title": "Homework",
  "release_year": 1997,
  "formats": [
    "CD",
    "Cassette",
    "LP"
  ],
  "gold": true
}
```
- https://www.instagram.com/nfl/media/

---

*Instructions*

- Add a new album to the myMusic array. Add artist and title strings, release_year number, and a formats array of strings (commas are needed except for the last property)

```
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CS",
      "8T",
      "LP" ],
    "gold": true
  }
  // Add record here
];
```

---

## Complex Objects

- The sub-properties of objects can be accessed by chaining together the dot or bracket notation

```
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": {
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"
```

---

*Instructions*


```
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = ""; // Change this line
var trunkContents = ""; // Change this line
```

---

## Complex Objects

- As we have seen in earlier examples, objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket notation can be chained to access nested arrays

---

```
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"
```

---

*Instructions*

```
var myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }  
];

var secondTree =  // Change this line
```

---

## For Loops

- Let's Review For Loops

```
var ourArray = [];

for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

---

*Instructions*

- Use a for loop to work to push the values 1 through 5 onto myArray

```
var myArray = [];
```

---

- A common task in Javascript is to iterate through the contents of an array

```
var arr = [10,9,8,7,6];
for (var i=0; i < arr.length; i++) {
   console.log(arr[i]);
}
```
- Remember that Arrays have zero-based numbering, which means the last index of the array is length - 1

---

*Instructions*

- Declare and initialize a variable total to 0
- Use a for loop to add the value of each element of the myArr array to total

```
var myArr = [ 2, 3, 4, 5, 6];

```

---

## Nested Loops

- If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:

```
var arr = [
  [1,2], [3,4], [5,6]
];
for (var i=0; i < arr.length; i++) {
  for (var j=0; j < arr[i].length; j++) {
    console.log(arr[i][j]);
  }
}
```

---

- This outputs each sub-element in arr one at a time. Note that for the inner loop, we are checking the .length of arr[i], since arr[i] is itself an array

---

*Instructions*

- Modify function multiplyAll so that it multiplies the product variable by each number in the sub-arrays of arr

```
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  // Only change code above this line
  return product;
}

// should equal 5040
multiplyAll([[1,2],[3,4],[5,6,7]]);
```

---

*Instructions*

- Push the numbers 0 through 4 to an array using a while loop

---

## Exercise time

- You are going to write some code that loops through an array object and checks to see if a profile name and properties exists
- You have a function that is going to take in `name` and a property `prop` as arguments
- This function should check to see if `name` exists in the array object
- It should also check to see if the `prop` is a property of that person
- If both are true, then you should return the "value" of that property  
- If `name` is not valid, then you should return an error message
- If `prop` does not correspond to any properties on that individual then you should return an error message

---

```
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(name, prop){
// Only change code below this line

// Only change code above this line
}

// Change these values to test your function
lookUpProfile("Akira", "likes");

```

---
