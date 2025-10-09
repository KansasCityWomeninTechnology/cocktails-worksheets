# Welcome Header Component

Now you are ready to write some code! Let's get started!

In the _src_ folder in your explorer tree, add a file named _WelcomeHeader.jsx_, then add the code below.

{% codeblock copy %}WelcomeHeader.jsx{% codeblock %}
```js
import React from 'react';

const WelcomeHeader = () => {
    return (
        <>
        
        </>
    );
};

export default WelcomeHeader;
```

At the beginning of your _App.jsx_ file, import WelcomeHeader from WelcomeHeader.jsx.

> [!HINT]
> 
> {% codeblock copy %}WelcomeHeader.jsx{% codeblock %}
> 
> ```js
>   import WelcomeHeader from './WelcomeHeader';
> ```

You'll also need to add the WelcomeHeader component to this file. Where might you put this and how do you add the component?

We have a function called _App()_ in _App.jsx_. There is a `return` for this function with a `<div>` inside of it with a `className` of _"App"_. This div is what will display on our web page, so we'll want to put the WelcomeHeader component inside here. To do this, we'll put our cursor on the blank line inside of the div, indent one tab, then type `<WelcomeHeader />`.

As you can see, nothing is showing up, yet, on our page. If you take a look at _WelcomeHeader.jsx_, you will see that there is no content! We have a `const` arrow function called _WelcomeHeader_ which has an `<></>` in it. This is known as a _fragment shorthand_. We'll need to put the content we want displayed as the welcome header inside of this `return`.

> [!INFO]
> The _fragment shorthand_ is not empty. It wraps child components or elements just like any other container, but it doesn’t produce any actual HTML tag in the DOM. It’s invisible in the rendered output but still groups elements logically in JSX.
> This is similar to a transparent container that isn't going to create anything visible.

Remember that we will create content using HTML tags. Since this is the welcome _header_, we want to add a `<header>` to the return, replacing the `<></>`. It should look something like this:

{% codeblock copy %}WelcomeHeader.jsx{% codeblock %}
```html
<header className="app-header">
    <h1>My Fun Facts</h1>
    <p>Random Personal Facts Generator</p>
</header>
```

> [!WARNING]
> When you paste the code above into your _WelcomeHeader.jsx_ file, you'll need to fix the indentation to match what you see in the worksheet. You can highlight multiple rows before you tab. This will tab all the highlighted rows at once, so you don't have to do them individually.

> [!INFO]
> WelcomeHeader is a function that defines a React component. This "Functional Component" (defining components as functions that return jsx) is a common way to create components in React.

Let's go to our web page preview and inspect it. Go to the "Elements" tab and take a look at `<div class="App>`. Do you see `<WelcomeHeader />` there, or do you see the content that you added to _WelcomeHeader.jsx_ there? Can you figure out why `<WelcomeHeader />` doesn't appear, and only the content we added to _WelcomeHeader.jsx_ shows up?

> [!HINT]
> The reason is that React only renders the HTML output of the child components, and `<WelcomeHeader />` is a child component of _App.jsx_.

