# What that heck is `this`?

## The Call Site

- To understand what `this` is, we need to understand the call-site, where in the code a function is called (not where it's declared)
```
function baz() {
    // call-stack is: `baz`
    // so, our call-site is in the global scope

    console.log( "baz" );
    bar(); // <-- call-site for `bar`
}

function bar() {
    // call-stack is: `baz` -> `bar`
    // so, our call-site is in `baz`

    console.log( "bar" );
    foo(); // <-- call-site for `foo`
}

function foo() {
    // call-stack is: `baz` -> `bar` -> `foo`
    // so, our call-site is in `bar`

    console.log( "foo" );
}

baz(); // <-- call-site for `baz
```
- The **call stack** will be a list of the functions that have run to get to the current line you are executing
- In dev tools, look at the second function in the call stack, that will be your call site

## Call Site Rules
- 4 rules for where `this` gets bound

- Default Binding Rule
  - Lowest in precedence
  - Catch all if no other `this` binding rule applies
    ```
    function foo() {
        console.log(this.a);
    }
    var a = 2;
    foo(); //2
    ```
  - standard undecorated function call
  - this is pointing to the global object
  - unless "strict mode" is turned then we get undefined
  - otherwise global object

- Implicit binding
  - 3rd rule in terms of precedence
  - Applies when the call site has a context-object
    - Call site is referenced within an object
      ```
      function foo() {
        console.log(this.a)
      }
      var obj = {
        a: 2,
        foo: foo
      }
      obj.foo(); // 2
      ```
    - In this example, the function is invoked inside of an object reference so you could say it is "owned" by the object
  - TL;DR - implicit binding will dictate that `this` refers to the object

- Implicity Lost
  - Something tricky in Javascript is that you can lose the implicit binding
  - Although, our example looks like the previous example where `this` should point to the object, the thing to consider is that the call site is in a regular undecorated function, thus setting `this` to the global object or undefined in strict mode
  - It's always key to pay attention to where the call site lies
    ```
    function foo() {
        console.log(this.a)
    }
    var obj = {
        a: 'a',
        foo: foo
    }
    var a = 'global';
    var bar = obj.foo;
    bar();
    ```

- explicit Binding
  - 2nd rule in terms of precedence
```
function foo() {
    console.log(this.a);
}
var obj = {
    a: 'a'
}
foo.call(obj)
```
  - By using the `call` or `apply` keyword we explicity set `this` to point to the object we pass as an argument
  - We can also use the `bind` keyword to explicity set what we want `this` to be
```
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}

var obj = {
  a: 'a'
}

var bar = foo.bind(obj);
var b = bar(3);
console.log(b);
```

  - Another solution is to cache the `this` context to a variable
```
var myObj = {

    specialFunction: function () {

    },

    anotherSpecialFunction: function () {

    },

    getAsyncData: function (cb) {
        cb();
    },

    render: function () {
        var that = this;
        this.getAsyncData(function () {
            // context of this lost so we use the variable `that`
            that.specialFunction();
            that.anotherSpecialFunction();
        });
    }
};

myObj.render();
```

- New Keyword
  - 1st rule in terms of precedence
  - Might seem similar to a class based oriented program language, but not quite
  - Several things happen:
    - a new object is created
    - it is linked to a new prototypical chain
    - the new object is set as the `this` keybinding
    - unless a new object is returned, the function will automatically return it's self
