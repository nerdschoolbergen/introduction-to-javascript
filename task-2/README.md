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
  console.log(event);
}
```
Add this code to `task-2.js`.
