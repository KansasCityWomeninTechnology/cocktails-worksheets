1. We don't want the bullets for any lists. Remove the bullets for all `ul` by creating a global style and setting the `list-style-type` property to "none". Your code should look like this.

    {% filename %}styles.css{% endfilename %}
    ```css
    ul {
        list-style-type: none;
    }
    ```
    Save your file and view in Chrome. The webpage is starting to look better.

    >[!INFO]
    >Learn more about styling lists using [MDN list styling reference](https://developer.mozilla.org/en-US/docs/Learn/CSS/Styling_text/Styling_lists). 

1. We want to add extra space between each list item in the "Small plates" menu by setting the `margin-top` property to "50px" on the list items. Create a style targeting `li` with parent `class="small-plates"`. 

   >[!HINT]
   >We want to declare a style for the selector `li` with parent selector `.small-plates`. We can use the Descendant combinator.
   >
   >Declare a style for `.small-plates li` at the bottom of the file and add `margin-top: 50px;`. 

1. Let's also add a right and left margin to each list item in the "Small plates" menu. Set the values to 15px; Can you guess the property names of the right and left margins?

1. Save your file and view in Chrome. You now have plenty of spacing between each food menu item but the `margin-top` property also added space between the "Small plates" header and list. Let's take care of that extra space next.

1. After the `.small-plates li` style, create another style with the same selector. Since we are overriding the previous style we define it after the original style. We'll add a qualifier to the selector next.

1. In the second definition of the style, add the **Pseudo Class** `first-child` and define the `margin-top` property using the value "0". We are overriding the previous style selectively for the first child, or the first element of the list. Your code should look like this

  {% filename %}styles.css{% endfilename %}
    ```css
    .small-plates li:first-child {
        margin-top: 0;
    }
    ```
    Save your file and refresh the page. The spacing looks better now. 

   >[!INFO]
   >You can also use combinators to declare a property on all `li` except the first in one fell swoop. Instead of having a style for all list items and overriding the first child, you could have written 
   >
   >```css
   >.small-plates li+li {
   >    margin-top: 50px;
   >}
   >```
   >
   >The `+` is the **Adjacent Sibiling** combinator and selects `li` elements directly after the first one. So in this case, you are saying
   >
   >  _"For all HTML elements with the class `.small-plates`, apply a top margin to `li` tags that have a preceding `li` tag."_
   >
   >Read more about the [Adjacent sibling combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Adjacent_sibling_selectors). 
