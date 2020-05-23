1. The following two styles apply to both the navigation and footer anchor text. Find the selector to apply the styles from your already created styles.

1. Pick out an a11y friendly contrasting color for the navigation and footer anchor tag text and set the color property. 

1. Remove the hyperlink underline using `text-decoration: none;`.

### Navigation text 
1. The navigation text should be right aligned. In the `nav` style, add `text-align: right;`.

1. The navigation text in the hyperlink doesn't stand out enough. Make the text bold by adding `font-weight: bold;`.

1. Let's also make the navigation text larger by adding `font-size: 1.5em;`.


### Footer text

1. In the footer, the copyright text needs to be a contrasting color and both the copyright text and social icons centered. Using the style rules we already created and what we learned tonight, apply the styles to do so.
   
   >[!HINT]
   >In the existing <code>footer</code> selector:
   >
   >Add `color` to set color and add the same color you used for the anchor elements.
   >
   >Add `text-align: center;` to center.

1. Add a little bit of space between the copyright text and social icons by adding a 15px margin between the two elements. Use what we learned tonight to do so.

   >[!HINT]
   >There's multiple ways to target the copyright text in the footer.
   >
   >One way is to use Descendant combinator to target `footer p` selector and add a 15px bottom margin.
   >
   >Another way is to target `footer ul` and add a 15px top margin.
   >
   >Another way is to use the Child combinator to target `footer > p` selector.
   >
   >Can you think of other ways?

1. Save your file and view your page in Chrome. ![](../../images/emojis/party-popper.png)

1. Share your success by posting a screenshot to Slack!  


![](https://media.giphy.com/media/3ohhwo4PzDFaz2sADu/giphy.gif)