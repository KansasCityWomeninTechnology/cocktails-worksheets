# CSS Basics

**C**ascading **S**tyle **S**heets (**CSS**) decorates your website with visual appeal and invites the user to connect with your website's personality. Tonight we'll apply CSS to the "LadyDev Bar & Grill" web page. If you follow our instructions your page will end up looking like the example below but feel free to add in some of your own creativity if you feel comfortable!

![](images/ladyDevBarAndGrill.png ":class=image-border")

> [!WARNING]
> Before starting the worksheet, please take a moment to review the [Setup instructions](../setup/?id=setup) to ensure you have all the tools and workspace setup you need for today's work.

> [!WARNING]
> If you are using StackBlitz, please skip to [StackBlitz instructions](./?id=cloud-ide) below.

# Prepare the HTML file

First we need the HTML file. We'll create the file, download the images, and set up the development environment.

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
       <title>LadyDev Bar &amp; Grill</title>
       <script src="https://use.fontawesome.com/81b69a015b.js"></script>
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
           <h1>LadyDev</h1>
           <h1>Bar &amp; Grill</h1>
           <h2>Making development more delicious every day!</h2>
           <p>
             Welcome to the LadyDev Bar &amp; Grill. We're glad you're here!
           </p>
           <p>
             Sit down, relax, and enjoy good drinks, good eats, and good
             friends.
           </p>
         </div>
       </section>
       <main class="grid-container">
         <section id="menu" class="drinks">
           <h2>Menu</h2>
           <ul>
             <li class="item">
               <a href="#"><img src="images/martini.jpg" alt="" /></a>
               <h3 class="beverage">Martinis</h3>
               <p>
                 Made with our own homemade gin and dry vermouth. Choose from
                 The Classic, Lemondrop, or Chocolate.
               </p>
             </li>
             <li class="item">
               <a href="#"><img src="images/wine.jpg" alt="" /></a>
               <h3 class="beverage">Wine</h3>
               <p>
                 There are just too many to list. Ask your server for a
                 recommendation.
               </p>
             </li>
             <li class="item">
               <a href="#"><img src="images/whiskey-cocktails.jpg" alt="" /></a>
               <h3 class="beverage">Whiskey cocktails</h3>
               <p>
                 Whiskey. Known as the water of life and a drink worthy of deep
                 contemplation. Thank goodness it's not just for men anymore.
               </p>
             </li>
             <li class="item">
               <a href="#"><img src="images/margarita.jpg" alt="" /></a>
               <h3 class="beverage">Margaritas</h3>
               <p>
                 Slushy frozen delicousness, in Peach, Strawberry, or Mango.
                 Served with a rock-salted rim and lime.
               </p>
             </li>
             <li class="item">
               <a href="#"><img src="images/hot-cocktail.jpg" alt="" /></a>
               <h3 class="beverage">Hot &amp; Creamy</h3>
               <p>
                 Just what you need to kick off a night of coding. We offer
                 concoctions with coffee, Kahlua, Bailey's, and more.
               </p>
             </li>
             <li class="item">
               <a href="#"><img src="images/beer.jpg" alt="" /></a>
               <h3 class="beverage">Beer</h3>
               <p>
                 We serve the finest microbrews from around the world. How about
                 a Saison, IPA, or Stout?
               </p>
             </li>
             <li class="item">
               <a href="#"><img src="images/milk.jpg" alt="" /></a>
               <h3 class="beverage">Non alcoholic</h3>
               <p>
                 We have plenty of NA options available to quench your thirst,
                 like lemonade, milk or soda.
               </p>
             </li>
           </ul>
         </section>
         <section class="small-plates">
           <h2>Small plates</h2>
           <ul class="food">
             <li>Grassfed beef sliders</li>
             <li>Spicy calamari</li>
             <li>Coconut shrimp</li>
             <li>Veggie spring rolls</li>
             <li>Deviled eggs</li>
             <li>Tuscan bean dip</li>
             <li>Chicken lettuce wraps</li>
           </ul>
         </section>
       </main>
       <footer id="contact">
         <p>&copy; 2020 LadyDev Bar &amp; Grill</p>
         <ul>
           <li>
             <a href="http://facebook.com/ladydevbargrill"
               ><i class="fa fa-facebook-official fa-lg"></i
             ></a>
           </li>
           <li>
             <a href="http://twitter.com/ladydevbargrill"
               ><i class="fa fa-twitter fa-lg"></i
             ></a>
           </li>
           <li>
             <a href="http://instagram.com/ladydevbargrill"
               ><i class="fa fa-instagram fa-lg"></i
             ></a>
           </li>
           <li>
             <a href="mailto:ladydevbargrill@example.com"
               ><i class="fa fa-envelope-open-o fa-lg"></i
             ></a>
           </li>
         </ul>
       </footer>
     </body>
   </html>
   ```

1. Save the file by selecting **File** :fas fa-long-arrow-alt-right: **Save**. You can also use the keyboard shortcut `ctrl + s` on Windows or `cmd + s` on Mac. Unsaved files in VS Code have a little dot on the tab.

![](images/vs-code-save.png)

> [!TIP]
> You may run into an error saving _index.html_ if your VS Code needs elevated permissions on Windows. Select **Retry as Admin** to finish saving.
