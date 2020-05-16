# Bonus 

>[!TIP]
>**Hey Slacker!**
>
>Remember, we're here to help.
>Join the KCWiT #codingandcocktails Slack Channel: [kcwit.slack.com](http://kcwit.slack.com)


We'll download a pre-created stylesheet and add a link element in the header to use the styles.

1. Create a folder for the stylesheet inside your "CodingAndCocktails/session1/html" folder following the techniques we learned for front-end architecture.
   >[!EXTRACREDIT]
>Need a hint?
>
>A stylesheet is a **CSS** file. What folder structure did you use in the front-end architecture section to store CSS files? 

1. In VS Code, create a file named _main.css_ inside the new folder you created.

1. In a new browser tab, navigate to [Coding & Cocktails provided stylesheet](https://raw.githubusercontent.com/KansasCityWomeninTechnology/AnswerKeys/master/html/assets/css/main.css). Copy the contents of the file and paste it into _main.css_. Save _main.css_.

1. In the `head` section of your _index.html_ file, add this tag right above the closing `</head>` tag:

   ```html
<link rel="stylesheet" href="DIR/main.css" />
   ```
   
   >[!INFO]
>Hey that `href` attribute looks familiar! This time we're using the `href` attribute for the source of the stylesheet, not for the source of the image, but the use of the attribute is the same. We're using a new HTML element `link` to pull in an external source. The `rel` attribute declares the external source type and tells the browser we're bringing in a style sheet.

1. Replace "DIR" with the path to the _main.css_ file.

2. Save your file and open the _index.html_ file in Chrome.
![](https://media.giphy.com/media/12QipzuBuU90Gs/giphy.gif)

1. Share your success by posting a screenshot to Slack!


<!-- ### [**Click here to sign up for next month if you want to learn more about styling and how it works!**](https://www.eventbrite.com/e/coding-cocktails-introduction-to-css-tickets-39470123201?aff=es2) -->
