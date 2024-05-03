<div>
    <img src="images/logo.png" style="float: left; margin: 0px 15px 15px 0px; height:125px;">
    <h2 style="display:inline-block;margin-top:1em;">Coding &amp; Cocktails: The Liquor</h2>
    <h3 style="margin-top:0;margin-bottom:2em;">Introduction to JavaScript</h3>
</div>
<hr>

# Introduction to JavaScript-ES6

As we learned previously, Javascript is the programming language of the web and is the basis of everything we see on the internat.  Or, if you're creating a cocktail, JavaScript is the liquor - the base and foundation of the drink.  

In this session, we'll build on our knowledge of JavaScript by becomming familiar with some of the features in the newest version of JavaScript, ES6, including new variable declarations (const and let), arrow functions, new array methods, and many others. We will go through features that are common practices today in this curriculum. 


> [!WARNING]
> Before starting the worksheet, please take a moment to review the [Setup instructions](../setup/?id=setup) to ensure you have all the tools and workspace setup you need for today's work.

# Declare variables and assign values
## TODO Anita update the madlibs game for ES6
You'll start practicing some ES6 Basics covered in the presentation and play a variation of [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs). You will replace temporary code snippets with nouns or verbs of your choosing as instructed. The code to replace will look like this: **&lt;noun_1>**. You'll replace everything, including the angle brackets, so **&lt;noun_1>** becomes **drink**.

## Prepare the HTML file

