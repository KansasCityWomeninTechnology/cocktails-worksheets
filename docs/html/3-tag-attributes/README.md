# HTML Element Attributes

Our web page is coming together. But web pages have images, and links. All these HTML elements use **attributes** for extra metadata it needs to work.

We'll add an image, links to practice using attributes.

# Find and download a fun and exciting image

Websites have eye catching images. Let's find one we like and get it ready to add to our site!

1. in "html" folder you created during the "Intro to HTML" section, create a new folder named "images"

1. In Google Chrome, navigate to [flickr.com](http://flickr.com).

1. Search for a cocktail image.

1. Change the license filter from "Any License" to "Commercial use allowed".

1. Choose your favorite image, click on it and click on the download icon in the lower right corner. You get to choose what size you'd like on your page. You'll want to save it into your "CodingAndCocktails/session1/html/images" folder. Name it something easy to remember.

   ![](images/download.png)

# Add an image

Now it's time to add the image to our website. We get to use our first attributes to provide the info the browser needs to display the image.

1. Images elements don't require closing tags. In VS Code, find the "About" section. Add an `<img />` tag below the "**About**" header on your page to add an image.

   > [!INFO]
   > We created a **self-closing** tag. Self-closing tags have the `/>` written into the tag. HTML elements that don't require content or derive their information from attributes are self-closing.

1. We need to add metadata to the `<img />` tag so that the browser knows what image to display. The first one we'll add is the image source, `src`. The `src` attribute tells your code where to look for your image. Place your cursor inside the`<img />` tag after the `g` and press `Space`. Type `src="FILENAME"`. Your image tag will look like this

   {% codeblock %}index.html{% codeblock %}

   ```html
   <img src="FILENAME" />
   ```

   > [!EXTRACREDIT]
   > We now have an image element with an invalid source location. Try saving the _index.html_ and viewing it in Chrome. We see the dreaded broken image icon! What happens if you open Chrome DevTools?

1. Now we need to replace the "FILENAME" with the real filename of the image including the file extension.

   > [!INFO]
   > We're setting the value of the attribute `src` to the filename. You'll see instructions directing you to set the value of an attribute throughout this section. Use the same format `attribute="value"`.

   > [!TIP]
   > We created a directory(folder) called `images` to hold the cocktail image. Make sure to include the path for the value of the attribute `src`. It will look like `DIRECTORYNAME/FILENAME`.

1. You can have more than 1 attribute on a HTML element. Image tags have another attribute for alternate content, `alt`. Inside the `img` tag after the `src` attribute, type `alt="Image of cocktail"`. You can replace "Image of cocktail" to text better describing your image. Your image tag will look like this

   {% codeblock %}index.html{% codeblock %}

   ```html
   <img src="./images/cocktail.jpg" alt="Image of cocktail" />
   ```

   > [!INFO]
   > The `alt` attribute content displays if the browser can't show (aka **render**) your image. Screen readers use the `alt` for better accessibility to help visually impaired users of the site.

1. Save your file and preview it in Chrome. Do you see your image? ![](../../images/emojis/party-popper.png)

   > [!TIP]
   > Not seeing your image? Try opening up Chrome DevTools to see if there's an error. Does your filename (or path) of the image match up to what's in the `src` attribute?

# Use `anchor` elements for navigation

A navbar isn't helpful if it doesn't navigate to the different sections of the webpage. In this section we'll add `anchor` elements to the list of sections in the navbar and make it link their respective section in the webpage. The linked section also needs an attribute for hyperlinks to work.

1. Links use the anchor element, `<a>`. We'll wrap the list items "About" and "Contact" in the navbar to link to their respective sections. In VS Code, place your cursor after the opening `<li>` tag and before the text **"About"** and type `<a>` to create a the anchor tag. Add the closing `</a>` after the text. The **"About"** text should now look like this:

   {% codeblock %}index.html{% codeblock %}

   ```html
   <li><a>About</a></li>
   ```

1. Clicking "About" link should move to the **"About"** section of the page. We need to specify the hyperlink reference source for the anchor (where the link takes you when you click on it). This is an attribute `href`. Inside the opening `<a>` tag, add the attribute `href` with the value "#about".

   > [!INFO]
   > The '#' in front of the "about" is a special symbol that denotes the id of an element. It specifies that the link is within this web page and not to another webpage on the internet.

   > [!EXTRACREDIT]
   > Here is an example of using an attribute to tie HTML elements together. Now that we have a value for the attribute `href`, can you guess what we need to do to link the `<a>` element to the corresponding HTML element?
   >
   > Feel free to talk it through with your mentor before moving on to the next step of the worksheet.

1. Find the `<section>` element for "About" in your _index.html_. This is where we add the link for the anchor. We'll use an `id` attribute. Inside the opening `<section>` tag, add the attribute `id` with the value "about".

1. Save your file and preview in Chrome. The "About" text in the navbar at the top of the page now has an underline. You can test your link now.

   > [!TIP]
   > Since we don't have a lot of content on our page it may not appear to work at first. If you shrink the size of your browser window down so it is about half as tall, try clicking on the "About" navigation item again and the "about" section should show at the top!

1. Now let's do "Contact". In VS Code, repeat the same steps we took for the "About" section but apply it to "Contact". Don't forget you have to add the anchor and update the id for the section.

   > [!HINT]
   > Wrap the "Contact" text in the list with `<a>` tag and add the `href` attribute. Set the value to "#contact". Add the closing `</a>` tag. Find the `<section>` for "Contact" and add the attribute `id`</code>`. Set the value to "contact". Your code should look like this
   >
   > ```html
   > <li><a href="#contact">Contact</a></li>
   > ... skipping code here
   > <section id="contact">
   >   <h3>Contact</h3>
   >   ...remaining code for webpage here
   > </section>
   > ```

1. Save your file and preview in Chrome.

You did it! You created a website!

![](https://media.giphy.com/media/3o6ZtlGkjeschymLNm/giphy.gif)

# Checkpoint

Compare your _index.html_ against the answer key for your work so far. It might look a little different depending on your spacing and text.

> [!CODECHECK] > ![](./images/checkpoint.png)
>
> You can also compare your _index.html_ file with our [answer key](https://github.com/KansasCityWomeninTechnology/AnswerKeys/blob/checkpoint-html-attributes/html/index.html) if the image is too difficult to read.

## References and helpful links

[Mozilla Developer Network anchor element documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)
