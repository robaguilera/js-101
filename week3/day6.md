### The DOM

- As a browser loads a web page, it creates a model of that page
- The model is called a DOM tree, and it is stored in the browser's memory

---

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

---

- This document above will stored as 4 different types of nodes

---

## The Document Node

- Every element is represented as it's own node
- At the top level is a document node, it represents the entire page
- When you access any element you are navigating to it via the document node

---

## Element Node

- These are the individual elements that make up a web page
- You query the DOM looking for an element and once you have it, you can then access it's text or attributes

---

## Attribute Nodes

- The opening tags of HTML elements can carry attributes (classes, ID's, form names, etc)
- These nodes are not children of the element, but are directly part of that element
- Once you access this element you can access it's attribute and either read it or alter it

---

## Text Nodes

- Once you have accessed an element, you can then reach the text within that element
- This is stored in a text node
- These are viewed as children of the *element node*
- If there is another child element inside the *text node* (i.e. the `<em>` tag above), it is **NOT** a child of the text node, but of the element node
- No further branches can come off a text node

---

## Accessing Elements

---

## Select an Individual Element Node

- `getElementById()` get an element with this ID value
- `querySelector` get an element with this class value

---

## Multiple Elements

- `getElementsByClassName()` get all elements with this class name
- `getElementsByTagName()`  get all elements with this tag name (li, div, a)
- `querySelectorAll()` get all elements with this class name and/or tag name ('li.hot')

---

## Traversing Between Element Nodes

- `parentNode` selects the parent of the current element node
- `previousSibling / nextSibling`
- `firstChild / lastChild`

---

## Updating Content

```
<li id="one"><em>Fresh</em> Figs</li>

var el = document.getElementById('one');
var elText = el.firstChild.nextSibling.nodeValue;
elText = elText.replace(elText,' apples');
el.firstChild.nextSibling.nodeValue = elText;
```

---

- You can also use text content
- Ignores HTML tags
- Only supported by < IE9 and above
```
var el = document.getElementById('one');
var elText = el.textContent;
console.log(elText)
```

---

## Warning

- It is not recommended to use `innerHTML` to add or remove elements as this opens your site to XSS attacks
- Rather use a series of DOM manipulation techniques to target the DOM and add, update and remove elements

---

## Adding Elements

---

- createElement() // creates a new element
- createTextNode() // gives it content
- appendChild() // add it to the DOM

---

```
var newLi = document.createElement('li');
var newText = document.createTextNode('fresh bugs');
newLi.appendChild(newText);

var position = document.getElementsByTagName('ul')[0];
console.log(position);
position.appendChild(newLi);
```

---

## Removing Elements

---

1. Store the element to be removed in a variable
2. Store the parent of that element in a variable
3. Remove that element from the containing element `removeChild()`

---

```
var removeEl = document.getElementByTagName('li')[3];
var containerEl = removeEl.parentNode;
containerEl.removeChild(removeEl);
```

---

## Attribute Nodes

---

- Once you have an element node you can use other properties and methods on that elment node to access and change its attributes
1. First select the element node that contains the attribute
2. Follow it with a period symbol
3. Then use of the methods or properties below to work with that element's attributes

```
document.getElementById('one').getAttribute('class');
```

---

- getAttribute() // gets the value
- hasAttribute() // checks if element node has a specified attribute
- setAttribute() // sets the value of an attribute
- removeAttribute() // removes an attribute from an element node
- className // gets or sets the value of the class attribute
- id // get or sets the value of the id

---

- element.className = 'class';
- element.setAttribute('class', 'complete');
- element.removeAttribute('class')

---

- Another way to add a class is using `classList` property
- classList.add / .remove / .item / .toggle / .contains

---

## Click Events

---

- When you browse the web, your browser registers different types of events

> Hey!  Just registered a new event.  Want to do anything with it?

---

- Interactions create events
  - click or tap on a link
  - hover or swipe
  - type on a keyboard
  - resize the window
  - or when the page has loaded

---

- Events trigger code
  - it can be used to trigger a particular function

---

## Event Types

---

- Let's look at MDN's resource of events

---

## Events Trigger JS Code

---

1. Select the element node you want to respond to
2. Indicate which event will trigger the response
  - This is called **binding**
3. State the code you want to run when the event occurs

---

## Three Ways to handle events

1. HTML Event Handler
2. Traditional DOM Event Handlers
3. DOM Level 2 Event Listeners

---

- HTML Event Handler

```
<input type="name" onblur="checkUsername()">
```

---

- Old way of running event handlers
- Not preferred way
- Unless you're using Angular, Ember, or React
- Sigh....

---

## Using DOM Event Handlers

- element.onevent = functionName;

```
function checkUsername() {
  // CODE HERE
}
var elUsername = document.getElementById('username');
elUsername.onblur = checkUsername;
```

---

- Better way of setting up event handlers
- Downside is you can only attach one function to event

---

## Event Listeners

- element.addEventListener('event', functionName, Boolean)
- event = event you want to trigger on
- functionName = function you want to run
- Boolean = is usually set to false (called event flow [more on this later])

---

```
function checkUsername() {
  // CODE HERE
}
var elUsername = document.getElementById('username');
elUsername.addEventListener('blur', checkUsername, false);
```

---

- If you want to pass an argument you need a work around

```
element.addEventListener('click', function() {
  myFunction(data);
}, false);
```

---

- You can also pass a callback

```
element.addEventListener('click', function() {
  // do something
}, false);
```

---

## The Event Object

---

- When an event occurs, the event objects tells you information about the event and the element it happened upon
- Evertime it fires you get back
  - which element the event happened on
  - which key was pressed
  - what part of the viewport the user clicked for a click event (viewport = what part of the window)
- The Event object is passed to any function that is the event handler or listener

---

```
event.target || .type || .preventDefault() || .stopPropagation()
```

---

```
function checkName(e) {
  var target = e.target;
}

el.addEventListener('blur', checkName, false);
// if you want to pass parameters

el.addEventListener('blur', function(e) {
  checkName(e, 5);
}, false);
```


