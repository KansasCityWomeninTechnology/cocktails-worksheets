# Introduction to JavaScript-ES6

As we learned previously, Javascript is the programming language of the web and is the baissi of everything we see on the internat.  Or, if you're creating a cocktail, JavaScript is the liquor - the base and foundation of the drink.  In this session, we'll build on our knowledge of JavaScript by becomming familiar with some of the features in the newest version of JavaScript, ES6, including new variable declarations (const and let), arrow functions, new array methods, and many others. We will go through features that are common practices today in this curriculum. 


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

# References and helpful links

[JavaScript data types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

[JavaScript operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators)
