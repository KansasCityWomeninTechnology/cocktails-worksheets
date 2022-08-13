# CSS Basics

**C**ascading **S**tyle **S**heets (**CSS**) decorates your website with visual appeal and invites the user to connect with your website's personality. Tonight we'll apply CSS to the "LadyDev Bar" web page. If you follow our instructions your page will end up looking like the example below but feel free to add in some of your own creativity if you feel comfortable!

![](images/lady-dev-bar.png ":class=image-border")

> [!WARNING]
> Before starting the worksheet, please take a moment to review the [Setup instructions](../setup/?id=setup) to ensure you have all the tools and workspace setup you need for today's work.

> [!WARNING]
> If you are using StackBlitz, please skip to [StackBlitz instructions](./?id=cloud-ide) below.

# Prepare the HTML file

First we need the HTML file. We'll create the file and set up the development environment.

1. Open Visual Studio Code (VS Code) from your installed applications. In VS Code, select **File** :fas fa-long-arrow-alt-right: **Open Folder...**.

1. Navigate to and select the "CodingAndCocktails/session2" folder.

   > [!WARNING]
   > If you don't have a "CodingAndCocktails/session2" directory, take a moment to [set up your workspace](../setup/?id=setup).

1. Create a file called _index.html_. In VS Code's **EXPLORER** pane, hover over **SESSION2** to display action buttons. Click the **New File** icon.

1. Name the file _index.html_ and press `Enter` to save it in your "CodingAndCocktails/session2" folder.

1. Copy and paste the following HTML code into your _index.html_ file.

   {% codeblock copy %}index.html{% codeblock %}

   ```html
   <!DOCTYPE html>
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <title>LadyDev Bar</title>
       <script
         src="https://kit.fontawesome.com/eeb19414a4.js"
         crossorigin="anonymous"
       ></script>
     </head>
     <body>
       <nav class="navbar">
         <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#menu">Menu</a></li>
           <li><a href="#contact">Contact</a></li>
         </ul>
       </nav>
       <section id="about" class="hero">
         <div class="hero-text">
           <h1>LadyDev Bar</h1>
           <h2>Making development more delicious every day!</h2>
           <p>Welcome to the LadyDev Bar. We're glad you're here!</p>
           <p>Sit down, relax, and enjoy good drinks and good friends.</p>
         </div>
       </section>
       <main class="grid-container">
         <section id="menu" class="drinks">
           <h2>Drink menu</h2>
           <ul>
             <li class="item">
               <h3 class="beverage">Martinis</h3>
               <p>
                 Made with our own homemade gin and dry vermouth. Choose from
                 The Classic, Lemondrop, or Chocolate.
               </p>
             </li>
             <li class="item">
               <h3 class="beverage">Wine</h3>
               <p>
                 There are just too many to list. Ask your server for a
                 recommendation.
               </p>
             </li>
             <li class="item">
               <h3 class="beverage">Margaritas</h3>
               <p>
                 Slushy frozen delicousness, in Peach, Strawberry, or Mango.
                 Served with a rock-salted rim and lime.
               </p>
             </li>
             <li class="item">
               <h3 class="beverage">Hot &amp; Creamy</h3>
               <p>
                 Just what you need to kick off a night of coding. We offer
                 concoctions with coffee, Kahlua, Bailey's, and more.
               </p>
             </li>
             <li class="item">
               <h3 class="beverage">Beer</h3>
               <p>
                 We serve the finest microbrews from around the world. How about
                 a Saison, IPA, or Stout?
               </p>
             </li>
             <li class="item">
               <h3 class="beverage">Non alcoholic</h3>
               <p>
                 We have plenty of NA options available to quench your thirst,
                 like lemonade, milk or soda.
               </p>
             </li>
           </ul>
         </section>
       </main>
       <footer id="contact">
         <p>&copy; 2022 LadyDev Bar</p>
       </footer>
     </body>
   </html>
   ```

1. Save the file by selecting **File** :fas fa-long-arrow-alt-right: **Save**. You can also use the keyboard shortcut `ctrl + s` on Windows or `cmd + s` on Mac. Unsaved files in VS Code have a little dot on the tab.

> [!TIP]
> You may run into an error saving _index.html_ if your VS Code needs elevated permissions on Windows. Select **Retry as Admin** to finish saving.

# Create a style sheet and link it into HTML :id=create-stylesheet

1. We need a folder for the stylesheet we'll be creating tonight. In VS Code, create the "styles" folder for the project and create the _styles.css_ file inside the "styles" folder.

   > [!WARNING]
   > Make sure you create the "styles" folder inside the project folder.

   > [!HINT]
   > In VS Code, hover over **SESSION2** and click on the **New Folder** icon. Name your folder "styles". Right click on the "styles" folder. Select **New File** to create your stylesheet file. Name the file _styles.css_.

