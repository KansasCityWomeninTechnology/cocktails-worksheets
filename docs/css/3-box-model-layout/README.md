# Add spacing

1. We don't want the bullets for any lists. Remove the bullets for all `ul` by creating a global style and setting the `list-style-type` property to "none". Your code should look like this.

   {% codeblock copy %}styles.css{% codeblock %}

   ```css
   ul {
     list-style-type: none;
   }
   ```

   View your file in Chrome. The webpage is starting to look better.

   > [!INFO]
   > Learn more about styling lists using [MDN list styling reference](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists).

1. We want to add extra space between each list item in the "Drinks menu" section by setting the `padding-top` property to "40px" on the list items. Create a style targeting `li` with parent `class="drinks"`.

   > [!HINT]
   > We want to declare a style for the selector `li` with parent selector `.drinks`. We can use the Descendant combinator.
   >
   > Declare a style for `.drinks li` at the bottom of the file and add `padding-top: 40px;`.

2. Let's also add a right and left margin to each list item in the "Drinks menu" section. Set the values to 15px; Can you guess the property names of the right and left margins?

   > [!HINT]
   >
   > {% codeblock copy %}styles.css{% codeblock %}
   >
   > ```css
   > .drinks li {
   >   margin-right: 15px;
   >   margin-left: 15px;
   > }
   > ```

3. View your file in Chrome. You now have plenty of spacing between each drink menu item.

# Add normalization

Many browsers have their own pre-settings such as margins, paddings and font styling. Normalizing evens out the difference between browsers by resetting the browser default stylings so your website can be consistent no matter what browswer you are using.

1. Add the following to the top of _styles.css_.

   {% codeblock copy %}styles.css{% codeblock %}

   ```css
   html,
   body,
   div,
   h1,
   h2,
   h3,
   h4,
   h5,
   h6,
   p,
   a,
   img,
   li,
   aside,
   footer,
   nav,
   section {
     margin: 0;
     padding: 0;
     border: 0;
     font-size: 100%;
     font: inherit;
   }
   ```

   The webpage now uses 100% of the width of the browser tab.

# Apply layout styling for each area

## Navigation

Let's add some styling to the `nav` element with Grid.

1. Let's add `display: grid;` to `.navbar ul`.

2. Then we will add `grid-template-columns: repeat(4, 100px);` to create 4 columns of 100px width.

3. To add gutter(space) between grid items, we will add `grid-gap: 10px;`

4. Let's align the grid to right by adding `justify-content: right;`

5. Then let's align texts in the grid items to center by adding `justify-items: center;`

6. The navigation text in the hyperlink doesn't stand out enough. Let's make the navigation text larger by adding `font-size: 1.5em;`

We still have default styling for the hyperlink such as underline. Let's style `a` tag in `nav` element.

1. Remove the hyperlink underline using `text-decoration: none;`.

2. Change the text color to `white`.

   {% codeblock copy %}styles.css{% codeblock %}

   ```css
   nav a {
     color: white;
     text-decoration: none;
   }
   ```

## Footer

In the footer, the copyright text needs to be a contrasting color and centered. Also set the `height` to `50px` and padding on top.

   > [!HINT]
   >
   > {% codeblock copy %}styles.css{% codeblock %}
   >
   > ```css
   > footer {
   >   padding-top: 20px;
   >   height: 50px;
   >   color: white;
   >   text-align: center;
   > }
   > ```

# Checkpoint

Compare your _styles.css_ against the answer key for your work. It might look a little different depending on the color palette you chose.

> [!CODECHECK]
>
> Compare your _styles.css_ file with our [answer key](https://github.com/KansasCityWomeninTechnology/CSSCompilerPractice/blob/2023-checkpoint-3/styles.css).

Vew your page in Chrome. ![](../../images/emojis/party-popper.png)
