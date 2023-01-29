4. You can have more than 1 attribute on a HTML element. Image tags have another attribute for alternate content, `alt`. Inside the `img` tag after the `src` attribute, type `alt="Image of cocktail"`. You can replace "Image of cocktail" to text better describing your image. Your image tag will look like this

   {% codeblock %}index.html{% codeblock %}

   ```html
   <img src="...jpg" alt="Image of cocktail" />
   ```

   > [!INFO]
   > The `alt` attribute content displays if the browser can't show (aka **render**) your image. Screen readers use the `alt` for better accessibility to help visually impaired users of the site.
