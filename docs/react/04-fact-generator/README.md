# Fact Generator Component

Now we're ready to add a fact generator component to our app.

As we did for the welcome header, we're going to want to add a new file to the _src_ folder, but this time, we're going to call it _FactGenerator.jsx_.

Add this to your _FactGenerator.jsx_.

{% codeblock copy %}FactGenerator.jsx{% codeblock %}
```js
import React, { useState } from 'react';

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
> You'll want to `import FactGenerator from './FactGenerator';` then add the `<FactGenerator />` component to the return statement for the _App()_ function.

Woo hoo! We now have a button! However, the clicking the button doesn't do anything, yet. We'll fix this later.

First, let's add an array of `personalFacts` to our _FactGenerator_. This array will need to go above the _FactGenerator_ arrow function. Remember that to declare an array, we need to use square brackets, and each array element needs to be separated by a comma. Since your facts will be sentences, and thus strings, you'll need to enclose each fact with either double or single quotes. It doesn't matter which you choose, but be sure to _be consistent_!

> [!HINT]
> It should look something like this:
>
> ```
> / list of facts about me
> const personalFacts = [
  "I have a unique talent or hobby that surprises people",
  "There's a place I've visited that changed my perspective on life",
  "I have an unusual fear or phobia",
  "I once had an embarrassing moment that became a funny story",
  "I have a hidden skill that most people don't know about"
> ];
> ```

Now we need to add a `useState` to our FactGenerator component. This will allow us to WHAT, NESSA?

