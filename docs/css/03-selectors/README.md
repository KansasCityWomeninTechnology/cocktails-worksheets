# Adding styles

Let's add some styling to the HTML! Throughout this worksheet, if you need help choosing colors, feel free to use [Colorhunt.co](https://colorhunt.co/) or [accessible color palette generator by Venngage](https://venngage.com/tools/accessible-color-palette-generator) for accessibility friendly color palette. They have lots of color palette samples!

> [!TIP]
> Need a refresher on HTML? Check out the [HTML session worksheet](../../html/).

# Add text color

1. We'll start applying colors to the main `h1` header first. In _styles.css_, declare a style for `h1` tag. Use the `color` property and substitute the hex color you selected for the title like this

   {% codeblock copy %}styles.css{% codeblock %}

   ```css
   h1 {
     color: #1d1395;
   }
   ```

   > [!TIP]
   > Feel free to choose different color if you'd like. You can always zoom in to have a closer look.
   > Check out [keyboard shortcuts](../../keyboard-shortcuts/) for `Zoom in` and `Zoom out` shortcuts.

2. View your site in Chrome. Do you see the color of your header change?

3. Repeat step 1 and add the same color to `h2`. You'll add this right after your `h1` style.

   > [!HINT]
   >
   > {% codeblock %}styles.css{% codeblock %}
   >
   > ```css
   > h1 {
   >   color: #1d1395;
   > }
   >
   > h2 {
   >   color: #1d1395;
   > }
   > ```

   > [!INFO]
   > Notice the color applies to all `h2` elements, including the "Drink menu" text. This is an example of how styles **cascade**.
   >
   > We might need to override the style for a specific element later, but we want to build a strong foundation to build upon.

4. View your page in Chrome. You might need to refresh the page to see your changes. Don't forget to periodically commit your changes!

   > [!TIP]
   > View your app often so you can see the changes as we go along. You may need to refresh the page to see your changes. The worksheet will call out specific places to view the web page to illustrate a concept, but feel free to view your page as often as you want. It helps to see the changes as you write your CSS.

# Add background color

