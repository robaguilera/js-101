```## The DOM

- As a browser loads a web page, it creates a model of that page
- The model is called a DOM tree, and it is stored in the browser's memory

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

![](../image/dom.jpg)

---

# The Document Node

- Every element is represented as it's own node
- At the top level is a document node, it represents the entire page
- When you access any element you are navigating to it via the document node

---

# Element Node

- These are the individual elements that make up a web page
- You query the DOM looking for an element and once you have it, you can then access it's text or attributes

---

# Attribute Nodes

- The opening tags of HTML elements can carry attributes (classes, ID's, form names, etc)
- These nodes are not children of the element, but are directly part of that element
- Once you access this element you can access it's attribute and either read it or alter it

---

# Text Nodes

- Once you have accessed an element, you can then reach the text within that element
- This is stored in a text node
- These are viewed as children of the *element node*
- If there is another child element inside the *text node* (i.e. the `<em>` tag above), it is **NOT** a child of the text node, but of the element node
- No further branches can come off a text node

---

# Accessing Elements

---

# Select an Individual Element Node

- `getElementById()` get an element with this ID value
- `querySelector` get an element with this class value

---

# Multiple Elements

- `getElementsByClassName()` get all elements with this class name
- `getElementsByTagName()`  get all elements with this tag name (li, div, a)
- `querySelectorAll()` get all elements with this class name and/or tag name ('li.hot')

---

# Traversing Between Element Nodes

- `parentNode` selects the parent of the current element node
- `previousSibling / nextSibling`
- `firstChild / lastChild`

---```