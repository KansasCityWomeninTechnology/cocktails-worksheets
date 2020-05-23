1. Select a border color to use between the navigation bar and menu. We'll use the same border color between the menu and the footer.

1. Create a style definition for `nav`, add a property for the bottom border and set your selected color as the background. The property will look like `border-bottom: 5px solid #f1a250;`. 

   >[!INFO]
   >We already have a style that applies `nav, footer`, but in this case, we have different styles to apply to both `nav` and `footer`. By following best practices for cascading styles, define the `nav` style after the style for `nav, footer`. 
   >
   >To define styles for the same element, we set it up like a pyramid. We define the foundation of style rules that target a larger selector (like `nav, footer`) then add rules for a smaller selector (like `nav`).

1. Repeat for the `footer` except use a top border.

   >[!TIP]
   >The top border property is `border-top`.

1. Turn your attention towards the drink menu by creating a style for `class="item"`. Follow best practices for where to create the style based on selectivity rules.

   >[!HINT]
   >We want to declare a style for the selector `.item` after the global styles for selectors based on HTML elements, but before `.small-plates`.

1. Define borders between each drink in the drink menu by adding a dotted top border to each item in the list. In the style for `class="item"`, apply a thin dotted top border. The style will look like
    
    {% filename %}styles.css{% endfilename %}
    ```css
    .item {
        border-top: 1px dotted #637056;
    }
    ```
1. Add a border radius to the images in the drink menu. Add this new property to the existing style you already created to resize the images. By setting the value "50%", you make a circular border around the image. 

   >[!HINT]
   >We already have a style declared for `img`. Add `border-radius: 50%;` to it. 
    
1. Save your file and view in Chrome. Looking good!