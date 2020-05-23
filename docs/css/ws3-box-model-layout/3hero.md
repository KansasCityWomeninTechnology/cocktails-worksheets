1. Open _index.html_ and find the `section` containing the text containing title of the web page, "LadyDev Bar &amp; Grill". Because we want our hero image to fill the entire title area, in _styles.css_ declare a style for `class="hero"` and set the height to 600px.

1. Add a background image to hero section by adding 
    
   {% codeblock %}styles.css{% codeblock %}
   ```css   
      background: url("../images/hero.jpg") no-repeat center top;
   ```

   Your title text might not stand out so well any more. We'll fix that up in a bit.
   
1. Save your file and view your page in Chrome. Nice job, smarty pants!

   ![](https://media.giphy.com/media/3o7TKBbkeuhqszIhuE/giphy.gif)

    >[!INFO]
    >Why did we have to add `no-repeat center top` to the image? We used shorthand properties to specify the image shouldn't repeat, center the image, and display image from top.
    >
    >Refer to [MDN documentation for background property](https://developer.mozilla.org/en-US/docs/Web/CSS/background).

1. But we want it to expand across the entire width of the page. Let's resize it. In the same style for `class="hero"`, add `background-size: cover;` after the `background` property.

    >[!INFO]
    >Refer to [MDN documentation for background-size property](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size).

1. The text on the hero image is squished against the top of the image. Open _index.html_ to find a `div` with `class="hero-text"`. Create a selector targeting the class `.hero-text` and set a top padding to `125px`.

1. We want the text to only display on half of the image, and not take up the entire width of the image. Add the style `width: 50%;` to allow the text only 50% of the width of the browser tab.





