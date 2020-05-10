1. Images elements don't require closing tags. In VS Code, find the "About" section. Add an `<img />` tag below the "**About**" header on your page to add an image.
   >[!INFO]
   >We created a **self-closing** tag. Self-closing tags have the `/>` written into the tag. HTML elements that don't require content or derive their information from attributes are self-closing.


1. We need to add metadata to the `<img />` tag so that the browser knows what image to display. The first one we'll add is the image source, `src`. The `src` attribute tells your code where to look for your image. Place your cursor inside the`<img />` tag after the `g` and press `Space`. Type `src="FILENAME"`. Your image tag will look like this

   {% filename %}index.html{% endfilename %}
   ```html
<img src="FILENAME"/>
   ```

   >[!WORKING]
>We now have an image element with an invalid source location. Try saving the _index.html_ and viewing it in Chrome. We see the dreaded broken image icon! What happens if you open Chrome DevTools?

1. Now we need to replace the "FILENAME" with the real filename of the image including the file extension.

   >[!INFO]
   >We're setting the value of the attribute `src` to the filename. You'll see instructions directing you to set the value of an attribute throughout this section. Use the same format `attribute="value"`. 

   >[!TIP]
   >If you created a directory structure to hold the image following what we learned in front-end architecture section, make sure to include the path just like you did earlier in the worksheet.

1. You can have more than 1 attribute on a HTML element. Image tags have another attribute for alternate content, `alt`. Inside the `img` tag after the `src` attribute, type `alt="Image of cocktail"`. You can replace "Image of cocktail" to text better describing your image. Your image tag will look like this

   {% filename %}index.html{% endfilename %}
   ```html
<img src="FILENAME" alt="Image of cocktail" />
   ```

   >[!INFO]
   >The `alt` attribute content displays if the browser can't show (aka **render**) your image. Screen readers use the `alt` for better accessibility to help visually impaired users of the site.
   

1. Save your file and preview it in Chrome. Do you see your image? ![](../images/emojis/party-popper.png)

   >[!TIP]
   >Not seeing your image? Try opening up Chrome DevTools to see if there's an error. Does your filename of the image match up to what's in the `src` attribute?

