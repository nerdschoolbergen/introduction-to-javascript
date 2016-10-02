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
  - An _array_ of _objects_ where each object represents your favorite movies.
    - Each object should have a property with the movie's name

* Create a function
