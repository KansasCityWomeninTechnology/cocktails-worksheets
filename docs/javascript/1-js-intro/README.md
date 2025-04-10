# Introduction to JavaScript

JavaScript is one of many programming languages used for application development. It is the programming language of the web and is the basis of everything we see on the internet.  Or, if you're creating a cocktail, JavaScript is the liquor -- the base and foundation of the drink.

In this session, we will explore the building blocks for programming -- variables, math operators, and data types -- using JavaScript.

We’ll build our knowledge of JavaScript by becoming familiar with variable declarations (const and let), functions, array methods, and many others.

> [!WARNING]
> Before starting the worksheet, please take a moment to review the [Setup instructions](../setup/?id=setup) to ensure you have all the tools and workspace setup you need for today's work.

# Declare variables and assign values

You'll start practicing some JavaScript basics covered in the presentation and play a variation of [Mad Libs](https://en.wikipedia.org/wiki/Mad_Libs). You will replace temporary code snippets with nouns or verbs of your choosing as instructed. The code to replace will look like this: **&lt;noun_1>**. You'll replace everything, including the angle brackets, so **&lt;noun_1>** becomes **drink**.

## Prepare the HTML file

1. Take a look at the code in _index.html_. Compare it with the code below. It should be identical.

   {% codeblock copy %}index.html{% codeblock %}

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <title>Intro to JS</title>
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
       <script src="./js/script.js" type="text/JavaScript"></script>
     </body>
   </html>
   ```

> [!TIP]
> Need a refresher on HTML? Check out the [HTML session worksheet](../../html/).

## Prepare the script.js file

1. Take a look at the _script.js_ file and compare it with the code below. You will see red squiggly lines. This is expected! Those will disappear when you've completed this exercise.

{% codeblock copy %}script.js{% codeblock %}
```js
    // Define two numeric variables
    const <noun_1> = 5;
    const <noun_2> = 25;

    // Set a new variable to determine if twice the first numeric variable is greater than the second numeric variable from above.
    const <noun_3> = <noun_1> * 2 > <noun_2>;

    // Output the comparison.
    document.getElementById("math").innerHTML = <noun_3>;

    // Practice types and equality
    document.getElementById("type").innerHTML = typeof <noun_1>;
```

## Look for the MadLibs items to replace

Remember these are the noun or verb text surrounded by angle brackets: **&lt;noun_2>**. You can use choose any noun or verb you like for the variable name.

> [!TIP]
> Feel free to ask mentors for help! We are here to help you!

> [!TIP]
> A noun is a person, place or thing such as "pen" or "drink."
>
> A verb is a word used to describe an action such as "make" or "become."

> [!TIP]
> If you highlight, then right-click on "<noun_1>" or any other text surrounded by angle brackets (be sure to include the angle brackets!), you will get a menu that will include an option to "Change All Occurrences." This is a good way to make sure you don't miss an occurrence of the thing you want to change.

> ![](images/change_all_occurrences.png ":class=image-border")

> If this doesn't work for you, and instead you see a drop-down, click the drop-down and select "Replace." This should allow you to change all instances at once.

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

Logical operations are the basis of computer programming. Explore types, arithmetic operations, and equality comparison.

1.  Try some other data types and comparisons! Change the first variable's value to the string "5" by adding quotation marks around the 5. Change second variable's value to the number 5 without quotation marks.

> [!HINT]
> The value of a variable is to the right of the '=' sign.

> [!HINT]
> What is the output of "What type is the first variable" when you add quotation marks around the 5? What if you change the variable in `typeof()` on line 12 to use the variable **&lt;noun_3>** from line 6?

2.  Remove the `* 2` from line 6 then change the `>` to `==`. Make note of the comparison value in the output.

3.  After reviewing the comparison with `==`, change it to `===`. How is the output different from the `==` comparison in the previous step?

> [!INFO]
> `==` compares the value and does not care about the data type so a string "5" is the same as the number 5.
>
> `===` compares both the value and the data type so a string "5" is not the same as the number 5.

4. Try out other variable values, different mathematic operators, or different comparison operators and see what happens.

| Mathematic operator | Operation      |
| ------------------- | -------------- |
| +                   | Addition       |
| -                   | Subtraction    |
| \*                  | Multiplication |
| /                   | Division       |
| %                   | Modulus        |

| Comparison operator | Operation                |
| ------------------- | ------------------------ |
| >                   | Greater than             |
| >=                  | Greater than or equal to |
| <                   | Less than                |
| <=                  | Less than or equal to    |
| ==                  | Equality                 |
| ===                 | Strict equality          |
| !=                  | Inequality               |
| !==                 | Strict inequality        |

# References and helpful links

[JavaScript data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

[JavaScript operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)
