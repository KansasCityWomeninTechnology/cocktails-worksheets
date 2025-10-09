# Fact Generator Component

Now we're ready to add a fact generator component to our app.

As we did for the welcome header, we're going to want to add a new file to the _src_ folder, but this time, we're going to call it _FactGenerator.jsx_.

Add this to your _FactGenerator.jsx_.

{% codeblock copy %}FactGenerator.jsx{% codeblock %}
```js
import React from 'react';

const FactGenerator = () => {

    return (
        <div className="fun-fact-generator">
            <h2>🎲 Discover Something About Me 🎲</h2>
            
            <button 
                className="fact-button" 
            >
                Show Me A Fun Fact!
            </button>
            
        </div>
    )
}

export default FactGenerator;
```

We're going to want to somehow pull this into our _App.jsx_ file. Can you remember how we did that for _WelcomeHeader_?

> [!HINT]
> You'll want to `import FactGenerator from './FactGenerator';` then add the `<FactGenerator />` component to the return statement for the _App()_ function. Put it below `<WelcomeHeader />`.

Woo hoo! We now have a button! However, the clicking the button doesn't do anything, yet. We'll fix this later.

First, let's add an array of `personalFacts` (facts about _YOU_) to our _FactGenerator_. This array will need to go above the _FactGenerator_ arrow function. Remember that to declare an array, we need to use square brackets, and each array element needs to be separated by a comma. Your facts will be strings, so you'll need to enclose each fact with either double (") or single (') quotes, whichever you like. It doesn't matter which you choose, but be sure to _be consistent_!

> [!HINT]
> It should look something like this (the following list is only an example):
>
> ```
> // list of facts about me
> const personalFacts = [
  "I have a unique talent or hobby that surprises people",
  "There's a place I've visited that changed my perspective on life",
  "I have an unusual fear or phobia",
  "I once had an embarrassing moment that became a funny story",
  "I have a hidden skill that most people don't know about"
> ];
> ```

Now we need to add a `useState` to our _FactGenerator_ component. This will allow us to keep track of which fact is being displayed at any given time. _useState_ reserves a little bit of memory for our app.

Add this to your _FactGenerator.jsx_ file, at the top.

{% codeblock copy %}FactGenerator.jsx{% codeblock %}
```js
import { useState } from 'react';
```

Now, we need to add a `useState` to the _FactGenerator_ function.

Add the following to your _FactGenerator_ function inside of _FactGenerator.jsx_, just above the _return_ statement.

{% codeblock copy %}FactGenerator.jsx{% codeblock %}
```js
    const [currentFact, setCurrentFact] = useState('');

    const generateRandomFact = () => {
        if (personalFacts.length > 0) {
            const randomIndex = Math.floor(Math.random() * personalFacts.length);
            setCurrentFact(personalFacts[randomIndex]);
        }
    };
```

> [!INFO]
> You'll likely need to fix the indentation on the code you paste! It should be indented code to the same level as the _return_ statement to keep it readable!

Now let's add an `onClick` to the button with this code.

{% codeblock copy %}FactGenerator.jsx{% codeblock %}
```js
onClick={generateRandomFact}
disabled={personalFacts.length === 0}
```

This should be indented at the same level as `className`.

Our button still doesn't do anything. Go ahead and click it to see what happens.

We can fix this by adding a `useEffect` to the _FactGenerator_ function to log the changes to the console. `useEffect` is called when the component is first rendered and then also any time `currentFact` changes (when the button is clicked).

Add this between the _useState_ and _generateRandomFact_ portions of _FactGenerator_ (don't forget to fix the indentation!) and then import `useEffect` at the top of the file by typing `import { useEffect } from 'react';`.

{% codeblock copy %}FactGenerator.jsx{% codeblock %}
```js
    useEffect(() => {
        console.log('My fact:', currentFact);
    }, [currentFact]);
```

Now go click the button and look at the console (right-click on the page and select _Inspect_, then click on the _Console_ tab) to see if anything happens. You should see one of your random facts logged each time you click the button. Note that since this is random, and there are only 5 facts to choose from, it _may_ appear as though nothing is changing when you click the button.

Because we are not forcing the _generateRandomFact_ function to NOT generate the same fact twice in a row, it may generate the same fact more than once in succession. If this happens, the _currectFact_ does not change and therefore, the _useEffect_ does not run.

Also, you’ll see the _useEffect_ log twice on initial render because React Strict Mode double-invokes effects in development to help catch bugs. It’s intentional and you don't need to worry about it!

This is expected behavior! Just keep clicking!

