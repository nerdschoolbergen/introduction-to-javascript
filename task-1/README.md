# Task 1 - Hello world
This task will get you started learning the basics of JavaScript in the browser.

You will learn how to:
 1. Set up your development environment
 2. Create "Hello world"
 3. Make your code interact with the webpage

## 1. Dev environment

Open `task-1.html` both in your browser and your code editor. Make sure changes to the HTML file are reflected in the browser.

## 2. "Hello world"

To make our example webpage run JavaScript we need to add a `<script>` element. Add the following `<script>` element inside the `<body>` element:

```html
<script>
  alert('Hello world!');
</script>
```

Refresh your page (hit `F5` or `CTRL+R`/ `CMD+R`). The result should be a box popping up saying 'Hello world!'. How exiting!

## 3. Interacting with the DOM

All browsers supply an API called the DOM (Document Object Model). The DOM API gives developers access to manipulating webpage markup dynamically via a tree structure called the _DOM tree_. Each HTML element in the webpage is represented as a node in the tree.

We are going to use a DOM API method called `querySelector` to replace some text in the webpage. Replace the contents of the `<script>` element we created in the last example with the following code:

```javascript
var paragraph = document.querySelector('p');
paragraph.innerHTML = 'Hello Nerdschool';
```

Make sure your `<script>` element is located below the `<p>` (paragraph) element.

Refresh your page. The result should be the text 'Hello Nerdschool' displaying in the paragraph below the heading.

Try replacing the text with something else and refresh the page.
