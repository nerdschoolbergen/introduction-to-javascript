# Exercise 4: User interaction

You will need to interact with the browser a bit to prompt the user to give input and to write the result to the screen. Here are some examples to get you started.

## Required software and tools for this exercise

- [Chrome](https://www.google.com/chrome)
- [Visual Studio Code](https://code.visualstudio.com)

## 4.1 - User interaction

:pencil2: Create a `scripts` folder and create a new file named `exercise4.js`.

:pencil2: In `exercise4.html`, add a script tag in the `<body>`. A script tag example: `<script src="path/to/.js/file"></script>`

## 4.2 - Find the highest number

:pencil2: Inside `exercise4.js`, create a function named `findHighestNum` which takes no parameters.

:pencil2: This function should continuously prompt the user for a number and remember the highest number found until the user enters zero.

This is an example of how a simple script with user interaction.

```javascript
var input = prompt("Enter something here"); // Displays a pop-up textbox in the browser
document.write(input); // Writes to the document/page
```

:exclamation: Tips:

> - Probably need to convert the input _string_ to a _number_ of some kind
> - "continuously prompt" probably means some kind of endless loop...

When zero (`0`) is entered, the loop should exit and it should print the highest number to the screen.

## 4.3 - Count letters in text

This algorithm will hold a paragraph of generated text and prompt the user to enter a letter in a pop-up messagebox. It will then find how many occurrences there are of this letter in the text paragraph and output the result.

:pencil2: Inside `exercise4.js`, create a function named `countLetters` which takes no parameters.

:pencil2: Go to http://www.lipsum.com/feed/html and copy a paragraph of dummy text from the page. It doesn't matter which one. (Lipsum is just a fake language made to be just placeholder text in various cases. Awesome for prototyping software).

:pencil2: Inside the function, create a variable to hold the lipsum text.

:pencil2: _Prompt_ the user for input, which should be a single letter. This value, if valid, should be given as parameter to the function you create next.

:pencil2: Inside the function, create a new, nested function named `countLetter` which takes one parameter named `letter`.

:pencil2: Inside `countLetter`, find the number of occurrences of the letter given as parameter. Tip: using `var characters = text.split('');` will give you the chars in a string which you can then iterate over and check for matches.

:pencil2: Print the number of occurrences to the screen.

# [Go to bonus task =>](../bonus-1/README.md)
