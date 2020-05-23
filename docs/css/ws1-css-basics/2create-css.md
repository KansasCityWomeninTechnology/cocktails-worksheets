1. We need a folder for the stylesheet we'll be creating tonight. In VS Code, create the "css" folder for the project and create the _styles.css_ file inside the "css" folder.
   >[!WARNING]
   >Make sure you create the "css" folder inside the project folder, and not inside "images" folder.

   >[!HINT]
   >In VS Code, hover over **SESSION2** and click on the **New Folder** icon. Name your folder "css". Right click on the "css" folder. Select **New File** to create your stylesheet file. Name the file _styles.css_.

1. In VS Code, open _index.html_. In the HTML `<head>` section (between the opening `<head>` and closing `</head>`), find the HTML tags for `title` and `script`. Place your cursor after the closing `title` tag, press `Enter`, and link your stylesheet by adding 

   `<link rel="stylesheet" href="css/styles.css">`.
   
   The `<head>` section of your HTML should look like this:

      {% codeblock %}index.html{% codeblock %}
    ```html
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>LadyDev Bar &amp; Grill</title>
      <link rel="stylesheet" href="css/styles.css">
      <script src="https://use.fontawesome.com/81b69a015b.js"></script>
    </head>
    ```
   >[!TIP]
   >Didn't have a chance to attend the HTML session or do you need a refresher? Grab a mentor and ask for an HTML overview.

1. Save your file.

1. Now we want to preview the _index.html_ file in Chrome. Instead of saving and reloading the web page manually, we'll use the VS Code extension **Live Server**. This extension opens up the web page in your default web browser and reloads the page whenever you save files. In VS Code, start the live server by right clicking on _index.html_ in the **EXPLORER** pane and select **Open with Live Server**. A browser tab will open.

   >[!WARNING]
   >If you don't have the **Live Server** package, take a moment to [set up your workspace](../setup/?id=setup).

   >[!WARNING]
   >If the tab opens in another browser, copy the URL and paste it into a new tab in Chrome. The reload will automatically happen in Chrome.
   >
   >If you get an access warning, click "Allow" to let **Live Server** serve the application.
   >
   >If you are borrowing a laptop and get an access warning, please contact a member of the Coding & Cocktails leadership team for access.

1. Take a look at your app in Google Chrome and notice the current styling. The page doesn't look good yet but we've got our initial setup for our project done. Now let's get to the fun part - styling!

