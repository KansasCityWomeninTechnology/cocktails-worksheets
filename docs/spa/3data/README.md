# Data binding and component interaction in your Single Page Application

We will create a web application using a SPA framework with interactive elements and dynamic content that looks like this:

![Completed trivia application](../images/app.gif ':size=500')

Tonight we will add on to the code by adding mock data that allows use to build out interaction logic and set up component interaction.

>[!WARNING]
>Before starting the worksheet, please take a moment to review the [Setup instructions](../setup/?id=setup) to ensure you have all the tools and workspace setup you need for tonight's work.

>[!TIP]
>Couldn't make it to last session? Follow [the instructions from the last session](../2component/) to create the trivia component and add routing for the best learning experience.
>
>Or [clone the answer key from last session](https://github.com/KansasCityWomeninTechnology/trivia/tree/component), install Angular CLI, and run `npm install` in the project directory.

# Prepare your workspace

Open the "trivia" project in your IDE. We recommend using Visual Studio Code. Open VS Code and navigate to your project directory.

>[!TIP]
>If you are a terminal poweruser, you can navigate to your "trivia" project folder in your terminal and open the current working directory in VS Code by running
>```sh
>  code .
>  ```

In VS Code, open a terminal window. It should automatically open to your project directory. Verify the working directory of the terminal window matches your project directory just in case.

>[!TIP]
>We recommend using VS Code's terminal window for this session to help keep your focus on as few applications as possible.
>
>Open a terminal window in VS Code by navigating to **View** :fas fa-long-arrow-alt-right: **Terminal**.
>Read more about [VS Code's Integrated Terminal](https://code.visualstudio.com/docs/editor/integrated-terminal).

Let's run the application. We use Angular CLI to serve the webpage so we can view it locally. Run the following code in VS Code's terminal to serve the app:

{% codeblock copy %}terminal{% codeblock %}
```sh
ng serve
```

In Google Chrome, navigate to [http://localhost:4200](http://localhost:4200) to see your in progress trivia app. It should look something like this:

![App starting view](images/starting-app.png ':class=image-border')

# Data setup

That middle section is looking pretty empty. Let's get some data to work with! We'll add a couple of fake questions and answers to your component, and change the template code to render the trivia questions dynamically.

In VS Code, open _trivia/trivia.component.ts_. We're going to add fake questions here.

Copy and paste the following code inside the body of the TriviaComponent, before the `constructor` method.

{% codeblock copy %}trivia.component.ts{% codeblock %}
```ts
  public questions = [{
    text: 'Florence Nightingale became known as \"the Lady With the Lamp\" during which war?',
    answers: [{
      correct: false,
      text: 'American Civil War'
    },
    {
      correct: false,
      text: 'World War I'
    },
    {
      correct: true,
      text: 'Crimean War'
    },
    {
      correct: false,
      text: 'World War II'
    }
    ]
  },
  {
    text: 'In a quarter-mile race, which animal can be expected to win?',
    answers: [
      {
        correct: false,
        text: 'Lion'
      },
      {
        correct: true,
        text: 'Pronghorn Antelope'
      },
      {
        correct: false,
        text: 'Quarter Horse'
      },
      {
        correct: false,
        text: 'Giraffe'
      }
    ]
  }
  ];
```

>[!INFO]
>Let's go over what we did here.
>
>We created a property in the `TriviaComponent` class named `questions` that is publicly available, which means anything that calls `TriviaComponent` has access to `questions`. Then we set the value of the `questions` property to an array with 2 elements. Each element is a question object. We didn't set type of `questions` property yet, but we will soon.

# Data binding

In the trivia app, the HTML template displays data dynamically. We don't want to always have the same set of trivia questions! That means something has to manuever data behind the covers to display.

In Angular, we can separate the presentation (the HTML template) from the logic (the Component TypeScript file) needed to drive the app. We connect data from the component code to the HTML by using a form of data binding called **interpolation**.

Interpolation allows us to embed expressions into the template and uses double curly braces  to denote the expression. The syntax looks like `{{expression}}`. Let's see how this works with some hard-coded trivia questions.

Let's use the `questions` property in the template and display how many elements are in the `questions` array.

Open _trivia.component.html_.

You should see a paragraph element with the text "Trivia". Replace the text "Trivia" with:

{% codeblock %}trivia.component.html{% codeblock %}
```html
Questions {{questions.length}}
```

Save your code and take a look at it in Chrome. You should see "Questions 2" displayed on the page. We'll use interpolation as we continue building the app.

>[!TIP]
>Enable auto save in VS Code to avoid manually saving after each change by selecting **File** :fas fa-long-arrow-alt-right: **Auto Save**.

>[!EXTRACREDIT]
>Interpolation supports expressions, so you can do more than displaying the property. Try putting in simple math, such as `{{2+2}}` or add on to your `questions` property by appending text, such as `{{questions.length + ' is a good number.'}}`. Feel free to try to different expressions and when you're done, remove all the test code you added.
>
>You can read more about interpolation in [Angular's documentation](https://angular.io/guide/interpolation).

# Define interfaces for trivia questions

We added the sample trivia questions, but didn't define the type for the object. Let's do that now before we get further in the code. Having defined types allows the IDE to help us code by providing code completion hints and type safety (catching errors early).

Open a new terminal in VS Code. We want to continue serving the app while creating the interfaces.

>[!TIP]
>To open a new terminal in VS Code, follow [the instructions on their documentation page](https://code.visualstudio.com/docs/editor/integrated-terminal#_managing-multiple-terminals).

In the new terminal, we'll use Angular CLI to create the interface. Run the following command:

{% codeblock copy %}app.component.html{% codeblock %}
```sh
ng generate interface question
```

>[!INFO]
>This creates a single TypeScript file, _src/app/question.ts_.

>[!TIP]
>That's too much typing for a commandline operation!
>
>Angular CLI supports shortcuts to generate components too. You can use single character shortcuts to **g**enerate an **i**nterface, so we could also run `ng g i question`.

Leave the new terminal open. We'll use it again soon.

Open _question.ts_.

Angular CLI scaffolded out an empty interface for `Question`. We'll add the properties to the interface to match sample questions we added earlier.

Inside the `Question` interface (between the curly braces), add the following code:

{% codeblock %}question.ts{% codeblock %}
```ts
text: string;
```

>[!INFO]
>Let's go over what we did here.
>
>We created a property in the `Question` interface named `text` of type `string`. We don't set the access of a property (such as public or private) in an interface.

We need to add one more property to the `Question` interface, but we'll create a new interface first.

Above the `Question` interface, create a new interface named `Answer` by following the same syntax as the `Question` interface.

>[!HINT]
>Create the `Answer` interface before the `Question` interface by adding the following code: `export interface Answer { }`.

>[!EXTRACREDIT]
>Why did we add `export` to the `Answer` interface?
>We add `export` to create JavaScript modules so they can be used by other code. JavaScript modules is part of the syntax supported by ES6. Consumers of the module can `import` it into their files. We used the `import` syntax already when we set up routing last session.
>
>Read more about `export` statement and JavaScript modules in [MDN's documentation](https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export).

We need to add 2 properties to the `Answer` interface. Add a property named `text` of type `string` and a property named `correct` of type `boolean`.

>[!HINT]
>Inside the `Answer` interface add the `text` property by adding the code `text: string;`. Add the `correct` property on a new line by adding the code `correct: boolean;`.

These 2 properties correspond to the text of the answer, and whether the answer is correct.

Now that we've created and defined the `Answer` interface, we can reference it in the `Question` interface.

Add a property named `answers` of type `Answer` array.

>[!HINT]
>Inside the `Question` interface add the `answers` property by adding the code `answers: Answer[];`.

The 2 properties in `Question` correspond to the text of the question, and an array of possible answers.

Now we can use the interfaces! Let's start with adding the type to the sample trivia questions!

Open _trivia.component.ts_.

Change the property `questions` to be of type `Question` array. Your IDE may show an error for the type `Question`. You'll need to import the `Question` interface.

>[!HINT]
>Change `public questions = ...` to `public questions: Question[] = ...`. Import the `Question` interface through VS Code by clicking on the yellow lightbulb and selecting **Import 'Question' from module "../question."**.

We don't see any difference in our code because we already set up our sample trivia questions to match the interface, but now we'll be able to use our interfaces in the remainder of the app. Doing so provides us type-safety, an advantage of using TypeScript.

>[!EXTRACREDIT]
>Try testing out what **type-safe** means. Add a new question to the array without adding any properties. Your IDE tells you there's a problem, that you're missing properties from type `Question`. Add a property that doesn't exist in the `Question` interface, such as `cocktail`. Your IDE tells you there's a problem there too.

# Create a trivia-question component

Before we get into the instructions, let's talk about what our goals are for the trivia-question component. We want the trivia-question component to handle the responsibilities of displaying a question and the user interaction of selecting an answer. By creating smaller components with focused responsibilities, we keep our app more modular and maintainable.

In the terminal where you created the interface, we'll use Angular CLI to create the component. Run the following command:

{% codeblock copy %}app.component.html{% codeblock %}
```sh
ng generate component trivia-question
```

>[!INFO]
>This creates a "src/app/trivia-question" directory for the component files.

## Set up the TriviaQuestion component HTML

Let's prepare the HTML template. Open the _trivia-question.component.html_ file.

The Angular CLI generated a small bit of HTML for us that says "trivia-question works!". Delete all the HTML and replace it with:

{% codeblock copy %}trivia-component.component.html{% codeblock %}
```html
	<h3>Question</h3>

	<ul>
		<li>
			<button class="answer">Answer</button>
		</li>
	</ul>
```

## Add some styles to the TriviaQuestion component

Now let's add some styles for the trivia-question component. Open _trivia-question.component.css_ and add the following styles

{% codeblock copy %}trivia-question.component.css{% codeblock %}
```css
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

li + li {
  margin: 1rem 0;
}

li {
  transition: all 0.5s ease;
}

button {
  font: inherit;
  font-weight: 600;
  color: white;
  background: #666b8f;
  padding: 1rem 2rem;
  margin: 4px 2px;
  border-radius: 0.25rem;
  cursor: pointer;
  transition-duration: 0.4s;
}

.answer {
  background: white;
  color: #666b8f;
  border: 2px solid #ba99c0;
}

.answer:hover {
  color: white;
  background: #666b8f;
}
```

>[!INFO]
>What's going on with copying and pasting all the HTML & CSS?!
>
>In an effort to keep the project focused on Single Page Applications concepts, we're providing the bare bones HTML & CSS code for you to copy and paste. Take a moment to examine the code HTML and CSS you added to understand what we're building. You'll be adding on to the HTML yourself soon and pep up the CSS to your own tastes between sessions.

Open _trivia-component.component.ts_ and take a look at the `@Component` decorator metadata. When we created the component, Angular CLI used the component name in the `selector`. This means we can refer to this component from another component template by using `app-trivia-question` as the element name.

# Add the TriviaQuestion component to the view

Now we need to display the TriviaQuestion component. Before we jump to the instructions, let's take a moment to understand the goals. We want the TriviaComponent to delegate responsibility of each trivia question to the TriviaQuestion component. This means the TriviaComponent is the parent component to TriviaQuestionComponent, the child component.

Let's take a look at a component diagram that shows the relationship.
* `<app-root>`-the first component to load and a container for other components. This is the App component.
* `<router-outlet>`-where the router displays the view for the route.
* `<app-trivia>`-the component that handles trivia questions and scoring results.
* `<app-trivia-question>`-the component that handles the display and answer selection of a single trivia question.

![Component relationship diagram](images/trivia-question-component-diagram.svg ':size=500')

Now we have an idea of where to add the trivia-question component.

Open _trivia.component.html_.

After the paragraph element where we display the length of the questions array, but still within the section element, add the trivia-question component:

{% codeblock %}trivia.component.html{% codeblock %}
```html
<app-trivia-question></app-trivia-question>
```

Take a look in Chrome. Do you see a label "Question" and a button with the text "Answer"? We're now looking at the trivia-question component through the trivia component!

# Display all of the trivia questions

We see 1 trivia question, but want to see every trivia question. To do so, we need to use the structural directive `*ngFor` to loop through the question array and display each one. We can add `*ngFor` to the HTML element we want to iterate on, the `trivia-question` element. Let's add that now.

The `*ngFor` is Angular's repeater directive. It repeats the host element (in our case a component) for each element in a list.

Open _trivia.component.html_.

To the `<app-trivia-question>`, add the `*ngFor` directive like this:

{% codeblock %}trivia.component.html{% codeblock %}
```html
<app-trivia-question *ngFor="let item of questions"></app-trivia-question>
```

>[!INFO]
>Let's go over what we did here.
>
>We added the **structural directive** `*ngFor` that iterates through the list of questions and adds a trivia-question-component to the DOM for every item in the list.
>The syntax in this example is as follows:
>
>* `<app-trivia-question>` is the host element for the directive.
>* `questions` is the trivia questions list we defined in the `TriviaComponent` class.
>* `item` holds the current question object for each iteration through the list.

>[!WARNING]
>Don't forget the asterisk (*) in front of ngFor. It's a critical part of the syntax.

Take a look in Chrome. You should see 2 trivia-question component output in your app!

# Passing data to the trivia-question component

The `TriviaQuestionComponent` should take care of displaying a trivia question, but we don't see the trivia question yet. Let's pass the trivia question to display from the `TriviaComponent` (the parent component) to the `TriviaQuestionComponent` (the child component) so that the `TriviaQuestionComponent` is responsible for displaying and handling interaction logic for a trivia question.

## Add an `@Input` parameter

Child components accept data from parent components by specifying an input property using an `@Input()` decorator. Parents can then send data to child components by using those input properties.

![Diagram of data flow from parent to child](https://angular.io/generated/images/guide/inputs-outputs/input.svg ':size=400')

Let's add an input property for a trivia question.

Open _trivia-question.component.ts_.

Before the constructor, add the following code:

{% codeblock %}trivia-question.component.ts{% codeblock %}
```ts
@Input() public question: Question;
```

>[!INFO]
>We added a public property named `question` and added the `@Input()` decorator. Let's talk through this in more detail.
>
>1. We defined the access type as `public` because we want other components to access this property.
>2. And then we defined the name we want to use, in this case, we called this property `question`.
>3. We set the type of the property to `Question`. The list of trivia questions is of type `Question[]`, so each question is of type `Question`.
>4. Lastly, we add the `@Input()` decorator. This is an Angular decorator to identify input properties. The `@Input()` decorator can be used in components and directives. When we specified the list of trivia questions in the `*ngFor` structural directive, we passed data into an input property.  

>[!TIP] Don't forget to import the `Input` and `Question` types.

Let's update the HTML for the `TriviaQuestionComponent` to use this property so we can start seeing results.

Open _trivia-question.component.html_.

Replace the hard coded "Question" text in the `<h3>` with the `question.text` property. Use what we learned about data binding to update the `h3` element.

>[!HINT]
>Replace `<h3>Question</h3>` with `<h3>{{question.text}}</h3>`.

## Configure the parent component

Now that we set up the input property on the `TriviaQuestionComponent`, the next step is to bind the property in the parent component's template. Here's how the input property and **property binding** work together in our app.

![Diagram showing input property binding](images/input-diagram.svg ':size=800')

We'll apply these concepts now.

Open _trivia.component.html_.

Find `<app-trivia-question>` and use property binding to pass the `item` object in. Update the code for `<app-trivia-question>` to look like this:

{% codeblock %}{% codeblock %}
```html
<app-trivia-question *ngFor="let item of questions" [question]="item"></app-trivia-question>
```

>[!INFO]
>We added the `[question]` property binding syntax to the `<app-trivia-question>` selector. In the `*ngFor` we iterate over a list of trivia `questions` and create a local variable named `item` for the element in the `questions` array. We pass in `item` into the `question` property. As the `*ngFor` iterates through the list of `questions`, it will send the current `item` to the `<app-trivia-question>`.

Take a look in Chrome. Do you see your question text in your app?

# Adding trivia question answers

Let's bind the rest of our trivia question properties in the `TriviaQuestionComponent` so that we can see all the possible answers for each trivia question!

Open _trivia-question.component.html_.

Right now we only see 1 possible answer. We want to see all of the possible answers. We need to use the `*ngFor` structural directive to repeat the `li` element for each answer in the list of `answers` in the `question` property. Refer back to the interface we created for `Question` to refresh your memory on the structure of the properties. Apply concepts we learned earlier in this worksheet to do so.

>[!HINT]
>Update the `li` element by adding `*ngFor`. Set the value for the `*ngFor` to iterate through the list of `question.answers` and name the current array element something like `answer`. Your code will look like this
>
>```html
><li *ngFor="let answer of question.answers">
>```

Take a look in Chrome. Now we see a button for each answer, but they all have the same text "Answer". Let's update the text inside the `<button>` element to display the answer text using data binding. Apply concepts we learned earlier in this worksheet to do so. You may need to refer back to the `Answer` interface for the property names.

>[!HINT]
>Update the `button` element text from "Answer" to the `text` property name of the current array element in double curly braces, such as `{{answer.text}}`.

# Passing data from child to parent component

As a user answers trivia questions, the `TriviaQuestionComponent` should notify the `TriviaComponent` that an answer was selected.

Child components send data to parent components by specifying an output property using the `@Output()` decorator. The child then emits an event containing the data that the parent components listens and reacts to.

![Diagram of data flow from child to parent](https://angular.io/generated/images/guide/inputs-outputs/output.svg ':size=400')

## Add the `@Output()` property

Let's add an output property for the selection of a trivia answer and send a boolean value indicating a correct answer selection. We'll use Angular's `EventEmitter` class to raise an event. `EventEmitter` is a class in Angular that requires the type of the data we send to parents as part of its metadata. In our case, we will send a `boolean` to indicate whether the user selected the correct (or incorrect) answer.

Open _trivia-question.component.ts_.

Before the constructor, but after the `@Input()` property, add the following code:

{% codeblock %}trivia-question.component.ts{% codeblock %}
```ts
@Output() public answeredEvent: EventEmitter<boolean> = new EventEmitter<boolean>();
```

>[!INFO]
>Let's talk through the syntax of this line of code.
>
>* `public` - access modifier to make the property accessible outside the component.
>* `@Output()` - a decorator marking the property as a data flow to parent components.
>* `answeredEvent` - the name of the `@Output()`
>* `EventEmitter<boolean>` - the `@Output()`'s type
>* `new EventEmitter<boolean>()` - initialize `answeredEvent` by creating a new event emitter and the data it emits is of type `boolean`.

>[!TIP]
>Don't forget to import the `Output` and `EventEmitter` types. Both are available from the `@angular/core` library.

>[!WARNING]
>Make sure to import `EventEmitter` from `@angular/core`. VS Code may offer multiple libraries to import for `EventEmitter`, but we're using the class defined in `@angular/core` library.

>[!EXTRACREDIT]
>What's up with the angle bracket `<boolean>` syntax?
>
>The angle brackets with a type inside (ours is `boolean`) is a TypeScript syntax that allows developers to write reusable code. This construct, called **generics**, comes from strongly typed languages, such as Java, C#, and C++. It's extremely powerful and is a foundation of object oriented programming.
>
>Learn more about [generics in TypeScript from the documentation site](https://www.typescriptlang.org/docs/handbook/2/generics.html).

Next we need to create a method that emits the event.

We want a method that takes the answer selected and emits `true` or `false` depending on whether the answer is correct. Since the trivia question's answers is an array of options, we can use the index of the array to identify which answer was selected.

Inside the `TriviaQuestionComponent` class, below the `ngOnInit()` method, create a public method named 'onAnswerSelected' that accepts a parameter named 'index' of type `number` and returns a type `void` by adding the following code:

{% codeblock %}trivia-question.component.ts{% codeblock %}
```ts
public onAnswerSelected(index: number): void {

}
```

With the index of the answer available, we can access the question's answer array by index and emit the `correct` property. The `EventEmitter` class has a method `emit` that takes the data you want to emit as the parameter.

>[!TIP]
>Within a class, we access internal properties (and methods) using the `this` keyword.
>Read more about `this` on [MDN's documentation site](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#class_context).

Inside the `onAnswerSelected` method, add

{% codeblock %}trivia-question.component.ts{% codeblock %}
```ts
  this.answered.emit(this.question.answers[index].correct);
```

>[!INFO]
>Let's walk through this.
>
>The `onAnswerSelected()` method uses the `@Output()`, `answeredEvent`, to raise an event with the value of the `correct` property for the answer selected by the array index of the `answers` array.

>[!EXTRACREDIT]
>What happens if my data isn't the type specified in the event emitter?
>
>TypeScript ensures you don't create type mismatches that can cause code problems by using the wrong type. Your IDE alerts you to a type mismatch. Try changing your code to send the string 'true' or 'false' by updating the call to emit the data like this
>
>```ts
>this.answered.emit(this.question.answers[index].correct ? 'true' : 'false');
>```
>
>See how your IDE alerts you to a problem? Notice the console output in the terminal where you're serving the app. You'll see a compilation error too. Don't forget to revert your code when you're done testing things out.

## Bind to the `click` event

Let's update the HTML for the `TriviaQuestionComponent` to bind the `button`'s `click` event to emit an event. We'll handle the `click` event in the component method and emit a new event conforming to the data type of the `@Output()` property.

Open _trivia-question.component.html_.

We want to bind to the `click` event on `button` and when the `click` event is raised, we want to call our `onAnswerSelected()` method. Update the button element to add the event binding:

{% codeblock %}trivia-question.component.html{% codeblock %}
```html
<button class="answer" (click)="onAnswerSelected()">
```

>[!INFO]
>The `(click)` event is bound to the `onAnswerSelected()` method in the component. The syntax for binding to events is parenthses `()`.
>
>Read more about [event binding on Angular's documentation](https://angular.io/guide/event-binding).

In Chrome, first open Dev Tools and then try selecting an answer to the first trivia question. We see an error in the Dev Tools console where we're trying to access the property `correct` of undefined.

The `onAnswerSelected()` method takes a number, the index of the answer in the `answers` array as a parameter, to get the correct `answer` object for the `correct` property. We need to pass in the index, but how do we know which answer element in the array we clicked?

The `*ngFor` directive has array metadata we can access. In the `*ngFor` for the `li` element, add a semicolon to the existing string where we defined the local variable `answer` and provided the `answers` array to and add `let i=index`.

Your code will look like this:

{% codeblock %}trivia-question.component.html{% codeblock %}
```html
<li *ngFor="let answer of questions.answers; let i=index">
```

>[!INFO]
>We now have the current index of the array element in a local variable named 'i'. Angular provides access to the index in a variable named `index`.
>
>The `*ngFor` structural directive includes even more information about the array. We can also get the length of the array, and details about the array element. Such as whether the array element is the first item, the last item, or if the item index is even or odd. In short, we get so much metadata about the array and the array element!

>[!EXTRACREDIT]
>Curious about all the options available in the `*ngFor` structural directive?
>
>Read more about the local variables available in `*ngFor` in Angular's [API reference documentation](https://angular.io/api/common/NgForOf#local-variables).

Make the needed code updates to pass in the index into the method.

>[!HINT]
>We want to pass in `i` into the `onAnswerSelected()` as a parameter. Update the method we bound the `click` element to `onAnswerSelected(i)`.

Try selecting an answer in Chrome now. We no longer see the error in Dev Tools! Now that we emit the `answeredEvent` event, we want to capture the event in the parent component.

## Configure the parent component

We now need to bind the `questionAnswered` event in the parent component. Much like binding to the `button`'s `click` event, we'll apply the same concepts we learned to bind the `questionAnswered` `@Output()` property to a method in the component to the `questionAnswered` event.

Open _trivia.component.ts_.

Create a new public property named `correctAnswers` and initialize the value to the number '0'.

>[!HINT]
>Before the constructor, add the following code
>```ts
>public correctAnswers = 0;
>```

Add a public method named 'onQuestionAnswered' that takes a parameter named 'isCorrect' of type `boolean` and has a return type of `void`.

>[!HINT]
>After the `ngOnInit` add the following code
>```ts
>public onQuestionAnswered(isCorrect: boolean): void {
>  
>}

Inside the method, increment the `correctAnswers` property every time we receive a correct answer in the method.

>[!HINT]
>Check if `isCorrect` is true and if so, increment `correctAnswers`. Your code will look like this
>```ts
>if (isCorrect) {
>  this.correctAnswers++;
>}

We've configured the component code, now let's update the template.

The next step is to bind the event in the parent component's template. You can use `@Input()` and `@Output()` together on the same child component.

Here's how input and output properties on the `TriviaQuestionComponent` work together in the `TriviaComponent`.

![Diagram showing input and output property binding](images/output-diagram.svg ':size=800')

Let's implement this.

To the `app-trivia-question` element, add event binding to the output property `answeredEvent` and bind it to the method `onQuestionAnswered()`. Pass the data from the event to the method using the `$event` variable.

>[!HINT]
>The syntax is similar to the `click` event handling. Use parentheses `()` around the output property and bind it to the method.
>
>The code to bind the output property looks like this: `(answeredEvent)="onQuestionAnswered($event)`.

>[!TIP]
>If all the input and output properties `app-trivia-question` is making the line too long, add a line break between each attribute to make things easier to read.

# Show results

Now that we track correct answers for the trivia questions, we can display results!

Copy the following CSS and paste it in the _trivia.component.css_ below the styles for `.question-tracker`.

{% codeblock copy %}trivia.component.css{% codeblock %}
```css
.results {
  margin-top: 4rem;
  text-align: center;
  font-size: 1.5rem;
  color: #484e78;
}

.score {
  margin: 2rem 0;
  font-size: 3rem;
  font-weight: 600;
  color: #ba99c0;
}
```

Copy the following HTML and paste it in the _trivia.component.html_ below the first `section` element but still inside the `div`.

{% codeblock copy %}trivia.component.html{% codeblock %}
```html
  <section class="results">
    <p>
      You answered ??? out of ??? questions correctly.
    </p>
    <p class="score">Your score is ???</p>
    <p>Grab a cocktail &amp; celebrate!</p>
  </section>
```

We need to apply data binding to calculate the results.

We want the first paragraph to read
> You answered 9 out of 10 questions correctly.

Where '9' is the number of correct answers and '10' is the total number of trivia questions. Using data binding concepts we learned earlier, apply the changes needed.

>[!HINT]
>We can use the `correctAnswers` property for the first value, and the `length` property of the `questions` array for the second.
>Your code will look like
>```html
><p>
>  You answered {{correctAnswers}} out of {{questions.length}} correctly.

For the second paragraph, we need to do a little math.

We want the second paragraph to read
> Your score is 90%

First let's do the math to calculate the correct answers fraction. Don't worry about the percent sign yet. You can do this directly in data binding. Apply the needed code updates.

>[!HINT]
>You can do math in data binding. You'll need to divide the number of correct answers by the number of questions.
>Your data binding code will look like this `{{correctAnswers / questions.length}}`.

## Format display text with Pipes

Now let's tackle that percent sign and multiplying by 100 to get the percent value.

For this, we can use a built-in Angular build block called **Pipes**. **Pipes** transform data for display. Angular has built in pipes to support formating data, string casing, currency, decimals, percents, and more. We'll use the `PercentPipe`.

Pipes are added directly to the template and use vertical bar `|`. Then we add the type of pipe to use, such as 'percent'. There's no code to add in the component and we don't need to import any libraries.

Update the second paragraph to look like this:

{% codeblock %}trivia.component.html{% codeblock %}
```html
<p class="score">Your score is {{correctAnswers / questions.length | percent}}</p>
```

Do you see the correctly formatted result as percent form in Chrome?

Try answering the trivia questions and test out your math!

We don't want to show all the trivia questions at once and we don't want to show the results until after all the questions are answered, but we'll make those changes next time.

Give yourself a big pat on the back! This is a long worksheet and you made it!

# Check your code in to GitHub

We covered a lot today and added a lot to our app! Let's get the code into GitHub so we don't lose our work for upcoming session.

Stage your changes using `git add .` and commit with a message of your chosing. Push your changes to your `main` branch.
# Next sessions

In the upcoming session (our last session!) we'll conditionally display DOM elements, call to load trivia questions from an API, and handle asynchronous data within the app.

>[!EXTRACREDIT]
>Do you want to keep working on your app between sessions? We have some ideas for you to try. Feel free to message us in #codingandcocktails Slack channel if you need help between sessions!
>
>1. Add more flair to your app by picking out fonts and applying the font to your app. We recommend using [Google Fonts](https://fonts.google.com/).
>2. Feel free to chang up the colors of the app!
>3. Ready for a challenge? How about generating a new component for your "About" page, and add a new route named 'about'. Add the new route to the route array. Read more from Angular's [route order documentation](https://angular.io/guide/router#route-order) to understand where to add the new route definition in the array.
>4. Update the header and footer of the app (the title and copyright) to use variables defined inside the `AppComponent` and use data binding to display the text.

# Take a quiz and provide feedback

We want to hear from you! Take a [short quiz about Angular and let us know what you liked and how we can do better](https://forms.gle/m3gAGfS5WDB3skEJ9)!

# Answer key

>[!CODECHECK]
>Check your code by [viewing the completed code in StackBlitz cloud IDE](https://stackblitz.com/github/KansasCityWomeninTechnology/trivia/tree/data).
