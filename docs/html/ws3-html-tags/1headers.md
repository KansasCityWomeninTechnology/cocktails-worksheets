1. In VS Code, place your cursor on the blank line between `<body>` and `</body>`.
   >[!INFO]Most HTML elements have an opening and closing tag. The `<body>` tag is the opening tag. The `</body>` tag closes that element.
   
   >[!TIP]The worksheet will specify adding new HTML elements between the opening and closing tags of existing tags. Sometimes it's easier to match up the tags before adding a new element. You got this!

1. Add a header by typing `<h1></h1>`. Write the name of your cocktail lounge between the opening and closing tags.

1. Save your file. The file should reload automatically in Chrome when you have Live Server running. Take a look at your webpage. **We have content!**

   ![](https://media.giphy.com/media/3o6gEeg80PqeJBtsdy/giphy.gif)

1. In VS Code, after the closing `</h1>` tag, press `Enter` to start a new line and add an `<h2>` tag for a subtitle.

1. Add the text "Cocktails with a side of Code". The body section should look something like this

   {% filename %}index.html{% endfilename %}
    ```html
    <body>
        <h1>Coding's Cocktail Lounge</h1>
        <h2>Cocktails with a side of Code</h2>
    </body>
    ```

    >[!INFO]
>There are 6 levels of section headings, `h1` - `h6`. 
>
>If you imagine your HTML as an outline, the highest section level is `h1` and `h6` is the lowest section level. As we move into more details within the webpage, we decrease the header section level. Use the different header levels to categorize content in your web page, not because you want different size text.

1. Exciting! You're rocking now! Show off your webpage to your neighbors. Take a screenshot and upload a picture of your webpage to the **#codingandcocktails** channel in [Slack](http://kcwit.slack.com/)! 
    