Select a background color for the entire page and add it to the top of _styles.css_ by using the HTML `body` selector and `background-color` property.

   > [!TIP]
   > Feel free to use [Colorhunt.co](https://colorhunt.co/) or [accessible color palette generator by Venngage](https://venngage.com/tools/accessible-color-palette-generator) for colors.

   {% codeblock copy %}styles.css{% codeblock %}

   ```css
   body {
     background-color: #f2dcf2;
   }
   ```

   > [!INFO]
   > The `body` is the parent element for the website so setting a style here applies to every element within **unless** it's overridden.
   >
   > Organize your CSS by setting "global" styles that apply to all elements at the top of the file and target styles for specific elements after global styles. Declare styles for specific elements in vertical order as it appears in the HTML to make it easy to find later

## Drink menu

1. Select a background color for the "Drink menu" section.

2. To add the background color for the "Drink menu" section, we need to know which HTML element is used for the section. Open _index.html_ and find the HTML element for "Drink menu".

   > [!TIP]
   > You can use ctrl-F (cmd-F on a Mac) to search for and find "Drink menu" in the _index.html_.
   >
   > Or you can click anywhere in the _index.html_ file then use [keyboard shortcut](../../keyboard-shortcuts/).

3. Since "Drink menu" section is further down the file, we'll add the style at the bottom of the _styles.css_. "Drink menu" is in a `section` element, let's create a style for the `section` selector and set the `background-color`.

   {% codeblock copy %}styles.css{% codeblock %}

   ```css
   section {
     background-color: #cc8ecc;
   }
   ```

4. Uh oh! We set the background color for all `section` elements, including about sections. That's not what we wanted so let's fix it. The HTML element for "Drink menu" also has a `class` attribute named `drinks`. Change the selector from `section` to `.drinks`.

   > [!INFO]
   > When applying CSS rules to `class` attributes, prepend a `.` to the selector.

   > [!INFO]
   > This is an example of overriding a global style. The background color for the entire page is one color, but we defined a different color for part of the view.
   >
   > Using the element's `class` allows us to target only the elements with the `class` name, in this case just the "Drink menu" section, instead of all elements of the same type.

   > [!HINT]
   >
   > {% codeblock copy %}styles.css{% codeblock %}
   >
   > ```css
   > .drinks {
   >   background-color: #dbe2ef;
   > }
   > ```

5. Don't forget to commit your changes! Codespaces are automatically deleted after a few weeks, if you don't use them, so committing your changes saves your work so that you can get back to where you left off when you can get back to working.

## Navigation and footer

To make the navigation and footer area pop, let's add a background color to them. Look at the _index.html_ file to identify the selectors for the navigation and footer sections. Since these are global styles, declare the styles near the top of _styles.css_ file.

   > [!TIP]
   > HTML element for navigation is `nav` and HTML element for footer is `footer`

   > [!HINT]
   >
   > The colors may be different depending on your color choice.
   > Declare a style for `nav` after the style for `body` and add `background-color: #8dbfa1;`.
   >
   > Declare a style for `footer` and add `background-color: #8dbfa1;`.

# Grouping selectors

1. We have the same color defined for 2 header selectors, `h1` and `h2`. We can combine the selectors into a selector list. Delete the style for `h2`.

2. Combine the `h1` and `h2` selectors by separating them with a comma like this

   {% codeblock copy %}styles.css{% codeblock %}

   ```css
   h1,
   h2 {
     color: #1d1395;
   }
   ```

   > [!INFO]
   > Define a style for more than 1 selector by comma separating the selector list.

   Refresh your page. Do you see your default color applied?

3. Let's go ahead and set the text color for all headers. Add `h3` to the style. Save and refresh your page to see the color applied to all the headers on the page.

4. There's one other place where we have the same style defined for 2 different selectors- `nav` and `footer`. Let's combine the styles.
   > [!HINT]
   > Delete the style for `footer` and change the selector for `nav` style to `nav, footer`.

# State based selector

1. Select a color that displays when your mouse hovers over the drink menu list items.

2. After the styles for the `.drinks`, create a style for `li` elements. Add the `background-color` property. The background color for all `li` elements changed. Hrm....

3. We want the background to show on hover, so we can use the **Pseudo Class** `:hover`. Change the selector to `li:hover`.

   > [!HINT]
   >
   > {% codeblock copy %}styles.css{% codeblock %}
   >
   > ```css
   > li :hover {
   >   background-color: #deb6de;
   > }
   > ```

4. View your page in Chrome. What happens when you hover over the list items in the drink menu?

5. But we don't want all the `li` tags to hover. Just the ones in the drink menu. We could add a `class` or we can target only the `li` elements in `main` by changing the selector to `main li:hover`.

   > [!INFO]
   > You are using the **Descendant combinator**. A combinator is a special selector. The descendant combinator contains 2 or more selectors with a space between each selector. The first selector is an ancestor of the second in the HTML. Selectors can be HTML elements or classes. So in this case, you are saying
   >
   > _"For all HTML `main` elements that has a descendant `li`, add a color when hovering."_
   >
   > Read more about the [Descendant combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator).

![](images/EveryoneGetsAYay.jpg ":class=image-border")

6. Don't forget to commit your changes again! (You can do this as frequently as you like. Commit early, commit often!)

# Inspect HTML in Chrome

You'll often find yourself needing to look at how your page renders in the browser to troubleshoot issues so let's give that a try.

1. View your website.

2. Right-click on your `<h1>` element and select **Inspect**. This will open up your Chrome Developer Tools (DevTools) to the **Elements** tab and highlight the element in the HTML.

   > [!TIP]
   > Chrome DevTools has a lot of features. We'll use DevTools in upcoming sessions to help us dig deeper into our code.

3. Notice that you can see all the tags that you've added to the page and how they nest inside each other. It should look something like this:
   ![](images/devTools.png ":class=image-border")

4. Notice as you mouse over elements in the DevTools that they highlight in the rendered view above.

   ![](images/devToolHighlight.png ":class=image-border")

5. You can also click the arrows to the left of your `<main>` elements to expand them and see the elements inside them.

In addition to viewing elements, you can make and preview changes here before making them in your code.

1.  In the **Elements** section of the DevTools, double click on the text inside your `<h1>` tag. This should make it editable. Change it to "Hello World" and then press `Enter`

    ![](images/helloWorld1.png ":class=image-border")

2.  Your `<h1>` text should now display "Hello World" on your rendered page.

    ![](images/helloWorld2.png ":class=image-border")

    > [!WARNING]
    > This only lasts until you refresh the page! If you want to make a lasting change you need to make the change to the code in your IDE.

3.  Refresh your page to see the text return to what you have in your code. You can either keep your DevTools open or close them with the small x in the upper right corner of the DevTools.

    > [!INFO]
    > Element inspection comes in handy when you're trying to style your page too!

# Checkpoint

Compare your _styles.css_ against the answer key for your work. It might look a little different depending on the color palette you chose.

> [!CODECHECK] > ![Code from styles.css](images/checkpoint.png)
>
> Hard to read? Compare your _styles.css_ file with our [answer key](https://github.com/KansasCityWomeninTechnology/CSSCompilerPractice/blob/2023-checkpoint-2-selectors/styles.css).
