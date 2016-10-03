# Bonus: TODO App part 1

Now it gets more exiting. We are going to create a very simple TODO app where users can add tasks and check tasks as completed.

You will learn how to:
 1. Declare functions and handle events from the browser
 2. Create and insert a set of elements with attributes and text into the webpage

The webpage for this example set up using separate files for JavaScript and CSS, to separate styling and scripts from the markup. the `css` folder contains the styles, and `scripts` folder contains the JavaScript.

Open `bonus1.html` in Chrome and Atom.

## 1. Functions and events
Functions in JavaScript are so called first-class, which means they are objects and can be manipulated and passed around just like any other object.

The browser emits various types of _events_ based on user actions (scrolling, clicking, hovering, etc), incidents occurring while the page is preparing to be displayed (DOM finished parsing, images and resources done loading), and much more.

To make our code respond to events we need to declare a function to handle the event.

For example:

```javascript
function buttonClickHandler(event) {
  alert('Click event!');
  console.log('event:', event);
}
```

This is the html for a submit button:
```html
<input type="submit" value="Add" />
```

The DOM API has some convenient functions for manipulating and interacting with the page, such as:

```javascript
var list = document.querySelector('ul'); // Gets the first ul element found in the DOM
var listItem = document.createElement('li'); // Create a new li element
list.appendChild(listItem); // Adds the li element as a child of the ul element
```

To register `buttonClickHandler` as a event listener:

```javascript
function buttonClickHandler(clickEvent){
	console.log('In click event');
}
var buttonElement = document.querySelector('input[type="submit"]');
buttonElement.addEventListener('click', buttonClickHandler);
```

Use the examples above when solving the tasks below.

### What happened here?

We told the browser to send `click` events from the "Add" button to the `buttonClickHandler` function we declared earlier. The browser passed in the event which triggered the handler to the handler, and we printed out a message to console containing the event.

## 2. Adding tasks to the list in the TODO app

* **Before starting, delete the code we added to `task-1.js` in the last exercise.**
* Also review the `bonus1.html` and `bonus1.js` files to understand how it currently works and what is missing.

### Handling input from the user

* In `bonus1.js`, do the following:
	* Find out how to query the DOM  for `ul` (list) elements and assign the result to a variable.
	* Do the same for the text field element.
	* Do the same for the `form` element as well.
	* Declare a function called `submitFormHandler` that takes an `event` parameter and logs it to the console.
	* **Important: in the `submitFormHandler` function, call `event.preventDefault()` as the last action in the function.** This is to prevent the submit event from "bubbling up" to the browser and refreshing the page.
	* Register the `submitFormHandler` you just declared as an event listener on the `form` element, listening for `submit` events.

* Type something into the input box and click "Add". You should see the text you typed in to the input box displayed in the JavaScript console.

### Creating tasks

When the user submits the task a new `<li>` element should be added to the bottom of the list.
* To do this, add a new function called `createTaskElement` which takes the description (the user input) as a parameter. Inside the function:
	* Create a new list element (`<li>`)
	* Create a new input element of type checkbox
	* Create a new label element (this is the text for the checkbox)
		* The label must have a child node with text (the todo-description text the user inputs)
	* Append the checkbox element and the label element to the list element
	* Return the list element from the function.

This function needs to be called each time the `submit` event is calling the `submitFormHandler` function.

* In the `submitFormHandler` function, add:
	* Call the `createTaskElement` function
	* Append the list element (return object from createTaskElement) to the task list (`<ul>`)
	* Reset the value (text) of the input element to a empty string.

* Try out the new code. You should be able to add tasks to the list.
* Try inspecting the markup using the browser dev tools while adding tasks to see what happens to the DOM.

# [Go to part 2 =>](../bonus-2/README.md)
