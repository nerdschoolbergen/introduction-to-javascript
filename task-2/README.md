# Task 2 - TODO app

Now it gets more exiting. We are going to create a very simple TODO app where users can add tasks and check tasks as completed.

You will learn how to:
 1. Declare functions and handle events from the browser
 2. Create and insert a set of elements with attributes and text into the webpage

The webpage for this example set up using separate files for JavaScript and CSS, to separate styling and scripts from the markup. the `css` folder contains the styles, and `scripts` folder contains the JavaScript.

Open `task-2.html` in your browser and your code editor.

## 1. Functions and events
Functions in JavaScript are so called first-class, which means they are objects and can be manipulated and passed around just like any other object.

The browser emits various types of _events_ based on user actions (scrolling, clicking, hovering, etc), incidents occurring while the page is preparing to be displayed (DOM finished parsing, images and resources done loading), and much more.

To make our code respond to events we need to declare a function to handle the event:

```javascript
function buttonClickHandler(event) {
  alert('Click event!');
  console.log('event:', event);
}
```
Add this code to `task-2.js`.

The page contains the following submit button markup:
```html
<input type="submit" value="Add" />
```

To register `buttonClickHandler` as a event listener, add the following code:

```javascript
var buttonElement = document.querySelector('input[type="submit"]');
buttonElement.addEventListener('click', buttonClickHandler);
```

Save `task-2.js` and refresh the webpage. Try clicking the `Add` button, this should result in an popup box displaying. Open up the JavaScript console. The console should be displaying the text 'event:' and a `MouseEvent`.

### What happened here?

We told the browser to send `click` events from the "Add" button to the `buttonClickHandler` function we declared earlier. The browser passed in the event which triggered the handler to the handler, and we printed out a message to console containing the event.

## 2. Adding tasks to the task list

Before starting, delete the code we added to `task-2.js` in the last exercise.

### Receiving input from the user

If we take a look at `task-2.html`, we find the following markup:

```html
<form>
  <input type="text" name="task" placeholder="Task description"></input>
  <input type="submit" value="Add" />
</form>
```

When a user clicks the "Add" button or presses enter while the text field is in focus, a `submit` event is emitted from the `form` element. We can use this event to handle input from the user:

```javascript
var inputField = document.querySelector('[name="task"]');
var form = document.querySelector('form');

function submitFormHandler(event) {
  console.log(inputField.value);
  event.preventDefault();
}

form.addEventListener('submit', submitFormHandler);
```

Add this code to `task-2.js` and refresh your browser. Open the console, type something into the input box and click "Add". You should see the text you typed in to the input box displayed.
