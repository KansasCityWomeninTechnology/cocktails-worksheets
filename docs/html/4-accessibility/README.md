# Accessibilty

Now that we are done with the content, we need to check if our website is inclusive.

# Add alt attribue

You can have more than 1 attribute on a HTML element. Image tags have another attribute for alternate content, `alt`.

1. Inside the `img` tag after the `src` attribute, type `alt="Image of cocktail"`. You can replace "Image of cocktail" to text better describing your image. Your image tag will look like this

   {% codeblock %}index.html{% codeblock %}

   ```html
   <img src="...jpg" alt="Image of cocktail" />
   ```

   > [!INFO]
   > The `alt` attribute content displays if the browser can't show (aka **render**) your image. Screen readers use the `alt` for better accessibility to help visually impaired users of the site.

# Check with lighthouse

We will use lighthouse to check our accessibility score.

1. Go to `lighthouse` tab in DevTools.
   ![](images/lighthouse.png ":class=image-border")
2. Click `Analyze page load` check our website score.
   ![](images/lighthouse-analyze.png ":class=image-border")
3. Check your score and see where you can improve
   ![](images/lighthouse-score.png":class=image-border")

Great job with your website! Share your success by posting a screenshot to Slack!
![](https://media.giphy.com/media/LQFNwVlQ4B5FtStbip/giphy.gif)
