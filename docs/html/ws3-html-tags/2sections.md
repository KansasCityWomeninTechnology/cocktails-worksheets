1. After the `<h2></h2>` subtitle, press `Enter` to start a new line. Add a "About" section by typing `<section></section>`.
   >[!INFO]
>There's a lot of different HTML elements. When writing HTML, focus on the content and the meaning of what you are trying to communicate, not the website presentation. Good web development practice recommends doing so and calls this style of coding **Semantic HTML**.
>
>`section` groups standalone content, typically include a header, and helps organize the HTML into logical pieces. Use the element that best describes your content to align with Semantic HTML practices. 
>
>You may have seen or heard of `<div>` as a means to group content. Following best practices, use `<div>` to group elements only for styling purposes, not for content organization. Read more about `<section>` and `<div>` [in the references](./?id=cloud-ide). 

1. Between the opening and closing tags for `<section>`, let's add the "About" header. Since this is the third most important heading on the page, we'll use an `<h3>` tag.
   [!CODECHECK]
Place your cursor between the opening and closing tags for `section`, press `Enter`, and type `<h3>About</h3>`. Your code should look like this
```html
<section>
   <h3>About</h3>
</section>
```
[CODECHECK!]

1. After the "About" header, but still inside the `<section>` element, we should add a description about this fine establishment. Add a paragraph element and type in a description of your choosing. The paragraph element is `<p>`. 
   >[!TIP]Don't forget to close the `<p>` tag.

1. Save your file and preview your page in Chrome. ![](../../images/emojis/star-eyes.png) 
   >[!TIP]Feel free to save your work and preview your page as you code tonight. It's fun to see how each element progresses the creation of the webpage.

1. Now we want to add a new section to the page for "Contact". After the closing tag for `<section>`, add a new section element.
   [!CODECHECK]
Place your cursor after `</section>`, press `Enter`, and type `<section></section>`. Your code should look like this
```html
<section>
   <h3>About</h3>
   <p>A fun place to drink trendy cocktails while learning web development</p>
</section>
<section>
</section>
```
[CODECHECK!]

1. The "Contact" section needs a header and a description, just like the "About" section. Let's start with the header. Add the header and use the text "Contact".

1. Then add a description for the "Contact" section using the text 
   "Stay in contact with us by adding your email address to our mailing list."
   [!CODECHECK]
Place your cursor between the opening and closing tags for `<section>`, press `Enter`, and type `<h3>Contact</h3>`. Then add `<p></p>` tag with the text. Your code should look like this
```html
<section>
   <h3>Contact</h3>
   <p>Stay in contact with us by adding your email address to our mailing list.</p>
</section>
```
[CODECHECK!]

1. Save your file and view it in Google Chrome. Your page should look similar to this:
   
   ![](images/headersSectionsEnd.png ':class=image-border')
