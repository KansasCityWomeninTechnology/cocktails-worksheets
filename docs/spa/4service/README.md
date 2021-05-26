# Using a service to call external APIs in your Single Page Application

We will create a web application using a SPA framework with interactive elements and dynamic content that looks like this:

![Completed trivia application](../images/app.gif ':size=500')

Tonight we will add on to the code by completing DOM manipulation logic to display trivia questions and results conditionally and building a service to interact with an external trivia API.

>[!WARNING]
>Before starting the worksheet, please take a moment to review the [Setup instructions](../setup/?id=setup) to ensure you have all the tools and workspace setup you need for tonight's work.

>[!TIP]
>Couldn't make it to last session? Follow [the instructions from the last session](../3data/) to add data handling and incorporating structural directives for the best learning experience. This session builds upon concepts learned in the last sessions.
>
>Or [clone the answer key from last session](https://github.com/KansasCityWomeninTechnology/trivia/tree/data), install Angular CLI, and run `npm install` in the project directory.

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

>[!WARNING]
>If it's been a while since you looked at the app, take a moment to refresh your memory and look over the Trivia component and the TriviaQuestion component. We're going to jump right into it and hit the ground running on coding!

# Showing one question at a time

Right now we show all the trivia questions at once. But we should show one question at a time. By tracking the progress of the user interacting with the trivia app, we know which question to display.

We're using the principles of defined responsibilities in our components. In our case, we want the parent, the `TriviaComponent`, to tell the child, the `TriviaQuestionComponent`, which question to display.

In VS Code, open _trivia.question.component.ts_.

First, let's set up an `@Input` property in the `TriviaQuestion` component with a `boolean` type to handle whether the component should display. Name the property `shouldDisplay`. Apply the concepts we learned last session to create `@Input` properties by following the same pattern implemented for the `question` `@Input` property.

>[!HINT]
>In the _trivia.question.component.ts_, add a public `@Input` property named `shouldDisplay` and set the type to `boolean`.
>
>Your code will look like this
>```ts
>@Input() public shouldDisplay: boolean;
>```

Now that we have a property that lets TriviaQuestion component know whether to show itself or not, we can incorporate the property in the logic for the template. In this case, we want to show or hide the entire component. We can use the `*ngIf` directive.

Open _trivia.question.component.html_.

We need to wrap the entire HTML for the component in an element so that `*ngIf` can control the DOM. Create a parent `div` element and place all existing HTML inside this `div`.

Add the `*ngIf` directive to the `div` and bind it to the new `shouldDisplay` property. Your code should look like this:

{% codeblock %}trivia-question.component.html{% codeblock %}
```html
<div *ngIf="shouldDisplay">
  <h3>{{ question.text }}</h3>

  ...list of answers and remaining elements here
</div>
```

Save your files and take a look in Chrome. Oh no! Now we're not showing any questions! We need to configure the parent component. Before we do so, let's make one more change in the HTML.

>[!TIP]
>Enable auto save in VS Code to avoid manually saving after each change by selecting **File** :fas fa-long-arrow-alt-right: **Auto Save**.

>[!EXTRACREDIT]
>Why _aren't_ the trivia questions displaying? What's going on?!
>
>The `*ngIf` directive guards against null and undefined values. Because we didn't set an initial value on the property (using the syntax `@Input() public shouldDisplay: boolean = false;`), the value of the property is `undefined`. Angular does not display the `div` because `shouldDisplay` is `undefined`.

We added a `div` to apply conditional logic to the template, but Angular has a grouping element we can use instead that allows us to host a directive without adding an unnecessary DOM element.

Edit the tagname `div` to `ng-container`. Your code will look like this:

{% codeblock %}trivia-question.component.html{% codeblock %}
```html
<ng-container *ngIf="shouldDisplay">
  <h3>{{ question.text }}</h3>
  
  ...list of answers and remaining elements here
</ng-container>
```

>[!EXTRACREDIT]
>Why use `ng-container` when `div` worked?
>
>The difference is an extra DOM element. When using a `div`, the `div` is added to the DOM. You'll see this in Chrome DevTools Elements tab. But if you use `ng-container`, Angular removes the container from the DOM, so all you see is the elements for the component.
>
>While we may not see any difference in this case, you may see a difference depending on other factors of an application or the applied styles applied.
>
>Read more about `<ng-container>` on [Angular's documentation site](https://angular.io/guide/built-in-directives#hosting-a-directive-without-a-dom-element).

## Configure TriviaComponent to use the new `@Input` property

Now we turn our attention to the parent component to use the new property. We want to show the component one at a time, so we need to track which question the user is on. We can create a property in the Trivia component and increment it for each answer received from the `answeredEvent` `@Output` event.

Open _trivia.component.ts_.

Create a public property named `currentQuestionIndex` and initialize the value to `0`. Apply concepts we learned in past sessions to implement the property. You can also look at existing properties in the component as a pattern to use for this new property.

>[!HINT]
>Above the constructor, add the public property `currentQuestionIndex` and set it equal to `0`. Your code will look like this
>```ts
>public currentQuestionIndex = 0;
>```

In the last session, we added the method `onQuestionAnswered` as the event handler for the `answeredEvent` `@Output` event from `TriviaQuestionComponent`. In this method, increment the `currentQuestionIndex` so that we know many questions have been answered.

>[!HINT]
>In the `onQuestionAnswered` method, increment the `currentQuestionIndex`. Your code will look like this
>```ts
>public onQuestionAnswered(isCorrect: boolean): void {
>  this.currentQuestionIndex++;
>  if (isCorrect) {
>    this.correctAnswers++;
>  }   
>}
>```

Now that we have a property to identify which question the user is on, we can pass the `shouldDisplay` `@Input` property in the template.

Open _trivia.component.html_.

The `shouldDisplay` `@Input` property expects a boolean value. We need to send `true` if the current question should display. We can determine this condition if the `currentQuestionIndex` equals the index of the question in the array.

Using concepts we used to capture the index of the `*ngFor` element in the `TriviaQuestionComponent` template in the last session, make the following changes in the `TriviaQuestionComponent` template:

1. Capture the `index` of the `*ngFor` in a variable.
2. Set the input property to an equality check where `currentQuestionIndex` equals the index of the question array element.

Feel free to move the property and event bindings to separate lines to make it easier to read.

>[!HINT]
>Take a look at _trivia-question.component.html_. We'll access the question index in the same way.
>
>Add the `shouldDisplay` input property binding (using square brackets) to `<app-trivia-question>` element. Use the `index` property from the `*ngFor` and create a local variable for the `index` value. Bind the `shouldDisplay` value to the equality check between the local variable for `index` value and `currentQuestionIndex`.
>
>Your code should look like this
>```html
><app-trivia-question *ngFor="let item of question; let i = index"
>   [question]="item"
>   [shouldDisplay]="i === currentQuestionIndex"
>   (answeredEvent)="onQuestionAnswered($event)">
> </app-trivia-question>
>```

Check out Chrome. Do you now see the first question? Test it out. After you answer the first question, do you see only the second question?

## Update the question heading

Since we now know which question the user is answering, let's update the label above the question to read
> Question 1 of 2

Open _trivia.component.html_.

Update the text in the paragraph element above the `<app-trivia-question>` by applying the data binding concepts we learned last session.

>[!HINT]
>Change the text by data binding to `currentQuestionIndex`. Don't forget to add `1` to properly handle the array index offset. Your code will looks like this
>```html
><p class="question-tracker>Question {{currentQuestionIndex + 1}} of {{questions.length}}</p>
>```

# Display trivia results only when complete

We're showing one question at a time now, but we still see the results section. We want to show the results when the user completes answering all the trivia questions, not before. We also want to show the question section with the recently updated label to show when the user is answering questions, not after.

We already have a `*ngIf` added to the results section that we can use to check whether the user answered all the questions. We _could_ add another `*ngIf` to the question section to check whether the user is still in the process of answering questions. It works, but it isn't as easy to read and can make things unnecessarily complicated. What we really want is an `if/else`.

Angular's `*ngIf` structural directive handles `if/else` cases. Let's use this to conditionally show each section of the Trivia component template appropriately.

Open _trivia.component.html_.

Remove the `*ngIf` from the results `<section>`. We'll make the results section the else case.

Add an `*ngIf` to the question `<section>` (the first `<section>` in the html). In the conditional logic, we want to evaluate whether the user answered less than all the questions we have. We can compare `currentQuestionIndex` to the length of the `questions` array.

>[!HINT]
>Add the `*ngIf` structural directive to the first `section` element and pass in an equality check for `currentQuestionIndex` is less than the length of `questions`.
>
>Your code will look like this
>```html
><section *ngIf="currentQuestionIndex < questions.length">
>```

Now let's handle the `else` case.

We'll use an Angular defined element, `<ng-template>`, and "name" the element using the template variable syntax, `#`.

Surround the results section (the second `section` element in the template) with `<ng-template>`. To the opening `<ng-template>` element, add `#results`. Your code will look like this

{% codeblock %}trivia.component.html{% codeblock %}
```html
<ng-template #results>
  <section class="results">
    ...remaining section code here
  </section>
</ng-template>
```

>[!INFO]
>Let's talk through what's going on.
>
>The `<ng-template>` element is used to create template fragments. By default, the HTML inside the `<ng-template>` element aren't rendered in the view. But we can use it to hold HTML for conditional logic.
>
>The `#` syntax allows us to declare a template variable. We named the variable 'results'. We can now refer to 'results' within the template.
>Read more about [template variables on Angular's documentation site](https://angular.io/guide/template-reference-variables).

Next we need to configure the `*ngIf` to use the 'results' variables for the `else` case. Update the `*ngIf` to look like this

{% codeblock %}trivia.component.html{% codeblock %}
```html
<section *ngIf="currentQuestionIndex < questions.length else results">
   ...remaining section code here
</section>
```

>[!INFO]
>We updated the `*ngIf` expression to say
>>If the condition evaluates to true, display the host element. Else, display the element named 'results'.

Check out your code in Chrome. We should now display the questions and the results section appropriately based on whether the user completed answering all the trivia questions!

Give yourself a high five! Our app's logic is now all set up. We can now turn our attention to calling an API.

# Creating a service

Using fake trivia questions is helpful to implement the logic of the app, but most front-end applications need to communicate with a server. We'll make the needed changes to call out to an API over HTTP to get trivia questions.

## Understanding the API

Before we start making code changes, let's take a look at the API documentation. In a new browser tab, open the [Swagger Open API documentation](https://cnc-trivia-api.herokuapp.com/api/).

We're going to call the `GET /sampleQuestions` endpoint. Expand the endpoint to see the schema and a sample response.

It returns an array of trivia questions in the same format the interfaces for `Question` and `Answer` over HTTP.

## A new service

Open a new terminal in VS Code. We want to continue serving the app while creating the service.

>[!TIP]
>To open a new terminal in VS Code, follow [the instructions on their documentation page](https://code.visualstudio.com/docs/editor/integrated-terminal#_managing-multiple-terminals).

In the new terminal, we'll use Angular CLI to create the service. Run the following command:

{% codeblock copy %}app.component.html{% codeblock %}
```sh
ng generate service trivia
```

>[!INFO]
>This creates two TypeScript files, _src/app/trivia.service.ts_ and the _spec_ file for testing. We'll only use _trivia.service.ts_ today.

>[!TIP]
>That's too much typing for a commandline operation!
>
>Angular CLI supports shortcuts to generate services too. You can use single character shortcuts to **g**enerate an **s**ervice, so we could also run `ng g s trivia`.

Feel free to close the new terminal.

HTTP calls require a new module, Angular's `HttpClientModule`, which contains a simplified Http library. We'll use the `HttpClient` service in the `HttpClientModule` to make our API calls.

Open _app.module.component_.

Add `HttpClientModule` to the `imports` array.

>[!TIP]
>Don't forget to import the library at the top of the file!

Open _trivia.service.ts_.

We now use **DI** (**D**ependency **I**njection) to inject the `HttpClient` service as a dependency of the `TriviaService`. Update the constructor in `TriviaService` to look like this:

{% codeblock %}trivia.service.ts{% codeblock %}
```ts
@Injectable({
   providedIn: 'root'
})
export class TriviaService {
   constructor(private http: HttpClient) { }
}
```

>[!INFO]
>Let's talk through parts of this code.
>
>`@Injectable()` - a decorator that tells Angular `TriviaService` can be used within the DI system. The metadata, `providedIn: 'root'`, means the `TriviaService` is available throughout the application.
>
>`constructor` - the default method called when creating a new instance of a class.
>
>`private http: HttpClient` - a parameter to the `constructor` method. New instances of `TriviaService` require a `HttpClient` parameter. Let's dig a little deeper:
>
> * `http: HttpClient` - the required parameter is of type `HttpClient`, and we'll name the parameter variable `http`
>
> * `private` - an access modifier that marks a property as private, meaning it is inaccessible outside of the class. Previously, we used `public` for our properties because we wanted the component's template as well as other components to access the properties. This is TypeScript shorthand notation to declare a private class variable named `http`. We can also write this as
>
>```ts
>export class TriviaService {
>  private http: HttpClient;
>  constructor(httpClient: HttpClient) {
>    this.http = httpClient;
>  }
>}
>```

>[!EXTRACREDIT]
>What is **Dependency Injection**?
>
>Dependency injection is a technique to provide code dependencies within an application. It is a software pattern where a class relies on dependencies from an external source rather than creating them on their own, and it is a best practice for writing well-architected code. This, in turn, makes the code is more maintainable and testable.
>
>Angular has a DI system built in and automatically creates all dependencies. When code has a dependency, such as `TriviaService` depending on `HttpClient`, Angular automatically creates an instance of `HttpClient` to pass into the `TriviaService`.
>
>Learn about dependency injection in Angular [on their documentation site](https://angular.io/guide/architecture-services).

We now have access to Angular's `HttpClient` in the `TriviaService` so we can start making API calls.

Inside the `TrivaService` class, create a public method called `getTriviaQuestions`. Your code will look like this

{% codeblock %}trivia.service.ts{% codeblock %}
```ts
public getTriviaQuestions(): Observable<Question[]> {

}
```

>[!INFO]
>Let's talk through this.
>
>We created a public method called `getTriviaQuestions()` where the return type is `Observable<Question[]>`.
>
>Similar to when we added the `@Output` event and used the `EventEmitter<boolean>`, an `Observable` type requires the type of data being passed, in our case `Question[]`. The `Question` type is one we defined in the `Question` interface.

>[!TIP]
>Don't forget to import `HttpClient` from `@angular/common/http`, `Observable` from `rxjs`, and `Question`.

>[!EXTRACREDIT]
>What's an **Observable**?
>
>Observables are "streams" of data and is derived from a library called [RxJS](https://rxjs-dev.firebaseapp.com/guide/overview). RxJS simplifies making asynchronous calls, such as calling an API, and composing logic that handle the outcome of asynchronous responses using functional programming concepts. This paradigm is called "reactive programming". RxJS is one of the many languages supporting reactive programming under the [ReactiveX project](http://reactivex.io/).
>
>Read more about the RxJS and how it's used in Angular on [Angular's documentation site](https://angular.io/guide/rx-library).

Let's add the call to the API.

Inside the `getTriviaQuestions()` method, we'll call the API endpoint using the `HttpClient`'s `get()` method. Your code will look like this:

{% codeblock %}trivia.service.ts{% codeblock %}
```ts
public getTriviaQuestion(): Observable<Question[]> {
  return this.http.get<Question[]>('https://cnc-trivia-api.herokuapp.com/sampleQuestions');
}
```

>[!INFO]
>Let's talk through the Http call.
>
>`this.http` - the private `http` property containing Angular's `HttpClient` service.
>
>`get<Question[]>()` - the `get` method on the `HttpClient`. The `get` method optionally allows use to provide the type of data we'll get back from the server, which is of type `Question[]`. Specifying the type instructs TypeScript to cast the response object as the type, freeing us from manually creating `Question` objects and populating the properties ourselves.
>
>`https://cnc-trivia-api.herokuapp.com/sampleQuestions` - the endpoint of our trivia API call where we want to make the `get` call.

>[!EXTRACREDIT]
>Angular's `HttpClient` handles all the REST methods, query parameters, and header values.
>Read more about the `HttpClient` library and [communicating with backend services on Angular's documentation site](https://angular.io/guide/http).

# Call the API from the component

Let's use our new service. First, we want to remove our hardcoded trivia question.

Open _trivia.component.ts_.

Delete the hardcoded question array from the `questions` property, but leave the property there. We're still going to use it.

Rename the `questions` property to `questions$` and change the type to match what's returned from the `getTriviaQuestions` method in the `TriviaService`.

>[!HINT]
>Change the name from `questions` to `questions$` and change the type from `Question[]` to `Observable<Question[]>`. Your code will look like this:
>```ts
>public questions$: Observable<Question[]>;
>```

>[!TIP]
>Don't forget to import `Observable` from `rxjs`.

>[!EXTRACREDIT]
>`questions$` is a funny variable name. Why did we do that?
>
>Adding the `$` after a variable name is commonly used in RxJS to identify `Observables`. This makes it easy for us to know which variables contain asynchronous data.

The app is completely broken now, let's fix it. ![face with tears of joy emoji](../../images/emojis/joy.png)

Open _trivia.component.html_.

The call to the API is an asynchronous call. Meaning we won't have an array of questions until after the API call completes. We want to guard against showing the trivia page until we have the questions. We can use an `*ngIf` on the first element in this template, the `div`.

Update your code to look like this:

{% codeblock %}trivia.component.html{% codeblock %}
```html
<div *ngIf="questions$ as questions">
```

>[!INFO]
>Let's talk through what we did here.
>
>`*ngIf` - structural directive to control whether the host element and its descendants display
>
>`questions$` - the expression to evaluate. The expression is the property `questions$` of type `Observable<Question[]>`. We defined the `questions$` property but didn't assign an initial value, so this evaluates as [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy).
>
>`as questions` - a local variable named `questions` containing the output of the expression. When we complete configuring, this will become the questions array of type `Question[]`. Right now, `questions` is an error in the template.
>
>![cold sweat emoji](../../images/emojis/cold-sweat.png)

The `Observable<Question[]>` type on `questions$` needs to be converted to a `Question[]` after we get the trivia API response back. We can use the **Async Pipe**. Update your code to look like this:

{% codeblock %}trivia.service.ts{% codeblock %}
```html
<div *ngIf="questions$ | async as questions">
```

>[!INFO]
>The `async` pipe is used along with `Observables` to handle the complexities of async operations for us. Here we are waiting the response back from the API and converting the response to the local `questions` variable. The `questions` variable no longer has the `Observable` wrapper. It is of type `Question[]`.

Our app is no longer throwing all sorts of errors, but it's also not displaying anything. This means everything is working. The `questions$` property evaluates to falsy, so the `*ngIf` structural directive is working. Let's display some trivia questions.

Open _trivia.component.ts_.

When Angular CLI creates a component, it implements the `OnInit` interface and adds the `ngOnInit()` method. This is a component lifecycle hook and triggers when the component initializes. This is where we'll make the call to the trivia service.

First we need to inject the `TriviaService` into the component. Using concepts we learned earlier, inject `TriviaService` via the constructor and create a private class property named `triviaService`.

>[!HINT]
>To the `TriviaComponent` `constructor`, add a parameter named `triviaService` of type `TriviaService` and declare the access as `private`. Your code will look like this
>
>```ts
>constructor(private triviaService: TriviaService) { }
>```

>[!TIP]
>Don't forget to import `TriviaService`.

In the `ngOnInit()` method, initialize `questions$` property by setting the value to the output of the Triva service's `getTriviaQuestions()` method.

>[!HINT]
>To the `TriviaComponent` `ngOnInit()`, initialize `questions$` to equal the call to `triviaService` `getTriviaQuestions` method. Your code will look like this
>
>```ts
>ngOnInit(): void {
>   this.questions$ = this.triviaService.getTriviaQuestions();
>}
>```

That's it! You have a completed trivia app! Try testing it out!

# Check your code in to GitHub

We covered a lot today and completed our app! Let's get the code into GitHub.

Stage your changes using `git add .` and commit with a message of your choosing. Push your changes to your `main` branch.

>[!TIP]
>Need a Git refresher? Check out the [tutorials from Atlassian](https://www.atlassian.com/git/tutorials).

# What's next?

Join us at the next Coding & Cocktails! And continue building on to your app! Here's some ideas to extend the trivia app.

We currently call the API endpoint to get the same list of sample questions back. How about calling the `GET /trivia` endpoint instead? You'll have to make changes to the interfaces.

Ready for a challenge? Configure the trivia app to only ask questions of a certain category or difficulty level by using query parameters in the `GET /trivia` endpoint. Read more about using [query parameters in the `HttpClient` on the Angular documentation site](https://angular.io/guide/http#configuring-http-url-parameters).

What's that? You want even more of challenge? Make the trivia app configurable by allowing the user to pass in the category and difficulty parameters. You'll need to add form elements to the trivia app and bind values using template variables and `[ngModel]`. Read more about capturing [user input examples on the Angular documentation site](https://angular.io/guide/template-reference-variables).

We're available on Slack if you have any questions. We're here to support you in your coding journey.

# Take a quiz and provide feedback

We want to hear from you! Take a [short quiz about Angular and let us know what you liked and how we can do better](https://forms.gle/4nQXHbN7sG3Dr6rT6)!

# Answer key

>[!CODECHECK]
>Check your code by [viewing the completed code in StackBlitz cloud IDE](https://stackblitz.com/github/KansasCityWomeninTechnology/trivia/tree/service).
