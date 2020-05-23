1. Select a color that displays when your mouse hovers over the hyperlink tags in your navigation bar and footer.

1. Between the styles for the `img` and `.small-plates`, create a style for `a` elements. Add the `background-color` property. The background color for all `a` elements changed. Hrm....

1. We want the background to show on hover, so we can use the **Pseudo Class** `:hover`. Change the selector to `a:hover`.

1. Save your file and view in Chrome. What happens when you hover over the links in the navigation bar?

    ![](https://media.giphy.com/media/B0vFTrb0ZGDf2/giphy.gif)

1. But we don't want all the `a` tags to hover. Just the ones in the navigation. We could add a `class` or we can target only the `a` elements in `nav` by changing the selector to `nav a:hover`.

    >[!INFO]
    >You are using the **Descendant combinator**. A combinator is a special selector. The descendant combinator contains 2 or more selectors with a space between each selector. The first selector is an ancestor of the second in the HTML. Selectors can be HTML elements or classes. So in this case, you are saying 
    >
    > _"For all HTML `nav` elements that has a descendant `a`, add a color when hovering."_
    >
    >Read more about the [Descendant combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator). 

    >[!EXTRACREDIT]
    >Group styles for the same parent element together to make it easier for yourself. Group all the `nav` style together, but order by specificity.


