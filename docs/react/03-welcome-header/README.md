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
> {% codeblock copy %}WelcomeHeader.jsx{% codeblock %}
> 
> ```js
>      import WelcomeHeader from './WelcomeHeader';`
> ```

You'll also need to add the WelcomeHeader component to this file. Where might you put this and how do you add the component?

We have a function called _App()_ in _App.jsx_. There is a `return` for this function with a `<div>` inside of it with a `className` of _"App"_. This div is what will display on our web page, so we'll want to put the WelcomeHeader component in here. To do this, we'll put our cursor on the blank line inside of the div, indent one tab, then type `<WelcomeHeader />`.

As you can see, nothing is showing up, yet, on our page. If you take a look at _WelcomeHeader.jsx_, you will see that there is no content! We have a `const` arrow function called _WelcomeHeader_ which has an empty `return` in it. We'll need to put the content we want displayed as the welcome header inside of this `return`.

Remember that we will create content using HTML tags. Since this is the welcome _header_, we want to add a `<header>` to the return. It should look something like this:

{% codeblock copy %}WelcomeHeader.jsx{% codeblock %}
```html
<header className="app-header">
    <h1>My Fun Facts</h1>
    <p>Random Personal Facts Generator</p>
</header>
```

Let's go to our web page preview and inspect it. Go to the "Elements" tab and take a look at `<div class="App>`. Do you see `<WelcomeHeader />` there, or do you see the content that you added to _WelcomeHeader.jsx_ there? Can you figure out why `<WelcomeHeader />` doesn't appear, and only the content we added to _WelcomeHeader.jsx_ shows up?

> [!HINT]
> The reason is that React only renders the HTML output of the child components, and `<WelcomeHeader />` is a child component of _App.jsx_.