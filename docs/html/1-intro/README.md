# What is Web Development & HTML

Today we cover what web development is and some HTML basics. In this section of the worksheet, you will modify the _index.html_ file that appears in the starter code.

The _index.html_ file is the main HTML for a web page. HTML is one of the building blocks of a web page. It defines the structure of the page and lays the foundation to then add styles and dynamic content.

**HTML** stands for **H**yper**T**ext **M**arkup **L**anguage.

At the end of this section, you will have a webpage that looks like this:

![](./images/result.png ":class=image-border")

> [!WARNING]
> Before starting the worksheet, please take a moment to review the [Setup instructions](../setup/?id=setup) to ensure you have all the tools and workspace setup you need for today's work.

# Prepare the project for our code

Let's check out what we have in the starter code we gave you and prepare the project for our code.

# Create HTML structure :id=structure

First, let's check out _index.html_.

![](./images/index_html.png ":class=image-border")

You'll see the following code snippet:

   {% codeblock copy %}index.html{% codeblock %}

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1.0" />
       <meta http-equiv="X-UA-Compatible" content="ie=edge" />
       <title>Document</title>
     </head>
     <body>
     
     </body>
   </html>
   ```

> [!EXTRACREDIT]
> Take a look at the spacing in the file. Some tags, such as `head` and `body` indent from their parent tag, `html`. This means they are children of the `html` tag. Can you match up the start and end of the `head`, `body`, and `html` tags?
>
> The `meta` and `title` tags are also children. What tag is `meta` and `title`'s parent? Feel free to grab a mentor to talk out the answers to these questions. They LOVE to help and act as a soundboard!

# HEAD section

In _index.html_, change the text between the `<title></title>` tags. The title displays on the browser tab. Today we'll make a Cocktail Lounge site so change the text from "Document" to "YourName's Cocktail Lounge".

![](./images/tab-change.png ":class=image-border")

> [!INFO]
> The title is in the `head` section. The `head` section contains data telling your browser more information about your page. This is also where you link to your styles and script files.

> [!WARNING]
> You will need to switch to the new tab that opened when you clicked "Go Live" previously, or you won't be able to see the change.

You won't see anything exciting on the page yet, but you should see your title displayed in the page tab.

Most of our work today will be inside the `<body></body>` tags. This is where visible page content goes.

## References and helpful links

[Mozilla Developer Network Head element documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)
