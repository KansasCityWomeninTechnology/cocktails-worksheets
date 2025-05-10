# Working with functions

Now we will create a web page with interactive elements. In the rest of the worksheet we will build button click handling and manipulate the elements on the web page. When complete, you will have a web page that looks like this

![](images/result.png ":class=image-border")

In this section, we will write our own functions in JavaScript by using conditional logic and learn how to debug our code.

## Prepare your workspace

1. Replace the contents of your _index.html_ file with the following code. You can copy and paste it.

   {% codeblock copy %}index.html{% codeblock %}

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <title>C&amp;C App</title>
       <script type="text/javascript" src="./js/script.js"></script>
       <link rel="stylesheet" type="text/css" href="./css/styles.css" />
     </head>
     <body>
       <h1>Welcome to Coding &amp; Cocktails!</h1>

       <div class="content">
         <div class="learn">
           <h2>Where smart ladies learn</h2>
           <ul id="coding-section"></ul>
         </div>

         <div class="meet">
           <h2>And meet awesome women like</h2>
           <ul id="fellow-ladydevs"></ul>
         </div>

         <div class="cocktail">
           <h2>All while enjoying stylish cocktails!</h2>
           <button
             id="cocktail-section"
             onclick="clickHandler('Hi there LadyDev!')"
           ></button>
         </div>
       </div>
     </body>
   </html>
   ```

1. Likewise, replace the contents of your _styles.css_ page with the following CSS code. You'll find this file in the _css_ folder in your file tree.

   {% codeblock copy %}styles.css{% codeblock %}

   ```css
   @import url("https://fonts.googleapis.com/css?family=Work+Sans");

   body {
     background-color: #666b8f;
     color: #fff;
     font-family: "Work Sans", sans-serif;
     margin: 0;
     font-size: 16px;
   }

   h1 {
     text-align: center;
   }

   img {
     display: block;
     margin: 0 auto;
   }

   .content {
     margin-left: 20px;
   }

   .content ul {
     list-style-type: none;
   }

   .content div + div {
     margin-top: 50px;
   }

   .coding {
     color: #d0c675;
     font-size: 20px;
     font-weight: bold;
     transition: color 1s, font-size 1s;
   }

   .meet li::first-letter {
     font-size: 150%;
     font-weight: 700;
   }

   .cocktail > button {
     background-color: #9d81a2;
     border: none;
     color: white;
     padding: 15px 32px;
     text-align: center;
     font-size: 16px;
   }
   ```

1. And finally, replace the contents of your _script.js_ file with the following JavaScript code. You'll find this file in the _js_ folder in your file tree.

   {% codeblock copy %}script.js{% codeblock %}

   ```js
  const addDevSkill = function (skill) {
   	let listItem = document.createElement('li');
   	listItem.innerHTML = skill;
   	document.getElementById("coding-section").appendChild(listItem);
   };

  const <verb> = function (item) {
      return "I\'d like a " + item + ", please!";
  };
    
  const <noun> = "cocktail";

  const clickHandler = function (text) {

  };

  // Declare brainSkills array below this line

  document.addEventListener("DOMContentLoaded", function (event) {

      document.getElementById("cocktail-section").innerHTML = <verb>(<noun>);

  });

   ```

## Commit your code

We don't want to lose any of our work, so we will want to [commit it](https://kansascitywomenintechnology.github.io/cocktails-worksheets/#/source_control/) to a repo. Follow the instructions in the link above (hint:  open the link in a new tab) to save your work.

## Write a function

Let's get coding! We'll call a function and keep track of click events.

1. In _script.js_. You'll see MadLibs items like we had in the first section of the worksheet.

2. Search for **&lt;noun>** and **&lt;verb>** and replace the variables. Save the file and look at the web page in Chrome. The lavender button now has the text "I'd like a cocktail please!", but we want it do something when we click on it.

> [!TIP]
> If you want to wrap the text in your Codespaces IDE, you can use Alt-z on Windows, or Opt-z on a Mac.

3. It's easier to understand what's going on if we have visual indications of our work. Browsers have a built-in function to display alert messages. Let's display an alert message with the word "click" inside of it. Find the `clickHandler` function in _script.js_ and add `alert('click');` inside the function (between the curly braces). The `clickHandler` function should look like this:

   {% codeblock copy %}script.js{% codeblock %}

   ```js
   const clickHandler = function (text) {
     alert("click");
   // test comment
   };
   ```

> [!TIP]
> Notice `alert("click");` is **indented** inside the function. Indenting code inside functions make it easier for you to see where a function begins (the open curly brace) and where it ends (the close curly brace). Indention makes code human readable.

> [!INFO]
> We passed in the string "click" to the built in function `alert`. You can use either double quotes "" or single quotes '' for strings.

4. Now try clicking the button in Chrome. An alert message appears! Close the alert message by clicking **Ok**.

5. In _script.js_, define a new variable called `numberOfClicks` above the line with the code `const clickHandler = function(text)` so we can keep track of the number of button clicks and set the value to 0. Your variable should look like this:

   {% codeblock copy %}script.js{% codeblock %}

   ```js
   let numberOfClicks = 0;
   ```

> [!INFO]
> You declared `numberOfClicks` variable outside of the function so that it's accessible by more than `clickHandler` function. The **scope** of the variable and function determines accessibility of that variable or function in the application.
> Learn more by reading [MDN documentation on scope](https://developer.mozilla.org/en-US/docs/Glossary/Scope).

6. Track the clicks by incrementing `numberOfClicks` by 1 for each button click. We can do this inside the `clickHandler` function. Place your cursor after the opening curly brace and press `Enter` to create a new line above `alert("click");`. Type the following statement:

   {% codeblock copy %}script.js{% codeblock %}

   ```js
   numberOfClicks = numberOfClicks + 1;
   ```

> [!INFO]
> We are adding 1 to `numberOfClicks` variable and setting the result back to `numberOfClicks`.
> There are other ways to assign an increment to the `numberOfClicks` variable. You could have also written:
>
> ```
>   numberOfClicks += 1;
> ```
>
> or
>
> ```
>   numberOfClicks++;
> ```

7. Update the alert message to show the number of clicks by adding `numberOfClicks` to the display text using string concatenation.

   {% codeblock copy %}script.js{% codeblock %}

   ```js
   alert('click ' + numberOfClicks);
   ```

8. In Chrome, click the button a few times to see your click counter in action. Don't forget to close the alert message between each click.

## Navigate Chrome DevTools debugging interface and learn different debugging techniques

As applications grow, we need ways to troubleshoot code. We'll learn the basics of debugging a web app.

1. There's a better message to display in the alert, to provide more context. In _script.js_, change the parameter you pass in to the `alert` method to use the variable named `text`. You are using the same parameter passed into the `clickHandler` function. Your code should look like this:

   {% codeblock copy %}script.js{% codeblock %}

   ```js
   alert(text);
   ```

> [!TIP]
> Don't forget mentors are here to help you. If you have any questions, feel free to ask!

> [!INFO]
> Notice there are no quotation marks. This now references the variable named `text`, not the string "text". Try adding quotation marks and interact with the button in Chrome to see the difference.

2. We still want to see the button click counter for troubleshooting purposes. We can log the number of clicks to the console. Add `console.log('numberOfClicks', numberOfClicks);` right after incrementing the clicks in the `clickHandler` function.

3. Make sure your project is opened in a new tab. In the project tab, to see console logging in action, open the Chrome DevTools and click on the button. You should see the number of clicks write to the console. Leave DevTools open.

> [!TIP]
> Open Chrome DevTools by using `cmd` + `option` + `i` on Macs, `F12` on Windows. Refer to [Helpful Keyboard Shortcuts](/javascript/references/).

4. We declared `numberOfClicks` using `let`. What happens if we used `const`? In _script.js_, change the declaration for `numberOfClicks` to use `const`.

> [!HINT]
> Change `let numberOfClicks = 0;` to `const numberOfClicks = 0;`

5. Try clicking on the button in Chrome. Oh no! Now we see an error in the console. Notice how DevTools helps you debug your script. It tells you which line of code the failure occurs `scripts.js:7`. The line number may be different for you.

> [!INFO]
> It also provides information on caller of the failing line-- `HTMLButtonElement.onClick (index:25)`. As you create complex applications, there may be layers of functions called. The layers of functions called is a **call stack**. The output containing the error, along with all the functions called leading up to it, is a **stack trace**.

6. The keyword `const` makes a variable read-only, so we can't increment the value. The error message helps us identify the problem by providing both the line of code and why. In _script.js_, change the declaration of `numberOfClicks` to use `let`. Leave DevTools open.

> [!INFO]
> Since we want to reassign the value of numberOfClicks every time we click the button, we are using `let` instead of `const`
> Learn more about difference between const and let by reading [Medium article on JavaScript ES6+: var, let, or const?](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)

7. Click the button in Chrome and notice we fixed the error.

## Conditional logic

Business needs can be complex. We'll add conditional logic to execute different code paths.

1. Inside the `clickHandler` function, remove the alert(text) and add an if statement in its place. When we add a conditional statement, we cause the alert to only be shown if there are greater than 2 button clicks:

   {% codeblock copy %}script.js{% codeblock %}

   ```js
   if (numberOfClicks > 2) {
         alert(text);
   }
   ```

   > [!TIP]
   > Notice the indentation on the `alert(text);`. Indent everything inside the `if` statement to make it easier to read your code. Doing so helps your brain group logical units of code together at a glance!

2. Use the `console.log` output to confirm that there is a message that appears after the second button click. Every time you click the button, the number in the console should increment by 1.

3. If we want to only show the alert the first 3 times you clicked the button, how would you change the conditional statement?

   > [!HINT]
   > There are 2 different ways to apply this condition.
   > Change `if (numberOfClicks > 2)` to either
   >
   > ```
   > if (numberOfClicks <= 3)
   > ```
   >
   > Or
   >
   > ```
   > if (numberOfClicks < 4)
   > ```

4. What if we want to show a different alert message after 3 button clicks? Add an `else` clause to the conditional statement:

   {% codeblock copy %}script.js{% codeblock %}

   ```js
   if (numberOfClicks <= 3) {
     alert(text);
   } else {
     alert("Drink in moderation-- no more cocktails for you!");
   }
   ```

5. This is starting to become difficult to track using `console.log`. Let's try **debugging** the `onClickHandler` function in DevTools. Add `debugger;` as the first line of the `clickHandler` function. Your function should look like this:

   {% codeblock copy %}script.js{% codeblock %}

   ```js
   const clickHandler = function (text) {
     debugger;
     numberOfClicks = numberOfClicks + 1;

     // rest of the function remains here
   };
   ```

6. In Chrome, click on the button. Your web page paused execution and DevTools now shows _script.js_. We can now step through the code line by line and inspect the function along the way.

> [!TIP]
>
> `debugger;` works only when debugging capabilities, such as Chrome DevTools, is open.

7. In the _scripts.js_ tab in DevTools in Chrome, hover over `numberOfClicks`. It shows you the current value of the variable, 0. Click **Step** button, ![](images/step.png) (located at the upper right of DevTools window), to execute the next line of code in _script.js_. The line where we increment `numberOfClicks` highlights. The current value of `numberOfClicks` is still 0.

> [!TIP]
> Need help with debugging tool? Feel free to reach out to mentors!

8. Click **Step** again. Now we see `numberOfClicks` increment to 1.

![](images/debugging.png ":class=image-border")

9. Click **Step** until the `if` statement highlights.

10. Click **Step** to execute the `if` statement. Since 1 is less than or equal to 3, we expect to execute `alert(text);` statement. Does it?

11. Click **Resume**, ![](images/resume.png), to resume execution on the rest of the code.

> [!INFO]
> We are using **Step** in this session, but debugging tools, such as Chrome DevTools, have other capabilities to make debugging easy. You can add **breakpoints** to force your web page to pause execution without adding `debugger;` statements so you can execute multiple lines of code pausing execution using the **Resume** button instead of **Step**. You can also add the `numberOfClicks` variable to a watch list so that you can see the value at a glance.

12. Click the button multiple times. Repeat the stepping through the code by clicking the button and resuming until you click for the 4th time. Does the else condition execute?

13. In _script.js_, remove the `debugger;` statement so we aren't interrupted in the rest of the worksheet. Feel free to add it back if you get stuck!

> [!INFO]
>
> `debugger;` is helpful for writing code, but don't use it for production code. Most linters will red flag `debugger` during the build process to help safe-guard your application.

14. Commit the changes you've made.

### Celebrate with a cocktail or mocktail! You deserve it, rockstar!

![](images/pexels-shvets-production-6975384.jpg ":class=image-border")

# Checkpoint

Compare your _script.js_ against the answer key for your work. It might look a little different depending on the variable names you chose.

> [!CODECHECK]
> ![](images/checkpoint.png)
>
> Hard to read? Compare your _script.js_ file with our [answer key](https://github.com/KansasCityWomeninTechnology/javascript-101/blob/answerkey-functions/scripts.js).

## References and helpful links

[MDN Reference: Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

[MDN Reference: if else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

[Chrome DevTools JavaScript Debugging Reference](https://developers.google.com/web/tools/chrome-devtools/javascript/reference)
