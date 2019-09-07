# Exercise 3: The basics of JavaScript

First, we must create the structure we need to write some javascript. We never write javascript directly in html files, we make `.js` files which we reference in html.

You will learn to:

- Use basic functionality of javascript
- Creating DOM elements
- Storing information in the browser

## Required software and tools for this exercise

- [Chrome](https://www.google.com/chrome)
- [Visual Studio Code](https://code.visualstudio.com)

## 3.1 - Javascript language constructs

:pencil2: Create a new `scripts` folder inside of the `exercise-3` folder.

:pencil2: In the `scripts` folder, create a new file named `exercise3.js`.

:pencil2: In `exercise3.html`, add a script tag in the `<body>`. A script tag example: `<script src="path/to/.js/file"></script>`

:pencil2: Add a simple message box in the `.js` file to verify it is loaded correctly: `alert('hi there')`

Now, let's explore some of the basic language constructs.

First we want to ensure that our code in `exercise3.js` is contained in this file and is not accessible elsewhere. This is mainly for our own sanity.

If we were to create a variable directly inside of the `exercise3.js` file, it would be global, accessible for all javascript code in our application. This can be helpful sometimes, but often leads to confusion and hard-to-find bugs. Global state is considered an anti-pattern, so we take some extra measures to avoid us making a mistake by accident.

If we wrap all our code inside a function, we ensure all code we write is scoped to the function.

:exclamation: Functions are the main construct for _encapsulation_ in JavaScript. In Java or C# we would use a _class_ to achieve encapsulation. JavaScript is all about _functions_.

```javascript
// exercise3.js

(function() {
  // our code goes here...
})();
```

You might be wondering what the extra parenthesis at the very end means. This is a self-executing function. It's the equivalent of:

```javascript
function myFunction() {}
myFunction();
```

:exclamation: We just called this a self-executing function, but it's really known as an Immediately Invoked Function Expression or IIFE, pronounced "iffy". All you need to remember is that it's a function which invokes itself.

:pencil2: Inside the self-executing function, create an object that represents yourself. Make a variable that contains the following:

- A property containing your name
- A property containing your age
- An _array_ of your 3 favorite foods
- An _array_ of _objects_ where each object represents your 3 favorite movies.
  - Each object should have a property with the movie's name.
  - Each object should have property `credits` which is another, nested object. This nested object should have two properties, one for `director`, one for `star`, where the value is the name of the director and the name of the main star actor or actress. If you don't remember who this is, just use make up fake names to save time.
  - Put the movies in the order of your most to least liked so that your most liked movie is at the _first_ position in the array and the least liked movie is _last_.

:exclamation: Hints:

> - Creating an object can look like: `var hellworld = { hello: 'world'}` where `hello` is the property name and `world` is the property's value.
> - Creating an array can look like: `var fruits = ['apples', 'bananas']`.

:pencil2: Create a function named `presentMyself` that takes one parameter, which will be the object you just made.

:pencil2: In this function, create a variable with the default value of an empty string.

:pencil2: Make the necessary logic to make up the text `Hello, my name is {name}. I'm {age} years old and my favorite movies are {LEAST-liked-move} which is directed by {director} and stars {star}, {medium-liked-movie} which is directed by {director} and stars {star}, and {MOST-liked-movie} which is directed by {director} and stars {star}.`

:exclamation: Tip:
Use a for-loop to enumerate the content of your favorite movies, so that you do not have to type it out manually. This also allows you to add as many movies you want in the future.

:exclamation: Tip:
As you will notice, the listing of the movies are in the _opposite_ order of how they are entered into the list.

:pencil2: Using only JavaScript, create a new DOM element to hold the text you just made, and insert it into the html page. We typically use `<p>` elements for text.

:exclamation: Tips:

> - `document.createElement()` will be useful here. https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement

> - `document.body.appendChild()` may also be useful. https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild

- Log the string to `console` and inspect the printed string in the browser's Console.

## 3.2 - Storing the info

There are some client side storage mechanisms we can use quite easily.

**Local Storage** persists data on disk between sessions (will be there if you restart browser).

**Session Storage** stores data for a session (if you close the browser tab or browser it will be gone).

Let's use session storage to save our information.

First, let's find this storage so we can see data being put into it.

:pencil2: In Chrome, open dev tools and go to the Application tab, then find Session Storage in the left side menu. As you can see, it's empty now. (The Key and Value columns should be empty).

:pencil2: Open a new browser tab and quickly read through https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage to get a basic idea of usage. There are 3 main functions you should pay attention to.

:exclamation: Both local and session storage is available on the global `window` object which represents the browser in our code. For example, `window.location` has the current url the browser tab is currently at. You can access this object anywhere.

:pencil2: Create a new function named `saveMyself` which takes one parameter.

:pencil2: In the new function, figure out how to use the `setItem(key, value)` function to store the object you pass in.

:pencil2: Call the new function with the object you created earlier.

:pencil2: Go back to Chrome and inspect the Session Storage view.

The Key column probably looks as expected but what's going on with the Value?

`[object Object]`

Weeeeird.

Session Storage will store everything as strings, and the above is the string representation of the object _type_. In other words, what you just stored is the string `"[object Object]"` and not the object at all. Clearly this is no good.

Let's use a better format to store our object in.

JSON is a lovely data structure to work with in JavaScript, since it's more or less identical to how we write javscript objects and arrays. Thankfully there are built-in API's to convert to and from JSON

`var json = JSON.stringify(obj)` will create a JSON string representation of an object

`var obj = JSON.parse(json)` will creata a javascript object of a JSON string.

:pencil2: Inside the `saveMyself` function, _stringify_ the object we get as input parameter.

:pencil2: Save the JSON string as the value in session storage

:Pencil2: Go back to Chrome and inspect Session Storage after refreshing the page. It should now be easy to read the JSON object in the Value column.

:pencil2: Create a new function named `getMyself` which takes no parameters.

:pencil2: In the function, use the `getItem(key)` on session storage to get the stored object.

Make sure you _parse_ the stored JSON string back to a JS object.

:pencil2: Write the object to the Console and inspect it in the browser.

# [Go to exercise 4 =>](../exercise-4/README.md)
