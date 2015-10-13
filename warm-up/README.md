# Warm-up exercises

You will need to interact with the browser a bit to prompt the user to give input and to write the result to the screen. Here are some examples to get you started. 

```javascript
var input = prompt('Enter something here'); // Displays a pop-up textbox in the browser
document.write(<TEXT>); // Writes to the document/page
```

* In the `scripts` folder, create a new file named `warmup.js`.
* In `warmup.html`, add a script tag in the `<body>`. A script tag example: `<script src="path/to/.js/file"></script>`
* In `warmup.js`, make a IFFE

**Find the highest number**

* Inside the IFFE, create a function named `findHighestNum` which takes no parameters. 
* This function will continuously prompt the user for a number and remember the highest number found until the user enters zero. Tip: probably need to convert the input _string_ to _number_
* When zero is entered it should print the highest number to the screen.

**Count letters in text**

* Inside the IFFE, create a function named `countLetters` which takes no parameters.
* Go to http://www.lipsum.com/feed/html and copy a paragraph of dummy text from the page. It doesn't matter which one.
* Inside the function, create a variable to hold the text.
* Prompt the user for input, which should be a single letter. This value, if valid, should be given as parameter to the function you create next:
* Inside the function, create a new function named `countLetter` which takes one parameter named `letter`.
* Inside `countLetter`, find the number of occurrences of the letter given as parameter. Tip: using `var characters = text.split('');` will give you the chars in a string which you can then iterate over and check for matches.
* Print the number of occurrences to the screen.