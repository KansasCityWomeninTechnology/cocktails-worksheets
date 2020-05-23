1. We have the same color defined for 2 header selectors, `h1` and `h2`. We can combine the selectors into a selector list. Delete the style for `h2`. 

1. Combine the `h1` and `h2` selectors by separating them with a comma like this

   {% filename %}styles.css{% endfilename %}
   ```css
    h1, h2 {
        color: #637056;
    }
   ```

    >[!INFO]
    >Define a style for more than 1 selector by comma separating the selector list. 

    Save and refresh your page. Do you see your default color applied?

1. Let's go ahead and set the text color for all headers. Add `h3`, `h4`, `h5`, and `h6` to the style. Save and refresh your page to see the color applied to all the headers on the page.

1. There's one other place where we have the same style defined for 2 different selectors- `nav` and `footer`. Let's combine the styles.
    
   >[!HINT]
   >Delete the style for `footer` and change the selector for `nav` style to `nav, footer`.

