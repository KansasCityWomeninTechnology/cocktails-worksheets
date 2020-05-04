1. We want to add the navigation bar at the very top of the web page. Place your cursor after the opening tag for `<body>` and press `Enter`. You are now adding HTML before the `<h1>` tag.

1. Navigation sections have their own HTML element called `nav`. Add a `nav` element (don't forget the closing tag). Your code will look something like this.

   {% filename %}index.html{% endfilename %}
    ```html
    <body>
        <nav>
        </nav>
        <h1>Coding's Cocktail Lounge</h1>
        Remaining code for subtitle and sections...
    </body>
    ```

1. Inside the `nav` element, we want to add a list of sections we created, "About" and "Contact". To create an unordered list, add a `ul` element. 

   >[!INFO]
There are 2 types of lists-- **u**nordered (bulleted) **l**ists and **o**rdered (numbered) **l**ists. Website navigation is often an unordered list.

1. Each item in the unordered list has its own tag, `li`. Inside the `ul` element, add two `li` elements with the text "About" and "Contact".
   [!CODECHECK]
Place your cursor after `<ul>`, press `Enter`, and type `<li>About</li>`. Add a new `<li>` for "Contact". Your code should look like this
```html
<body>
   <nav>
      <ul>
         <li>About</li>
         <li>Contact</li>
      </ul>
   </nav>
   <h1>Coding's Cocktail Lounge</h1>
   Remaining code for subtitle and sections...
</body>
```
   [CODECHECK!]