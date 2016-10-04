# Bonus: TODO App part 2

In this task we are going to expand the TODO app to make it more useful by enabling storage of tasks in the browser.

You will learn how to:
 1. Use IIFEs (..what?), strict mode, and create objects and arrays
 2. Store data in the browser

* Open `bonus2.html` in Chrome and Atom. Open `bonus2.js` in Atom as well.
* Copy the script you made from the previous task (`bonus2.js`) into `bonus2.js`

## 1. IIFEs, strict mode, objects and arrays

### IIFEs
In JavaScript we have the concept of _Global scope_. In short terms this means that you can overwrite functions and variables declared in one script file from another script file (by mistake).

**Note:** _Global scope_ is an anti-pattern and should be avoided as much as possible.

To protect ourselves from polluting the _Global scope_ we create a scope to define our functions in. `IIFE` (Immediately Invoked Function Expression) is a function executed as soon as it is defined. This is very handy:

```javascript
(function() {
  'use strict'
  // Your code goes here
})();
```
* Wrap your code inside the function above to create your IIFE.

### Strict mode
You also notice that we have added the statement `'use strict'` at the top of our `IIFE`. `strict mode` is a way of forcing the browser to evaluate our JavaScript in a stricter way by converting code mistakes to syntax errors among other things.

### Objects and arrays
Before we start storing data in the browser we need to create a data structure  representing our tasks. Please refer to  [javaScriptCheatSheet.js](../javaScriptCheatSheet.js) for more in depth info on array and object syntax.

Declaring arrays is simple:

```javascript
var fruits = [];
```

Arrays can store any object. Suppose we want to declare an object with the following properties:
 - name
 - amount

This can be done using the following syntax:
```javascript
var aFruit = {
  name: 'Apple',
  amount: 2
};
```

The `name` and `amount` property can then be accessed via `.`:
```javascript
var fruitName = aFruit.name;
aFruit.amount = 3;
```

Arrays can be manipulated using `pop` and `push`:
```javascript
fruits.push(aFruit);
var aFruitCopy = fruits.pop();
```

They can also be accessed by index:
```javascript
var firstFruit = fruits[0];
var anotherFruit = {
  name: 'Orange',
  amount: 5
};
fruits[1] = anotherFruit;
```
### Tasks data structure

To implement a data structure for tasks:

* Create an array to hold tasks declared in your IFFE
* Create a function called `addTasks` that takes `description` as a parameter
that adds task objects to your array

To integrate the data structure with the rest of your code:
* Call your `addTasks` function from `submitFormHandler` and log the value of `tasks` to console

* This should result in the console printing out our array of tasks each time a new one is added.

### Rendering data as markup
We need a way to render the array of tasks into a set of `<li>` elements like in task 2.

* Create a function called `renderTasks`
  * Make the function return if the `tasks` array is empty
  * Remove all `<li>` elements before inserting new ones
  * Loop through all the tasks in your array and call `createTaskElement`
* Add a call to this function from `submitFormHandler` and try running the code. This should result in the tasks being added to the list again.

## 2. Storing data in the browser

Each time we refresh the page we loose the data we added. To fix this we need to persist the data somewhere. The simplest way is to use the Web Storage API provided by modern browsers. We will use `localStorage` for this example.

Using `localStorage` is simple. To set data:

```javascript
localStorage.setItem('key', 'value');
```

To retreive data:

```javascript
var value = localStorage.getItem('key');
```

* Try this out in your browser console.
* Tip: The 'Resources' tab in Chrome Use Dev tools lets you inspect the `localStorage` object

Values are limited to strings only. This leads us to a common problem in JavaScript applications. How to serialize and deserialize objects and arrays for storage and transfer to and from servers. The answer is `JSON` (JavaScript Object Notation). Try typing in the following in your browser console:
```javascript
JSON.stringify({a: 1, b: 2, c: [1,2,3]});
```

The console should output:

```json
{"a":1,"b":2,"c":[1,2,3]}
```

* Try passing in the string above into the `JSON.parse()` function. Remember to wrap the string in single quotes. The console should output the parsed object.

### Implementing storage

We start by adding a function to store all tasks.

* Create a function called `storeAllTasks`
  * Do a length check on the array and return if empty
  * Convert the tasks array to a JSON string
  * Use `localStorage` to store the JSON string in a key kalled `nerdschool-todo-tasks`

* Add a call to this function to `submitFormHandler` and try running the code and add some tasks. To check if localStorage is updated, simply type `localStorage` into your JavaScript console.

* Try refreshing the page. You will notice that the page still does not display tasks stored in `localStorage`.

### Reading from storage
We need to retrieve our task data from `localStorage` on page load.

* Create a function called `getStoredTasks`
  * Get the JSON string stored in the key `nerdschool-todo-tasks` from `localStorage`
  * Parse the JSON string and return the result
* Lastly we need to call this function at page load, store the result in our `tasks` array and call `renderTasks` inside the IFFE

* Try refreshing the page again. The previously added tasks should be rendered.

### Extra exercise
* This code is missing a feature. The state of the task (completed/not completed) is not stored, so checking a task and refreshing the page does nothing. Try fixing this on your own.