1. Replace code in _index.html_ with the code below.

   {% codeblock copy %}index.html{% codeblock %}

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <title>Intro to ES6</title>
     </head>

     <body>
       <h1>Introducing JavaScript</h1>

       <h2>Variables, Booleans, Operators, Comparison</h2>
       <h3>
         Is the first variable times two greater than the second variable?
       </h3>
       <div id="math"></div>

       <h2>Data Types</h2>
       <h3>What type is the first variable?</h3>
       <div id="type"></div>
       <script src="script.js" type="text/javascript"></script>
     </body>
   </html>
   ```

> [!TIP]Don't forget to save the files. If you have a white circle next to file name, it means you have changes that haven't saved yet. You can either click **Save** button on the top left or use shortcut `cmd` + `s` for Mac or `ctrl` + `s` for Windows.
>
> ![](images/stackblitz-save.png ":class=image-border")

> [!TIP]
> Need a refresher on HTML? Check out the [HTML session worksheet](../../html/).

## Prepare the script.js file

1. Replace code in _script.js_ with the code below.

{% codeblock copy %}script.js{% codeblock %}

    // Define two numeric variables
    const <noun_1> = 5;
    const <noun_2> = 25;

    // Set a new variable to determine if twice the first numeric variable is greater than the second numeric variable from above.
    const <noun_3> = <noun_1> * 2 > <noun_2>;

    // Output the comparison.
    document.getElementById("math").innerHTML = <noun_3>;

    // Practice types and equality
    document.getElementById("type").innerHTML = typeof(<noun_1>);

> [!WARNING]
> Don’t worry about the error message! We’ll fix that in a minute

## Look for the MadLibs items to replace

Remember these are the noun or verb text surrounded by angle brackets: **&lt;noun_2>**. You can use choose any noun or verb you like for the variable name.

> [!TIP]
> Feel free to ask mentors for help! We are here to help you?

> [!TIP]
> A noun is a person, place or thing such as "pen" or "drink."
>
> A verb is a word used to describe an action such as "make" or "become."

> [!WARNING]
> Make sure to replace all instances of a variable with the same noun!
>
> Make sure to remove the angle brackets <> around the text so your code will work!

Check what you have!

![](images/checkpoint.png ":class=image-border")

# Checkpoint

Compare your _script.js_ against the answer key for your work. It might look a little different depending on the variable names you chose.

> [!CODECHECK]
>
> ```js
> const numOne = 5;
> const numTwo = 25;
>
> const numThree = numOne * 2 > numTwo;
>
> document.getElementById("math").innerHTML = numThree;
>
> document.getElementById("type").innerHTML = typeof numOne;
> ```

# Explore type comparisons and equality operators

Variables - Review 

In our previous curriculum, we introduced three ways of declaring variables - var, let, and const

A var variable can be re-declared and updated: 
// Initial variable
var drink = “old fashion";
u// Variable Updated and re-declared in the code:
var food = "margarita";

Note: var is no longer recommended for writing modern JavaScript. 

A let variable can be updated, but not redeclared:
// Initial variable declared and assigned a value
let liquor = "tequila";
// Variable updated and NOT re-declared later in the code:
liquor = "gin";

A const variable cannot be updated or re-declared:
// Declare a constant variable:
const myDrink = "margarita";
// We CANNOT do this:
const myDrink = "tom collins"; //error: Identifier “myDrink” has already been declared
// And we CANNOT do this:
myDrink = "cosmopolitan"; //error: Assignment to constant variable


To say more about the old way - using var, it declares a global or global-scoped variable. This means you can access it anywhere in the script after declaring it. In contrast, const and let declare a local or block-scoped variable, which means you can’t access the value outside of the scope where it is defined. This makes your code more secure because hackers can’t just access your variables anywhere in your scripts. For example:

// You can declare variables inside a function 
function check() {
  var drink = “gin”;
  let newDrink = “cocktail”;
}

// You can access global-scoped variables outside of that function
// You can’t access block-scoped variables outside of that function
console.log(drink); // this logs "gin"
console.log(newDrink); //

Logical operations are the basis of computer programming. Explore types, arithmetic operations, and equality comparison.

Modules

In a code repository or folder, we often have many JavaScript files. A JavaScript module is similar to a separate box where you can put related code, such as variables, functions or classes, that can then be reused in different parts of your project.

In basic JavaScript, to reuse that module the keywords module.export and require helped to achieve that purpose.

// In one JavaScript file called ./sum.js
function sum(a, b) {
  return a + b;
};

module.exports = sum; // Export the function `sum`

// In another JavaScript file called math.js, at the top before any code modules
const sum = require(“./sum.js”); // Imports the function `sum`

In ES6, we use a named export with the keyword export at the beginning of the function to indicate that the module will be used in other places in the project.  

// In one JavaScript file called ./sum.js
export function sum(a, b) {
  return a + b;
};

function multiply(a, b) {
  return a * b;
};

Or you can export any code that you want to reuse at the end of the file, instead of exporting them when you first declare them:

// In one JavaScript file called sum.js
function sum(a, b) {
  return a + b;
};

function multiply(a, b) {
  return a * b;
};

export { sum, multiply };

To reuse the functions sum and multiply in a new file we use the keyword import to introduce it into the code we are writing.

Operators

ES6 introduces the Rest and Spread operators into JavaScript to help simplify array manipulation and function parameters. 

The spread operator, identified by three consecutive dots (...) is used primarily to expand iterables such as arrays into individual elements. It allows us to merge, copy, or pass array elements to functions without explicitly iterating through them. 

Given the following array:

const liquor = [“vodka”, “gin”, “tequila”];
console.log(“Original array:”, liquor);
// Prints: Original array: vodka,gin,tequila

Before the spread operator, if we want to add to create new array the includes the existing array arr, it would need to be done in this way:

const newDrinks = [“bourbon”, “rum”, liquor[0], liquor[1], liquor[2]];
console.log(“New array:”, newDrinks);
// Prints: New array: bourbon,rum,vodka,gin,tequila

Using the spread operator is more efficient, reducing the amount code written:

const newLiquor = [“bourbon”, “rum”, ...liquor];
console.log(“New array:”, newLiquor);
// Prints: New array: bourbon,rum,vodka,gin,tequila

Spread operators can also be used to:

Combine arrays:
const liquor1 = [“vodka”, “gin”, “tequila”];
const liquor2 = [“bourbon”, “rum”, “brandy”];
const combinedLiquor = [...liquor1, ...liquor2];
console.log(“Combined array:”, combinedLiquor); 
//Prints: Combined Array: vodka,gin,tequila,bourbon,rum,brandy

Passing Arguments to Functions:
Function sum(a, b, c) {
Return a + b + c;
}
const nums = [1, 2, 3];
const result = sum(...nums);
console.log(“Result of sum:”, sum); //Prints: Result of sum: 6

Copying Arrays::
const liquor = [“vodka”, “gin”, “tequila”];
const copy = [...liquor];
console.log(“Copied array:”, copy); //Prints: Copied array: vodka,gin,tequila

 The Rest operator also uses three consecutive dots (...) to condense elements into a single entity within array destructuring or function parameters, by collecting the remaining elements into a designated variable.. 

Before Rest operators, we would have code written like this to destructure the array arr: 
const liquor = [“bourbon”, “rum”, “vodka”, “gin”, “tequila”];

const first = liquor[0]; //Extracting the first element
const rest = liquor.slice(1); //Collecting the rest of the elements

console.log(“First element:’, first); //Prints: First element: bourbon
console.log(“Rest of the elements:”, rest); 
//Prints: Rest of the elements: rum,vodka,gin,tequila

After the Rest operator that same code would look like this, reducing the code written by 2 lines: 
const [first, ...rest] = [“bourbon”, “rum”, “vodka”, “gin”, “tequila”];
console.log("First element:”, first); //Prints: First element: bourbon
console.log(“Rest of the elements:”, rest); 

# References and helpful links

[JavaScript data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

[JavaScript operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)
