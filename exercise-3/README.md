# Task 1: The basics of JavaScript

First, we must create the structure we need to write some javascript. We never write javascript directly in html files, we make `.js` files which we reference in html.

* Create a new `scripts` folder inside of the `new-task-1` folder.
* In the `scripts` folder, create a new file named `task1.js`.
* In `task1.html`, add a script tag in the `<body>`. A script tag example: `<script src="path/to/.js/file"></script>`

Now, let's explore some of the basic language constructs.

First we want to ensure that our code in `task1.js` is contained in this file and is not accessible elsewhere. This is mainly for our own sanity.

If we were to create a variable directly inside of the `task1.js` file, it would be global, accessible for all javascript code in our application. This can be helpful sometimes, but often leads to confusion and hard-to-find bugs.

If we wrap all our code inside a function, we ensure all code we write is scoped to the function.

~~~~javascript
// task1.js

(function() {
  // our code goes here...
})();
~~~~

You might be wondering what the extra parenthesis at the very end means. This is a self-executing function. It's the equivalent of:

~~~~javascript
function myFunction() {

}
myFunction();
~~~~

* Inside the self-executing function, create a data structure that represents yourself. Make a variable that contains the following:
  - A property containing your name
  - A property containing your age
  - An _array_ of your 3 favorite foods
  - An _array_ of _objects_ where each object represents your 3 favorite movies.
    - Each object should have a property with the movie's name.
    - Each object should have property which is another, nested object. This nested object should have two properties, one for `director`, one for `star`, where the value is the name of the director and the name of the main star actor or actress. If you don't remember who this is, just use make up fake names to save time.
    - Put the movies in the order of your most to least liked so that your most liked movie is at the first position in the array.

Hints:
- Creating an object can look like: `var hellworld = { hello: 'world'}`
- Creating an array can look like: `var items = ['apples', 'bananas']`

* Create a function named `printMyInfo` that takes one parameter which will be the data structure you just made.
* In this function, create a variable with the default value of an empty string
* Make the necessary logic to make up the text `Hello, my name is {name}. I'm {age} years old and my favorite movies are {least-liked-move} which is directed by {director} and stars {star}, {medium-liked-movie} which is directed by {director} and stars {star}, and {most-liked-movie} which is directed by {director} and stars {star}.`

Tips:
- As you will notice, the listing of the movies are in the opposite order of how they are entered into the list. If you spend a long time figuring out how to reverse the order, just list the movies out in the given order.

* Create a new DOM element on the html page which will contain the string you made
* Log the string to `console` and inspect the printed string in the browser's Console.

Tips:
- `document.createElement()` will be useful here. https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