1. In VS Code, open _index.html_. In the HTML `<head>` section (between the opening `<head>` and closing `</head>`), find the HTML tags for `title` and `script`. Place your cursor after the closing `title` tag, press `Enter`, and link your stylesheet by adding

   `<link rel="stylesheet" href="styles/styles.css">`.

   The `<head>` section of your HTML should look like this:

   {% codeblock %}index.html{% codeblock %}

   ```html
   <head>
     <meta charset="UTF-8" />
     <meta name="viewport" content="width=device-width, initial-scale=1" />
     <title>LadyDev Bar</title>
     <link rel="stylesheet" href="styles/styles.css" />
   </head>
   ```

1. Save your file.

1. Now we want to preview the _index.html_ file in Chrome. Instead of saving and reloading the web page manually, we'll use the VS Code extension **Live Server**. This extension opens up the web page in your default web browser and reloads the page whenever you save files. In VS Code, start the live server by right clicking on _index.html_ in the **EXPLORER** pane and select **Open with Live Server**. A browser tab will open.

   > [!WARNING]
   > If you don't have the **Live Server** package, take a moment to [set up your workspace](../setup/?id=setup).

   > [!WARNING]
   > If the tab opens in another browser, copy the URL and paste it into a new tab in Chrome. The reload will automatically happen in Chrome.
   >
   > If you get an access warning, click "Allow" to let **Live Server** serve the application.

1. Take a look at your app in Google Chrome and notice the current styling. The page doesn't look good yet but we've got our initial setup for our project done. Now let's get to the fun part - styling!

# Checkpoint

Compare your project folder against the answer key for your work.

> [!CODECHECK]
>
> Compare your folder setup with our [answer key](https://github.com/KansasCityWomeninTechnology/CSSCompilerPractice/tree/2022-checkpoint-1-css-basics).

### Cloud IDE instructions :id=cloud-ide

{% cloud-ide-begin %}
We will create a new [StackBlitz](https://stackblitz.com) for the HTML section of the worksheet.

1. Log in with your GitHub account

1. Once you're logged in, navigate to your **Dashboard** in StackBlitz by clicking on the StackBlitz icon at the top left of the toolbar.

1. On the **Dashboard** view, under **Create a new project** section, click **Static** icon. This creates a new project with your _index.html_ already created.

1. Delete all the code from the _index.html_ so that you can follow the worksheet instructions and save your file by clicking **Save** icon at the top left of the toolbar.

1. Copy and paste the following HTML code into your _index.html_ file.

   {% codeblock copy %}index.html{% codeblock %}

   ```html
   <html lang="en">
     <head>
       <meta charset="UTF-8" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <title>LadyDev Bar</title>
       <script
         src="https://kit.fontawesome.com/eeb19414a4.js"
         crossorigin="anonymous"
       ></script>
     </head>
     <body>
       <nav class="navbar">
         <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#about">About</a></li>
           <li><a href="#menu">Menu</a></li>
           <li><a href="#contact">Contact</a></li>
         </ul>
       </nav>
       <section id="about" class="hero">
         <div class="hero-text">
           <h1>LadyDev Bar</h1>
           <h2>Making development more delicious every day!</h2>
           <p>Welcome to the LadyDev Bar. We're glad you're here!</p>
           <p>Sit down, relax, and enjoy good drinks and good friends.</p>
         </div>
       </section>
       <main class="grid-container">
         <section id="menu" class="drinks">
           <h2>Drink menu</h2>
           <ul>
             <li class="item">
               <h3 class="beverage">Martinis</h3>
               <p>
                 Made with our own homemade gin and dry vermouth. Choose from
                 The Classic, Lemondrop, or Chocolate.
               </p>
             </li>
             <li class="item">
               <h3 class="beverage">Wine</h3>
               <p>
                 There are just too many to list. Ask your server for a
                 recommendation.
               </p>
             </li>
             <li class="item">
               <h3 class="beverage">Margaritas</h3>
               <p>
                 Slushy frozen delicousness, in Peach, Strawberry, or Mango.
                 Served with a rock-salted rim and lime.
               </p>
             </li>
             <li class="item">
               <h3 class="beverage">Hot &amp; Creamy</h3>
               <p>
                 Just what you need to kick off a night of coding. We offer
                 concoctions with coffee, Kahlua, Bailey's, and more.
               </p>
             </li>
             <li class="item">
               <h3 class="beverage">Beer</h3>
               <p>
                 We serve the finest microbrews from around the world. How about
                 a Saison, IPA, or Stout?
               </p>
             </li>
             <li class="item">
               <h3 class="beverage">Non alcoholic</h3>
               <p>
                 We have plenty of NA options available to quench your thirst,
                 like lemonade, milk or soda.
               </p>
             </li>
           </ul>
         </section>
       </main>
       <footer id="contact">
         <p>&copy; 2022 LadyDev Bar</p>
       </footer>
     </body>
   </html>
   ```

1. You created your project and are ready to [Create a style sheet and link it into HTML](./?id=create-stylesheet)!
   {% cloud-ide-end %}
