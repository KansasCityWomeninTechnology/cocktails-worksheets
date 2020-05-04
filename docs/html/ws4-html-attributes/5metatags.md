1. Inside the `<head>` section of your file, add a `<meta>` tag. The `meta` tag is self-closing and has 2 attributes, `name` and `content`.

1. Inside the `meta` tag, add a`name` attribute. Set the value of `name` to "author". 

1. Add the `content` attribute. Set the value of `content` to your name. You are the author of this website!

1. Repeat the steps above for description `meta` tag. Create a `meta` tag with a `name` attribute using "description" as the value.

1. Fill in the `content` attribute for "description" to describe your cocktail lounge. This is the text that Google and other search engines used for website summaries in search results.

1. Create another `meta` tag for keywords and fill in the `content` attribute for "keywords" using a comma separated list of words for search engines to use, such as "Cocktails,Code".

      [!CODECHECK]
Your code should look like this
```html
<!DOCTYPE html>
<html lang="en">
   <head>
      ... other head tags here
      <meta name="author" content="Coding &amp; Cocktails">
      <meta name="description" content="Yummy cocktails served with a side of code">
      <meta name="keywords" content="Cocktails,HTML,Code">
    </head>
   <body>
   </body>
</html>
```
   [CODECHECK!]

1. Save your file. You won't see any visible changes, but under the covers, your website is now more searchable.