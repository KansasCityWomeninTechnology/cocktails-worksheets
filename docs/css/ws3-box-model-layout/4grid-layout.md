1. Let's first clean up some spacing in the small plates section. Like the "Menu" section, we want the heading labeled "Small plates" to have a little space. To the "Small plates" header, add a margin with 5px on top and bottom, and 0px on the left and right.

   >[!HINT]
   >We have to specify the `h2` inside the `class="small-plates"`. We can use the shortcut notation to specify 5px top and bottom margin and 0px left and right margin. To the selector for `.small-plates h2` set the style `margin: 5px 0;`.

1. Take advantage of the shorthand notation we learned to clean up the styles for `margin-top`, `margin-left`, and `margin-right` defined for the small plates list items. 

   >[!HINT]
   >Remember the mnenomic "TROUBLE"? We can apply it here. We want 50px top, 15px right, 15px left, and 0px bottom margin. The approach is different depending on whether you used the `:first-child` pseudo class or `+` adjacent sibling combinator.
   >
   >For the pseudo class, apply the short hand `50px 15px 0 15px` to `margin`. The pseudo class will override `margin-top` from the `.small-plates li`. This is why we define the styles for the pseudo class after the style for all the elements in the list.
   >
   >For the adjacent sibling combinator, apply the short hand `0 15px` to `margin`. The style for the adjacent sibling combinator will override `margin-top` from the `.small-plates li`. As with the pseudo class, this is why we define the style specifically for adjacent siblings after the style for all the elements in the list.

1. Now let's use CSS Grid to align the drinks and small plates menus. In _index.html_, notice the drinks menu and small plates menu are both children of a parent `main` with `class="grid-container"`. We will target this class for grid layout. 

   In _styles.css_, declare a style for `class="grid-container"` in _styles.css_ below your styles for `class="hero"`. Add style `display: grid;`.

1. We want the drinks menu on the left with 75% width allocated to it. Drinks are, of course, most important. We want the small plates menu on the right with the remaining width allocation to it. 

   Create a grid with 2 columns with specified width by adding `grid-template-columns: 75% auto;`. Your style should look like
   
   {% filename %}styles.css{% endfilename %}
    ```css
    .grid-container {
        display: grid;
        grid-template-columns: 75% auto;
    }
    ```
1. Save your file and view in Chrome. You have two columns! ![](../../images/emojis/party-popper.png)

1. Feel free to share a screenshot on Slack so we can all celebrate together!

