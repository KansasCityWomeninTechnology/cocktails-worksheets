# Introduction to React

In this session, we'll build a page that will serve up a different fact about you every time a user presses a button. We'll do this by building components that can be reused on our web page.

> [!WARNING]
> Before starting the worksheet, please take a moment to review the [Setup instructions](../setup/?id=setup) to ensure you have all the tools and workspace setup you need for today's work.

# Review the starter code

## Overall file structure

If you take a look at your explorer tree on the left, you'll see a number of files and folders.

All of our React files will reside in the _src_ folder. We will be working exclusively with files in this folder, today.

## App.css

Let's take a look at the _App.css_ file, first. You should see the code below in that file.

This CSS code is going to be used to style the page and all the React components. We've set this up now to get it out of the way, since we're more interested in learning React than in reviewing CSS in this session. However, when you get home, you can take your time to go through the CSS at your own pace. Here's a [link to the CSS worksheet](https://kansascitywomenintechnology.github.io/cocktails-worksheets/#/css/).

   {% codeblock copy %}App.css{% codeblock %}

   ```css
   .App {
      text-align: center;
      min-height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: #333;
    }

    .app-header {
      background-color: #fff;
      padding: 2rem;
      margin-bottom: 2rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
    }

    .app-header h1 {
      margin: 0 0 0.5rem 0;
      font-size: 2.5rem;
      color: #4a5568;
      font-weight: bold;
    }

    .app-header p {
      margin: 0;
      font-size: 1.2rem;
      color: #718096;
    }

    .fun-fact-generator {
      max-width: 800px;
      margin: 0 auto;
      background: white;
      border-radius: 20px;
      padding: 3rem;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    }


    .fun-fact-generator h2 {
      color: #4a5568;
      font-size: 2.2rem;
      margin-bottom: 2rem;
      font-weight: bold;
    }

    .add-fact-section {
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: #f8fafc;
      border-radius: 15px;
      border: 2px solid #e2e8f0;
    }

    .add-fact-section h3 {
      color: #4a5568;
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }

    .input-container {
      display: flex;
      gap: 1rem;
      flex-wrap: wrap;
    }

    .fact-input {
      flex: 1;
      min-width: 250px;
      padding: 0.75rem 1rem;
      font-size: 1rem;
      border: 2px solid #e2e8f0;
      border-radius: 25px;
      outline: none;
      transition: all 0.3s ease;
    }

    .fact-input:focus {
      border-color: #667eea;
      box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
    }

    .add-button {
      padding: 0.75rem 1.5rem;
      background: linear-gradient(45deg, #48bb78, #38a169);
      color: white;
      border: none;
      border-radius: 25px;
      font-size: 1rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.3s ease;
      white-space: nowrap;
    }

    .add-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 4px 12px rgba(72, 187, 120, 0.3);
    }

    .fact-count {
      margin-top: 1.5rem;
      font-size: 0.9rem;
      color: #718096;
      font-style: italic;
    }

    .fact-display {
      min-height: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-bottom: 2rem;
      padding: 1.5rem;
      background: #f7fafc;
      border-radius: 15px;
      border-left: 5px solid #667eea;
    }

    .fact-display h3 {
      color: #667eea;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .fact-text {
      font-size: 1.3rem;
      line-height: 1.6;
      color: #2d3748;
      margin: 0;
      text-align: center;
      font-weight: 500;
    }

    .prompt-text {
      font-size: 1.2rem;
      color: #718096;
      margin: 0;
      font-style: italic;
    }

    .fact-button {
      background: linear-gradient(45deg, #667eea, #764ba2);
      color: white;
      border: none;
      padding: 2rem;
      font-size: 1.2rem;
      font-weight: bold;
      border-radius: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
    }

    .fact-button:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
    }

    .fact-button:active {
      transform: translateY(0);
    }

    .fact-button:disabled {
      background: #e2e8f0;
      color: #a0aec0;
      cursor: not-allowed;
      transform: none;
      box-shadow: none;
    }

    /* Stops hover animation if button is disabled */
    .fact-button:disabled:hover {
      transform: none;
      box-shadow: none;
    }
   ```

## App.jsx, index.jsx, and index.html

### _index.html_

In plain HTML (or HTML and CSS) web pages, the home page for a website is usually named "index.html." We do have an "index.html" for this project and this is where the browser starts looking, but if you take a look at what's inside that file, you will find some boilerplate code. At the bottom of the file, you will see a script reference that points to _/src/index.jsx_. This tells the browser to go look in that file for more instructions to follow.

### _index.jsx_

In turn, the _index.jsx_ file invokes React and renders the app. You can see this in the code snippet below.

{% codeblock copy %}index.jsx{% codeblock %}

```js
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```
We will not touch anything in _index.html_ or _index.jsx_.

_index.jsx_ contains some JavaScript that points to _App.jsx_ in the declaration of the _root_ variable. _App_ is also imported from _App.jsx_ at the top of the file.

### _App.jsx_

Inside the _App.jsx_ file, you will see the code below.

{% codeblock copy %}App.jsx{% codeblock %}
```js
    import React from 'react';
    import './App.css';

    function App() {
      return (
        <div className="App">

        </div>
      );
    }

    export default App;
```

We will add to the code in this file so that our page displays what we desire.

> [!TIP]
> Feel free to ask mentors for help! We are here to help you!



