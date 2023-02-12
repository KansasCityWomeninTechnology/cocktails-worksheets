# Homework

> [!TIP]
> **Hey Slacker!**
>
> Remember, we're here to help.
> Join the KCWiT #codingandcocktails Slack Channel: [kcwit.slack.com](http://kcwit.slack.com)

## Troubleshooting Exercises

Try some troubleshooting so you can feel more confident coding on your own!

1.  Create a new Javascript project in StackBlitz.

> [!TIP]
> If you need a refresher on how to create a new Javascript project in StackBlitz, refer to step #2 in [Create StackBlitz account](../setup/?id=create-stackblitz-account) section.

2.  We don't need line #6 in _index.js_. Let's delete the code.

    {% codeblock copy %}index.js line #6{% codeblock %}

    ```js
    appDiv.innerHTML = `<h1>JS Starter</h1>`;
    ```

3.  Replace code in _index.html_ with the code below.

    {% codeblock copy%}index.html{% codeblock %}

    ```html
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="UTF-8">
            <title>Coding &amp; Cocktails Troubleshooting</title>
        </head>
        <body>
            <h1>Exercise 1</h1>
            <h3>Figure out what is wrong with this HTML.</h3>

            <p>Does anyone know why there is no image displayed below this paragraph?</p>

            <!--Fix the following HTML to get the image to display-->
            <div<img src="https://source.unsplash.com/xBFTjrMIC0c/600x400" alt="cocktail"></div>

            <!-- This HTML should display an ordered list of items. -->
            <h3>Is this list formatted according to best practices?</h3>
            <p>Here is a list:</p>
            1. First item <br/>
            2. Second item <br/>
            3. Third item <br/>

            <!-- Use some of the best practices we discussed in the presentation to fix the styling issues in this section -->
            <h3>Keep an eye to the best practices in this section.</h3>
            <H3>How should I write my tags?</H3>

            <P>This is another paragraph. There is a <A href="http://codingandcocktails.kcwomenintech.org/">Coding &amp; Cocktails</A> link in this paragraph. <b>I want only this sentence to be bold. Which cocktail is your favorite tonight?  What is your favorite holiday tradition?  Who likes snow & ice?  Is 3 < 5? <i>This sentence should be in italics</i></P>

            <!-- Woman debugging code, is there something missing from this img tag? -->
            <img src="https://source.unsplash.com/5ZnS3wK6sUg/640x480" />

        </body>
    </html>
    ```

4.  The first thing to fix is that our image is not displayed underneath the first paragraph. See if you can make the image show up by editing the HTML.

> [!TIP]
> Remember to save and refresh the page in Google Chrome to see your changes or run Live Server.

5. Update the list of items to use an HTML ordered list so our webpage has the correct structure.

6. Update the HTML headers keeping an eye to our HTML best practices.

7. The `<img>` tag is missing an important attribute. Update the image tag to have this attribute.

### View Pages and Answer Key

**View Starting Point:**

[http://kansascitywomenintechnology.github.io/examples/html-troubleshooting/exercise1.html](http://kansascitywomenintechnology.github.io/examples/html-troubleshooting/exercise1.html)

**View Solution:**

[http://kansascitywomenintechnology.github.io/examples/html-troubleshooting/solutions/exercise1.html](http://kansascitywomenintechnology.github.io/examples/html-troubleshooting/solutions/exercise1.html)

**Code Answer Key:**

[https://github.com/KansasCityWomeninTechnology/examples/blob/master/html-troubleshooting/solutions/exercise1.html](https://github.com/KansasCityWomeninTechnology/examples/blob/master/html-troubleshooting/solutions/exercise1.html)
