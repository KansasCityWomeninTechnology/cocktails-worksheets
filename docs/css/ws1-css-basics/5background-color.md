1. Select a background color for the entire page and add it to the top of _styles.css_ by using the HTML `body` selector and `background-color` property. 

   {% codeblock %}styles.css{% codeblock %}
    ```css
    body {
        background-color: #fefaec;
    }
    ```
    
    >[!INFO]
    >The `body` is the parent element for the website so setting a style here applies to every element within **unless** it's overridden. 
    >
    >Organize your CSS by setting "global" styles that apply to all elements at the top of the file and target styles for specific elements after global styles. Declare styles for specific elements in vertical order as it appears in the HTML to make it easy to find later.

1. Select a background color for the "Small plates" menu. 

1. Note the HTML element for "Small plates" in the _index.html_. 

   >[!TIP]
   >You can search for and find "Small plates" in the _index.html_ in VS Code. In the toolbar, select **Edit** :fas fa-long-arrow-alt-right: **Find in Files** or click on the magnifying glass on the left toolbar (where you installed Extensions). You can also use a [keyboard shortcut](/css/references/).

1. Since "Small plates" section is further down the file, we'll add the style at the bottom of the _styles.css_. "Small plates" is in a `section` element, let's create a style for the `section` selector and set the `background-color`.

1. Uh oh! We set the background color for all `section` elements, including the drink menu and about sections. That's not what we wanted so let's fix it. The HTML element for "Small plates" also has a `class` attribute name `small-plates`. Change the selector from `section` to `.small-plates`.

   >[!INFO]
   >When applying CSS rules to `class` attributes, prepend a `.` to the selector.

   >[!INFO]
   >This is an example of overriding a global style. The background color for the entire page is one color, but we defined a different color part of the view.  
   >
   >Using the element's `class` to allow us to target only the elements with the `class` name, in this case just the "Small plates" section, instead of all elements of the same type.

1. To help make the navigation and footer area pop, select a background color to use. Look at the _index.html_ file to identify the selectors for the navigation and footer sections. Since these are global styles, declare the styles near the top of _styles.css_ file.

   >[!HINT]
   >
   >The colors may be different depending on your color choice.
   >Declare a style for `nav` after the style for `body` and add `background-color: #cb6f10;`. 
   >
   >Declare a style for `footer` and add `background-color: #cb6f10;`. 
