# Task 1 - TODO app

Now it gets more exiting. We are going to create a very simple TODO app where users can add tasks and check tasks as completed.

You will learn how to:
 1. Declare functions and handle events from the browser
 2. Create and insert a set of elements with attributes and text into the webpage

The webpage for this example set up using separate files for JavaScript and CSS, to separate styling and scripts from the markup. the `css` folder contains the styles, and `scripts` folder contains the JavaScript.

Open `task-1.html` in your browser and your code editor.

## 1. Functions and events
Functions in JavaScript are so called first-class, which means they are objects and can be manipulated and passed around just like any other object.

The browser emits various types of _events_ based on user actions (scrolling, clicking, hovering, etc), incidents occurring while the page is preparing to be displayed (DOM finished parsing, images and resources done loading), and much more.

To make our code respond to events we need to declare a function to handle the event.

* Add this code to `task-1.js`:

```javascript
function buttonClickHandler(event) {
  alert('Click event!');
  console.log('event:', event);
}
```

The page contains the following submit button markup:
```html
<input type="submit" value="Add" />
```

* To register `buttonClickHandler` as a event listener, add the following code:

```javascript
var buttonElement = document.querySelector('input[type="submit"]');
buttonElement.addEventListener('click', buttonClickHandler);
```

* Save `task-1.js` and refresh the webpage.
* Try clicking the `Add` button, this should result in an popup box displaying.
* Open up the JavaScript console. The console should be displaying the text 'event:' and a `MouseEvent`.

### What happened here?

We told the browser to send `click` events from the "Add" button to the `buttonClickHandler` function we declared earlier. The browser passed in the event which triggered the handler to the handler, and we printed out a message to console containing the event.

## 2. Adding tasks to the task list

* Before starting, delete the code we added to `task-1.js` in the last exercise.

### Handling input from the user

If we take a look at `task-1.html`, we find the following markup:

```html
<form>
  <input type="text" name="task" placeholder="Task description"></input>
  <input type="submit" value="Add" />
</form>
```

When a user clicks the "Add" button or presses enter while the text field is in focus, a `submit` event is emitted from the `form` element. We can use this event to handle input from the user.

* Add this code to `task-1.js` and refresh your browser:

```javascript
var taskList = document.querySelector('ul');
var inputField = document.querySelector('[name="task"]');
var form = document.querySelector('form');

function submitFormHandler(event) {
  console.log(inputField.value);
  event.preventDefault();
}

form.addEventListener('submit', submitFormHandler);
```

* Type something into the input box and click "Add". You should see the text you typed in to the input box displayed in the JavaScript console.

### Creating tasks

The task list is represented as `<li>` elements containing a `<input>` of type `checkbox` and a `<label>`:

```html
<ul>
  <li>
    <input type="checkbox" id="task-1">
    <label for="task-1">Learn Javascript</label>
  </li>
</ul>
```

When the user submits the task a new `<li>` element should be added to the bottom of the list. 

* To do this we declare a function:

```javascript
function createTaskElement(taskDescription) {
  var taskElement = document.createElement('li')

  var checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';

  var labelElement = document.createElement('label');
  labelElement.appendChild(document.createTextNode(taskDescription));

  taskElement.appendChild(checkboxElement);
  taskElement.appendChild(labelElement);

  return taskElement;
}
```

This function needs to be called each time the `submit` event is calling the `submitFormHandler` function. 

* Add the following to `submitFormHandler` on the line after the `console.log` statement:

```javascript
if(inputField.value) {
   var newTaskElement = createTaskElement(inputField.value);
   taskList.appendChild(newTaskElement);
   inputField.value = '';
}
```

Notice that we treat the `value` attribute of the `inputField` element as a boolean in the `if` statement. JavaScript has the weird concept of "truthy/falsy" values. To quote from MDN Glossary: 

> In JavaScript, a truthy value is a value that translates to true when evaluated in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for `false`, `0`, `""`, `null`, `undefined`, and `NaN`).

This is instead of doing a `typeof inputfield.value !== 'undefined'` check and `inputField.value !== null` check in the `if` statement.

* Try out the new code. You should be able to add tasks to the list. 
* Try inspecting the markup using the browser dev tools while adding tasks to see what happens to the DOM.

The checkbox needs to have a unique id and the label needs to have a for attribute with the same id to make the label clickable. 

* To fix this we need to alter the `createTaskElement` function:

```javascript
function createTaskElement(taskDescription) {
  var taskId = 1;

  var taskElement = document.createElement('li');
  
  //TODO: setAttribute
  var checkboxElement = document.createElement('input');
  checkboxElement.type = 'checkbox';
  checkboxElement.id = taskId;

  var labelElement = document.createElement('label');
  labelElement.setAttribute('for', taskId);
  labelElement.appendChild(document.createTextNode(taskDescription));

  taskElement.appendChild(checkboxElement);
  taskElement.appendChild(labelElement);

  return taskElement;
}
```
Notice that we set the `id` attribute of the `checkboxElement` and the `for` attribute of the `labelElement` using the `setAttribute` function.

* Try out the new code again. You may notice some weird behaviour &ndash; if you add multiple tasks they get the same id, and this causes problems when you try clicking the label. To fix this we need to set the `taskId` to a unique value.
* Try modifying the code yourself to do this. Here is one possible solution:

```javascript
function getNextTaskId() {
  var numberOfExistingtasks = document.querySelectorAll('li').length;
  return 'task-' + (numberOfExistingtasks + 1);
}
```

This function counts the number of `<li>` elements in the document using the `Element.querySelectorAll` function, which an `Array` of all elements matching the selector. In order to get the count we call `Array.length`.

* Test this function by adding it to the code and calling it from `createTaskElement`. The result should be that each checkbox is assigned a unique id and the labels function properly.
