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

- There are two ways to access the properties of an object: the dot operator (.) and bracket notation ([]), similar to an array
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

