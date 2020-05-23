1. Pick out a color palette to use from [http://colorhunt.co](http://colorhunt.co). Click on the color palette you like to get a bigger view of the colors. Make note of the hex color values displayed when you hover over each color in your chosen palette. 
    >[!INFO]
    >Ensure your colors are a11y friendly by using the WebAIM [Color Contrast Checker](https://webaim.org/resources/contrastchecker/). You can input your selected foreground and background colors to find contrasting colors that improve legibility.
    >
    >Google's [Color Tool](https://material.io/color/) makes this a little easier by pre-defining color palettes with accessible contrast.

1. We'll start applying colors to the main `h1` header first. In _styles.css_ in VS Code, declare a style for `h1` tag above the selector for `img`. Use the `color` property and substitute the hex color you selected for the title like this
    
    {% filename %}styles.css{% endfilename %}
    ```css
    h1 {
        color: #637056;
    }
    ```

1. Save your file and view in Chrome. Do you see the color of your header change? 

1. Repeat to create styles targeting `h2` right after your `h1` style and apply the same color. 

    >[!INFO]
    >Notice the color applies to all `h2` elements, including the "Menu" and "Small plates" text. This is an example of how styles **cascade**. 
    >
    >We might need to override the style for a specific element later, but we want to build a strong foundation to build upon.

1. Save your file and view your page in Chrome.
   
   >[!TIP]
   >Save your _styles.css_ file and view your app often so you can see the changes as we go along. The worksheet will call out specific places to save and view the web page to illustrate a concept, but feel free to save and view your page as often as you want. It helps to see the changes as your write your CSS.   
