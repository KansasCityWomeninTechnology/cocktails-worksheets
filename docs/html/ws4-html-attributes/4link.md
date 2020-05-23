1. Links use the anchor element, `<a>`. We'll wrap the list items "About" and "Contact" in the navbar to link to their respective sections. In VS Code, place your cursor after the opening `<li>` tag and before the text **"About"** and type `<a>` to create a the anchor tag. Add the closing `</a>` after the text. The **"About"** text should now look like this:

    {% codeblock %}index.html{% codeblock %}
    ```html
    <li><a>About</a></li>
    ```

1. Clicking "About" link should move to the **"About"** section of the page. We need to specify the hyperlink reference source for the anchor (where the link takes you when you click on it). This is an attribute `href`. Inside the opening `<a>` tag, add the attribute `href` with the value "#about".

   >[!INFO]
   >The '#' in front of the "about" is a special symbol that denotes the id of an element. It specifies that the link is within this web page and not to another webpage on the internet. We'll use element ids again when we write JavaScript later in the curriculum.

   >[!EXTRACREDIT]
   >Here is another example of using an attribute to tie HTML elements together, just like we did for input. Now that we have a value for the attribute `href`, can you guess what we need to do to link the `<a>` element to the corresponding HTML element?
   >
   >Feel free to talk it through with your mentor before moving on to the next step of the worksheet.

1. Find the `<section>` element for "About" in your _index.html_. This is where we add the link for the anchor. Just like we did for input, we'll use an `id` attribute. Inside the opening `<section>` tag, add the attribute `id` with the value "about".

1. Save your file and preview in Chrome. The "About" text in the navbar at the top of the page now has an underline. You can test your link now.
   >[!TIP]
   >Since we don't have a lot of content on our page it may not appear to work at first. If you shrink the size of your browser window down so it is about half as tall, try clicking on the "About" navigation item again and the "about" section should show at the top!

1. Now let's do "Contact". In VS Code, repeat the same steps we took for the "About" section but apply it to "Contact". Don't forget you have to add the anchor and update the id for the section.

   >[!HINT]
   >Wrap the "Contact" text in the list with `<a>` tag and add the `href` attribute. Set the value to "#contact". Add the closing `</a>` tag. Find the `<section>` for "Contact" and add the attribute `id`</code>`. Set the value to "contact". Your code should look like this
   >```html
   ><li><a href="#contact">Contact</a></li>
   >... skipping code here
   ><section id="contact">
   >   <h3>Contact</h3>
   >...remaining code for webpage here
   >```

1. Save your file and preview in Chrome.
