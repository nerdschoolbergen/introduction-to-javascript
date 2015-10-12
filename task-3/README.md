# Task 3 - TODO App 2.0

In this task we are going to expand the TODO app to make it more useful by enabling storage of tasks in the browser.

You will learn how to:
 1. Use IIFEs (..what?), strict mode, and create objects and arrays
 2. Store data in the browser

Open `task-3.html` in your browser and your code editor. Open `task-3.js` in your code editor as well.

## 1. IIFEs, strict mode, objects and arrays

### IIFEs
In JavaScript we have the concept of _Global scope_. In short terms this means that you can overwrite functions and variables declared in one script file from another script file (by mistake).

To protect ourselves from polluting the _Global scope_ we create a scope to define our functions in. `IIFE` (Immediately Invoked Function Expression) is a function executed as soon as it is defined. This is very handy:

**Note:** Global scope is an anti-pattern and should be avoided as much as possible.

```javascript
(function() {
 // Your code goes here
})();
```
If you take a look at `task-3.js` you will see how this works in practice.

### Strict mode
You also notice that we have added the statement `'use strict'` at the top of our `IIFE`. `strict mode` is a way of forcing the browser to evaluate our JavaScript in a stricter way by converting code mistakes to syntax errors among other things.

### Objects and arrays
Before we start storing tasks in the browser we need to create a data structure for storing our tasks.

* Add this to your code:

```javascript
var tasks = [];

function addTask(description) {
  var taskId = tasks.length + 1;

  var newTask = {
    id: taskId,
    description: description
  };

  tasks.push(newTask);
}
```

We declare an empty `tasks` array, and a function `addTask` to add tasks to the array. 

* Create and call this function from `submitFormHandler`:

```javascript
function submitFormHandler(event) {
  if(inputField.value) {
    addTask(inputField.value);
    inputField.value = '';
    console.log(tasks);
  }
  event.preventDefault(); // Prevents the event from being handled by the browser
}
```

* This should result in the console printing out our array of tasks each time a new one is added. But we still need a way to render the array of tasks into a set of `<li>` elements like in task 2:

```javascript
function renderTasks() {
  if(tasks.length === 0) {
    return;
  }

  while (taskList.hasChildNodes()) {
    taskList.removeChild(taskList.lastChild);
  }

  for (var i = 0; i < tasks.length; i++) {
    taskList.appendChild(createTaskElement(tasks[i]));
  }
}
```


We first check if the tasks array has any entries. If not, the function returns. We then loop through all child nodes of the `<ul>` element and delete all of them. We then create the new `<li>` elements based on data stored in the tasks array objects.

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

We start by adding a function to store all tasks:

```javascript
function storeAllTasks() {
  if(tasks.length === 0) {
    return;
  }

  var jsonTasks = JSON.stringify(tasks);
  localStorage.setItem('nerdschool-todo-tasks', jsonTasks);
}
```

* Add a call to this function to `submitFormHandler` and try running the code and add some tasks. To check if localStorage is updated, simply type `localStorage` into your JavaScript console.

* Try refreshing the page. You will notice that `localStorage` is empty and all the tasks we added previously are gone. 

* To fix this we need to retreive our task data from `localStorage` on page load:

```javascript
function getStoredTasks() {
  var jsonTasks = localStorage.getItem('nerdschool-todo-tasks');
  return JSON.parse(jsonTasks);
}
```

* Lastly we need to call this function at page load, store the result in our `tasks` array and render all tasks:

```javascript
tasks = getStoredTasks();
renderTasks();
```

* Try refreshing the page again. The previously added tasks should be rendered.

* This code is missing a feature. The state of the task (completed/not completed) is not stored, so checking a task and refreshing the page does nothing. Try fixing this on your own.
