# Fact Display Component

We can see which fact has been randomly selected in the console, but that fact doesn't display on our web page when we click the button. We need to fix this!

Add `<FactDisplay />` just above the button in the return statement for _FactGenerator_. Don't forget to import _FactDisplay_ at the top of the file!

> [!HINT]
> If you start typing `import FactDisplay`, you will be presented with a list of potential imports. The IDE will help you fill out the rest of the line if you choose what you want.

Take a look at the _FactDisplay.jsx_ file. What do you expect to see when you look at your web page, now? Now go look at your page.

As you can see, there's now an area where your facts will be displayed on the page. However, no facts are displayed there, yet.

To get our facts to display, we need to do a few things.

## Props

We need to add something, like a property (or as we call it in React, a prop) to the <FactDisplay /> component we just added to _FactGenerator.jsx_ so that component will display our facts. Looking at the code in the rest of _FactGenerator.jsx_, what makes sense to you to use as a prop?

> [!HINT]
> Since we have 5 facts, but we only want to display one at a time, we'll use the variable `currentFact` to tell `<FactDisplay />` what to render. It should look something like this:
>
> {% codeblock copy %}FactGenerator.jsx{% codeblock %}
> ```js
> <FactDisplay currentFact={currentFact} />
> ```

Now that we've added a prop to _FactDisplay_ in _FactGenerator.jsx_, we need to pass that prop to _FactDisplay_ inside of _FactDisplay.jsx_.

If you take a look at what already exists in _FactDisplay.jsx_, you will see that `FactDisplay` is defined as a functional component using an arrow function assigned to a const. You will notice that the parentheses are currently empty. This means that no data is currently passed to the component.

Since this is React, we use props to pass data to components. The way we do that is to add our prop inside the parentheses. We need to update `FactDisplay`'s definition to accept props so that it can access data we pass to it. Add `{ currentFact }` to that declaration so that React knows what to do with the function.

> [!HINT]
> `FactDisplay`'s first line should look like this after you've added `{ currentFact }`:
> 
> `const FactDisplay = ({ currentFact }) => {`

## Ternaries

Now we need to create a way to decide what to display in that component.

When the page first loads, we want people to be prompted to click the button, but after that, we want a random fact to be displayed.

One way to do that is to write a conditional. For example, we could be thinking, "`if` the page has been loaded for the first time, we want 'Press the button below to view a fun fact about me!' to be displayed, `else` we want a random fact to be displayed.

Sometimes, it can be cleaner to express this kind of logic as a _ternary_. A ternary is a short-hand way of writing an `if...else` statement. You set a condition followed by a question mark (?), then add what you want the code to execute if the condition is truthy. You follow this with a colon (:), then write the expression that you want executed if the condition is falsy.

In our case, inside the return statement for `FactDisplay`,we'll want to end up with the following (note that some of this already exist in the return statement, so BE CAREFUL when you copy and paste!):

{% codeblock copy %}FactDisplay.jsx{% codeblock %}
```js
<div className="fact-display">
    {currentFact ? (
        <div>
            <p className="fact-text">{currentFact}</p>
        </div>
    ) : (
        <p className="prompt-text">🌟 Press the button below to view a fun fact about me! 🌟</p>
    )}
</div>
```

Now go test your button out! You should be able to see a random fact displaying on your page and the same fact being logged to the console.

Remember that since there are only 5 facts and this is a random pick, the same fact may be chosen several times in a row, so it may look like there's nothing happening.

Now, we might want to let people know how many facts there are to choose from. We can add another bit of text to the page, but in which file might we want to place that?

We want to put it in _FactGenerator.jsx_. Why do we want to put it there, and where, exactly, should it go in that file?

> [!HINT]
> If you take a look at _App.jsx_ again, you'll see that the _App_ function calls `<WelcomeHeader />` and `<FactGenerator />`. All of our content that is not the welcome header is in _FactGenerator_.
>
> You can put the statement about how many facts there are anywhere you want, but it makes a lot of sense to put it below the button. The currently-selected fact will go above the button. Decide where you think it looks best and put it there.

## Check your code

How did you do? If you want to check your work against our answer key, you can look [here](https://github.com/KansasCityWomeninTechnology/Coding-and-Cocktails-Intro-to-React-answer-key).