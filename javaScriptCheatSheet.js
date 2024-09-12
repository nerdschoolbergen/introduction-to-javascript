//
// === Basics ===
//

var name = 'bob'; // string
var age = 23; // number (note: there is no int, double, float, etc. Just "number")
var isImpressed = false; // bool
var nada = undefined; // undefined aka nothing at all
var alsoNada = null; // null is nothing, but also something (it's a value). Yeah, it's weird...

// Note regarding null and undefined: If you want to ensure a value is set,
// you need to check for both null AND undefined. If you just check for null,
// you'll still get an exception if the value is undefined.

//
// === Objects ===
//

// The full-length syntax for creating a new object with properties:
var person = new Object();
person.name = 'john';
person.height = 190;

// The short-hand syntax for creating the exact same object as above (use this syntax):
var person2 = {
    name: 'john',
    height: 190
};

// Object with nested object
var janeDoe = {
    name: 'jane',
    contactInfo: {
        email: 'jane@doe.com'
        phone: '11223344'
    }
};

//
// === Arrays ===
//

// The full-length syntax for creating a new array of strings:
var fruits = new Array('apple', 'orange', 'banana'); // Note the single ' vs "

//The short-hand syntax for creating the exact same array as above (use this syntax):
var fruits2 = ['apple', 'orange', 'banana'];

// An array of car objects
var cars = [
    { make: 'ford', model: 'focus', colour: 'red' },
    { make: 'toyota', model: 'corolla', colour: 'black' },
    { make: 'mercedes', model: 'glc', colour: 'white' }
];

// Complex object with arrays and objects
var norway = {
    regions: [
        {
            name: 'Vestland',
            population: 651299,
            counties: [
                { name: 'Bergen' },
                { name: 'Voss' },
                { name: 'Årdal' }
            ]
        },
        {
            name: 'Rogaland',
            population: 499417,
            counties: [
                { name: 'Stavanger' },
                { name: 'Haugesund' },
                { name: 'Sandnes' }
            ]
        }
    ]
};
var bergen = norway.regions[0].counties[0].name;
var sandnes = norway.regions[1].counties[2].name;

//
// === Functions ===
// Functions are first-class citizens in JavaScript and is the encapsulation/scoping
// boundary equal to a class in Java/C#
//

// There are two ways of defining a function:

// Assign an anonymous function (it has no name) to the variable sayHello:
var sayHello = function(){
    alert('Hello!');
}

// Or:

// The named function sayHelloWorld:
function sayHelloWorld(){
    alert('Hello World!');
}

// There are differences in how these two forms are treated behind the scenes,
// but for now just use the second version to avoid some quirks.

// Function with two parameters (note: no type constraint):

function greeter(name, sender) {
    return 'Greetings from ' + sender + ', ' + name;
}

// Even though there are two parameters to a function, you can pass as few or
// as many as you want...

greeter('bob'); // <- only one param = still valid

// This will leave the second parameter as undefined, aka nothing at all.
// JavaScript thinks is ok until you do something with the second parameter inside the function

// Immediately Invoked Function Expression (IIFE):
// We often use this to prevent global scope sharing (having variables globally accessible)
// and to start initialization logic that runs without having to do a action
(function(){

}()); // <- Invokes itself

// Functions can nest functions...

(function(){

    function hello(){
        function world(){
            return 'world';
        }
        return 'hello' + world();
    }

}());

// Functions can be passed as arguments to functions...

(function(){

    function world(){
        return 'world';
    }

    function hello(worldFunction){
        return 'hello' + worldFunction();
    }

    var helloWorld = hello(world);

}());

// Encapsulation/closure and "this"

(function(){

    function Person(firstName, lastName, age){
        this.fullName = firstName + ' ' + lastName;
        this.age = age;

        this.greet = function(){
            alert('Greetings, ' + fullName); // TODO: <- name is not available
        }
    }

    var bob = new Person('bob', 'bobson', 30); // When a function is supposed to be newed/instantiated, the common convention is to use uppercase first letter.
    bob.greet();

}());

//
// === Loops ===
//

// While:

while (learningIsFun){
    learnMore++;
};

// Do/While:

do {
    learnMore++;
} while(learningIsFun)

// For-loop:

for (var i = 0; i < items.length; i++){
    alert(items[i]);
}

//
// === Conditionals ===
//

// Switch:

switch (name){
    case 'bob':
        greetBob();
        break;
    case 'sarah':
        greetSarah();
        break;
    default:
        greetAnon();
};

// If:

if (name === 'bob'){
    greetBob();
} else if (name === 'sarah'){
    greetSarah();
} else {
    greetAnon();
}

//
// === Equality check quirks ===
//
// TL;DR: Always use === and !== instead of == and !=
// http://stackoverflow.com/questions/359494/does-it-matter-which-equals-operator-vs-i-use-in-javascript-comparisons
