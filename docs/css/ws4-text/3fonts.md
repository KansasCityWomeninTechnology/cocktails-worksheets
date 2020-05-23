1. We always want to start with defining styles for global elements. In this case, we'll target `p` elements. Set the `font-size` to `1.25em`.

   >[!INFO]
   >Why use `em` instead of `px` for font size? `em` is a calculated font size based off of the parent's font value. Read more about the different ways to set font size in "Possible approaches" section of [MDN documentation on font size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size).

### Hero text
1. Let's increase the size of the text for the header on top of the hero image starting with the `h1` tag. We want to only target the `h1` element. Set the font size of `h1` to "5em" by adding `font-size: 5em;`. 

1. Center align the hero text by using the `text-align` property. Set `text-align: center;` to the styles for `class="hero-text"`.

1. The `h1` text and the `p` text on the hero image look good, but the `h2` text looks small. Set the font size of the `h2` text only in the hero title to 1.5em.

1. The text color for the header and paragraph are different, and depending on the color you selected earlier, might not stand out enough. Pick out a color for the text on the hero image and apply it to `class="hero-text"`. ![](.../../images/emojis/confused-face.png)

   >[!EXTRACREDIT]
   >Why did the color apply to only paragraph text? This is because of cascading effects and CSS ordering rules. Class selectors have higher priority than element selectors, but we targeted the class `.hero-text` on the parent `div` element. 
   >
   >The color defined in `.hero-text` styles applies to all text inside the `div`, except the style for headers overrode the color. Since we didn't define a color for paragraph text, the color for the parent element (`div`) applies. 
   >
   >We need to increase specificity to apply colors to both paragraph and header text.

1. We'll create a style with more specificity. Create a new style for `class="hero-text"` after the existing one and move the color to the new style rules. You'll have two style rules for `.hero-text`, the last one with only color in it. You won't see any changes on your webpage yet.

1. We can use **Child** combinator to target child elements with greater specificity. To the style rules for `.hero-text` with color, change the selector to `.hero-text > *`.

   >[!INFO]
   >The `>` operator signifies child elements. This applies to direct child elements of the HTML element with `class="hero-text"`. The character `*` is the universal selector and means any HTML element instead of a specific one. This means
   >
   > _"For elements with `class="hero-text"`, apply the style to all its direct children."_
   >
   >Using the descendant combinator, you could have also used a specific element, such as `.hero-text > h1`. This means
   >
   > _"For elements with `class="hero-text"`, apply the style to its direct child `h1` elements."_
   >
   >Read more about [Child combinator](https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator).

   >[!EXTRACREDIT]
   >There's more than one way to solve the problem of applying color to both paragraph and header text. Using what you know about CSS specificity and the **Descendant** combinator, think of some other ways you can apply the color. Feel free to talk it out with your mentor!

### Drink Menu
1. Increase the size of the `h2` elements in the drinks menu to 3em.

   >[!HINT]
   >Apply the style to the existing selector for `.drinks h2`.

1. Each drink title needs to be a little larger. In _index.html_, we see the drink titles are `h3` elements. They also have a `class="beverage"` assigned to it. We can create a style for `h3` with the `class="beverage"` by using the selector `h3.beverage`. Set the font size to 2em.

   >[!EXTRACREDIT]
   >Notice there's no space between the element `h3` and the class `.beverage` in the selector.
   >
   >When there are no spaces between individual elements of selector, it means both individual elements apply. In this case, we're saying
   >
   >  _"For `h3` elements that also have the class attribute `beverage`, apply the style."_
   >
   >There more than one way to target the drink titles styles. What are some other ways using what you've learned about **Descendant** and **Child** combinators? Feel free to talk it through with your mentor!

### Small plates menu
1. Set font size to the existing style for `class="small-plates"` to 1.5em.

1. The "Small plates" header title needs to be 2em and centered. Based on what we learned tonight, can you apply these styles? 
  
  >[!HINT]
  >Find the style for `.small-plates h2` to add the following styles:
  >
  >Add `font-size: 2em;` to set size.
  >
  >Add `text-align: center;` to center.
