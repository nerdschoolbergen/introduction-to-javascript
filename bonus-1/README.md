# Exercise 5 (Bonus exercise 1)

Now it gets more exiting. We are going to create a very simple TODO app where users can add tasks and check tasks as completed.

You will learn how to:

1.  Declare functions and handle events from the browser
2.  Create and insert a set of elements with attributes and text into the webpage

## Required software and tools for this exercise

- [Chrome](https://www.google.com/chrome)
- [Visual Studio Code](https://code.visualstudio.com)

The webpage for this example set up using separate files for JavaScript and CSS, to separate styling and scripts from the markup. the `css` folder contains the styles, and `scripts` folder contains the JavaScript.

Open `bonus1.html` in Chrome and Visual Studio Code.

## 5.1 - Functions and events

Functions in JavaScript are so called first-class, which means they are objects and can be manipulated and passed around just like any other object.

The browser emits various types of _events_ based on user actions (scrolling, clicking, hovering, etc), incidents occurring while the page is preparing to be displayed (DOM finished parsing, images and resources done loading), and much more.

To make our code respond to events we need to declare a function to handle the event.

For example:

```javascript
function buttonClickHandler(event) {
  alert("Click event!");
  console.log("event:", event);
  event.preventDefault();
}
```

:exclamation: Tip: `event.preventDefault()` tells the browser not to execute the normal action, which in the case of a `<input />` of type `submit`, would be to submit the form and refresh the page.

This is the html for a submit button:

```html
<input type="submit" value="Add" />
```

The DOM API has some convenient functions for manipulating and interacting with the page, such as:

```javascript
var list = document.querySelector("ul"); // Gets the first ul element found in the DOM
var listItem = document.createElement("li"); // Create a new li element
list.appendChild(listItem); // Adds the li element as a child of the ul element
```

To register `buttonClickHandler` as a event listener:

```javascript
function buttonClickHandler(clickEvent) {
  console.log("In click event");
}
var buttonElement = document.querySelector('input[type="submit"]');
buttonElement.addEventListener("click", buttonClickHandler);
```

Use the examples above when solving the tasks below.

### What happened here?

We told the browser to send `click` events from the "Add" button to the `buttonClickHandler` function we declared earlier. The browser passed in the event which triggered the handler to the handler, and we printed out a message to console containing the event.

## 5.2 - Adding tasks to the list in the TODO app

:exclamation: Before starting, delete the code we added to `task-1.js` in the last exercise. Also review the `bonus1.html` and `bonus1.js` files to understand how it currently works and what is missing.

### 5.2.1 - Handling input from the user

:pencil2: In `bonus1.js`, do the following:

- Find out how to query the DOM for `ul` (list) elements and assign the result to a variable.
- Do the same for the text field (the `input`-field of type `text`) element.
- Do the same for the `form` element as well.
- Declare a function called `submitFormHandler` that takes an `event` parameter and logs it to the console.
- **:exclamation: in the `submitFormHandler` function, call `event.preventDefault()` as the last action in the function.** This is to prevent the submit event from "bubbling up" to the browser and refreshing the page.
  _ Register the `submitFormHandler` you just declared as an event listener on the `form` element, listening for `submit` events.
  _ `console.log` the output of the event. See if you can find a way to extract the value of the text-field. (Hint: Check out `event.target`).
  _ Once you have identified the source of the content for the text-field, print its content using `console.log`, inside of your `submitFormHandler`.
  _ Write something into the input box and click "Add". You should see the text you typed in to the input box displayed in the JavaScript console. \* Find out how to query the `ul` element in the DOM, and try appending a value to the list (Create a new `<li>` element, and append it to the `ul` element).

### 5.2.2 - Creating tasks

You will see that just appending text to the list does not look very nice. We will dynamically create `<li>`-elements which contain a checkbox and a label, like the entries you can see in the `bonus1.html`.

:exclamation: Tip: Check out the `setAttribute`-function on DOM-elements. [MDN Docs](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute).

:pencil2: To do this, add a new function called `createTaskElement` which takes the description (the user input) as a parameter. Inside the function:
_ Create a new list element (`<li>`)
_ Create a new input element of type checkbox
_ Create a new label element (this is the text for the checkbox)
_ The label must have a child node with text (the todo-description text the user inputs)
_ Append the checkbox element and the label element to the list element
_ Return the list element from the function.

This function needs to be called each time the `submit` event is calling the `submitFormHandler` function.

:pencil2: In the `submitFormHandler` function, add:
_ Call the `createTaskElement` function
_ Append the list element (return object from createTaskElement) to the task list (`<ul>`) \* Reset the value (text) of the input element to a empty string.

:pencil2: Try out the new code. You should be able to add tasks to the list.
:pencil2: Try inspecting the markup using the browser dev tools while adding tasks to see what happens to the DOM.

# [Go to part 2 =>](../bonus-2/README.md)
