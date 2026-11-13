<div>
    <img src="images/logo.png" style="float: left; margin: 0px 15px 15px 0px; height:125px;">
    <h2 style="display:inline-block;margin-top:1em;">Coding &amp; Cocktails: The Shaker</h2>
    <h3 style="margin-top:0;margin-bottom:2em;">Let's Build a Portfolio Website - CSS</h3>
</div>

### CSS

Now that you've got a few pages for your portfolio, let's get them styled.

If you joined us for the CSS session, you're all set. If you haven't, here's the basic idea: CSS tells the browser how your pages should look. Every style is applied to one part of your page, like a heading being a specific size, font, or color.

Open the **css** folder in your file list and double-click on the _**styles.css**_ file. It should be empty.

Everything you write for this part of the project goes in this file.

The many different browsers that exist have default rules to style plain HTML. These default rules differ between all the browsers. This can mean that your page can look a bit different, depending on which browser you use to view it.

To level the playing field and to provide cross-browser consistency, many developers like to "reset" the built-in browser styling or apply so-called "normalizations" to the CSS before adding their own styling. 

A reset clears the browser's built-in styles completely, so you start from a blank slate. A normalization keeps most of the browser's styles but adjusts them so that every browser displays your page the same way. Either one is optional, and both are common in real projects. If you'd like to try one, look up a "CSS reset" or "CSS normalization" example through the MDN links in the sidebar, and copy the one you choose to the top of your styles.css file.

It's good to spend some time thinking about how you want your pages to look. Take a look at some web pages that you like, and some that you don't. Figure out what resonates most with how you want your portfolio to appear, then plan out on paper where you want elements of your page to appear and what they should look like before you start applying CSS.

Your pages only load your styling if index.html points to it. Open index.html and look in the top section of the file, between the <head> tags, for a line that links to the styles.css file. If you don't see it, add a style sheet link there that points to css/styles.css, and save. That line is how the browser knows to load your styles.css file whenever it loads the page.

Now go back to styles.css and write your first rule. Pick one element on one of your pages and give it a style, like a color or a font. Save the file and open that page in your browser. You should see your change right away. If you don't, make sure the line linking to styles.css is in your index.html, and that the file name is spelled exactly to match styles.css.

Don't forget to commit your changes to your repo!