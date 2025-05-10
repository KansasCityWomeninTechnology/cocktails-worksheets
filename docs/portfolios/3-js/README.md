<div>
    <img src="images/logo.png" style="float: left; margin: 0px 15px 15px 0px; height:125px;">
    <h2 style="display:inline-block;margin-top:1em;">Coding &amp; Cocktails: The Shaker</h2>
    <h3 style="margin-top:0;margin-bottom:2em;">Let's Build a Portfolio Website - JavaScript</h3>
</div>

### Overview

Now that you've got a few pages for your portfolio and you have them styled, let's add a "go to top" button!

Inside the _js_ folder, create a new file called backToTop.js.

Copy and paste the following code into that file.

{% codeblock copy %}backToTop.js{% codeblock %}

```js

// This function toggles the visibility of the back-to-top button based on scroll position
const scrollFunction = () => {
const backToTopButton = document.querySelector(".back-to-top-btn");

// Get the current vertical scroll position
const documentScrollTop = document.documentElement.scrollTop || document.body.scrollTop;

// If scrolled more than 100px, show the button, otherwise hide it
if (documentScrollTop > 100) {
    backToTopButton.style.display = "block";
} else {
    backToTopButton.style.display = "none";
}
};

// This function smoothly scrolls the window back to the top when called
const scrollToTop = () => {
window.scrollTo({
    top: 0, // takes the window to the top of the page
    behavior: "smooth" // smooth scrolling animation
});
};

// Add a scroll event listener to trigger scrollFunction whenever the user scrolls
window.addEventListener("scroll", scrollFunction);
```

In each of your HTML files, add a link to the _backToTop.js_ file.

If you're having a problem figuring out how to link the JavaScript file, check below.

> [!CODECHECK]
>
> In the _head_ section, add this line:
>
> {% codeblock copy %}{% codeblock %}
> ```js
> <script src="../js/backToTop.js"></script>
>```

In your _css_ folder, add a new file called backToTopButton.css. Copy and paste the following code into that file.

{% codeblock copy %}backToTopButton.css{% codeblock %}

```css

.back-to-top-wrapper {
/* Positions the back-to-top button fixed at bottom-right corner */
position: fixed;
bottom: 40px;
right: 40px;
z-index: 999;
}

.back-to-top-btn {
/* Initially hides the button and styles it as a circular clickable element */
display: none;
width: 40px;
padding: 3px;
background-color: white;
border-radius: 50%; /* makes button a circle */
border: 1px solid #2222224D;
cursor: pointer; /* Shows the user that button is clickable */
}

.back-to-top-btn:hover {
/* Changes background color on hover for visual feedback */
background-color: #2222224D;
border: none;
}

.back-to-top-btn svg {
/* Styles the SVG icon inside the button */
display: block;
color: #222222;
}

.back-to-top-btn svg:hover {
/* Changes the color of the SVG icon on hover */
color: #FFF;
}
```

Now add a link to this stylesheet in all your HTML heads.

Last, we'll need to add something to our HTML file(s) so that our button shows up on the page. Make sure this goes after any other HTML you have in the body.

{% codeblock copy %}backToTopButton.css{% codeblock %}

```html
    <div class="back-to-top-wrapper">
      <button onclick="scrollToTop()" class="back-to-top-btn" title="Go to top">
        <!-- Paste in svg of chevron-up -->
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </button>
    </div>

```
Also add ```<link rel="stylesheet" href="../css/backToTopButton.css">``` to the head of your HTML file(s).

Go to your site and test the button out!

If something doesn't work, use your inspection tools to debug!