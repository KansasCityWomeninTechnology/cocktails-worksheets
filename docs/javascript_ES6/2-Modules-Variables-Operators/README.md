# Writing Javascript ES6

Now we will create a project with interactive elements. In the rest of the worksheet we will add functionality to make the project more dynamic. When complete, you will have a web page that looks like this:

![](images/finalProject.png ":class=image-border")

## Referencing modules, declaring arrays and using operators
In this section, we will practice declaring variables, importing modules and using the Rest and Spread operators.

## Prepare your workspace

Let's create a new static project and set up our workspace.

> [!TIP]
> If you need a refresher on how to create a new project in StackBlitz, refer to [Create a new StackBlitz project](../setup/?id=create-new-project) section.

1. Remove the code in your  _index.html_ file. Replace it with the following HTML code.

   {% codeblock copy %}index.html{% codeblock %}

   ```html
   <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Drink Recipes</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <div id="recipes"></div>
    <button id="addRecipeButton">Add New Recipe</button>

    <script type="module" src="script.js"></script>
  </body>
</html>
  ```

2. Remove the css code in your _styles.css_ file and replace it with the following code.

{% codeblock copy %}styles.css{% codeblock %}
```css
  #recipes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.recipe {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.recipe h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.recipe .ingredients {
  font-weight: bold;
}

.recipe .instructions {
  margin-top: 10px;
}

#addRecipeButton {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
}

#addRecipeButton:hover {
  background-color: #0056b3;
}
```

## Adding a new file to your project



3. Create a _utils.js_ file and copy the code below into the new file.  To create a new file, click on the Add File icon, then name the file _utils.js_


![](./images/addFilesIcon.png ":class=image-border")


![](./images/UtilsAdded.png ":class=image-border")


  {% codeblock copy %}utils.js{% codeblock %}
```js

  const apiUrl = 'https://www.thecocktaildb.com/api/json/v1/1';

  export async function fetchInitialRecipes() {
  try {
    const response = await fetch(`${apiUrl}/search.php?s=margarita`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    if (!data.drinks) {
      throw new Error('No recipes found');
    }
   const recipes=[];
   const drinks = data.drinks.slice(0, 3);
   for (let i = 0; i < drinks.length; i++)
    const drink = drinks[i];
   const recipe ={
      name: drink.strDrink,
      ingredients: [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        // Add more ingredients as needed
      ].filter(Boolean), // Remove any empty values
      instructions: drink.strInstructions,
   };
    recipes.push(recipe);
  }
  return recipes;    
    
  } catch (error) {
    throw new Error('Error fetching recipes:', error);
  }

  export async function addRecipe(recipe) {
  try {
    // Logic to add the recipe to your database/API would go here
    console.log('Adding recipe:', recipe);
    // For now, just returning the recipe as if it was added successfully
    return recipe;
  } catch (error) {
    throw new Error('Error adding recipe:', error);
  }
}
```

## Replace the code in the JS file

4. Remove the code in your _script.js_ file and replace it with the following code.


  {% codeblock copy %}script.js{% codeblock %}
```js
    const recipesContainer = document.getElementById('recipes');
    const addRecipeButton = document.getElementById('addRecipeButton'); 

  function displayRecipes(recipes) {
  recipesContainer.innerHTML = '';
    recipes.forEach(function(recipe) {
    const recipeElement = document.createElement('div');
      recipeElement.innerHTML = `
      <h3></h3>
      <p>Ingredients:</p>
      <p>Instructions:</p>
    `;
    recipesContainer.appendChild(recipeElement);
  });
}

  async function handleAddRecipe() {
 
  const ingredients = prompt('Enter ingredients (comma separated):').split(',');
   

  try {
    const newRecipe = { name, ingredients, instructions };
    newRecipes.push(newRecipe);
    displayRecipes();
  } catch (error) {
    console.error('Error adding recipe:', error);
  }
}

  addRecipeButton.addEventListener('click', handleAddRecipe);

  let initialRecipes = []; 
  async function init() {
  try {
    initialRecipes = await fetchInitialRecipes();
    displayRecipes(initialRecipes);
  } catch (error) {
    console.error('Error fetching recipes:', error);
  }
}
  init();
```

5. At the top of the file add a statement to pull in the  _fetchInitialRecipes_ and _addRecipe_ from the utils.js file.

6. Under the line declaring the constant addRecipeButton, declare an array to hold new recipes that will be added.

7. Within the function _handleAddRecipe_ declare a constant variable and create a prompt users will see when they need to name the new drink

8. Within the same function, declare a constant variable and prompt for when users need to add instructions for creating the new drink 
Note: Reference the _try_ clause in the function to see what variable names are expected



> [!TIP]
> Don't forget to save files as you go!

> [!TIP]
> Add comments throughout the page

> [!INFO]
> Add info to help clarify


> [!TIP]
> Don't forget mentors are here to help you. If you have any questions, feel free to ask!


# Checkpoint

Compare your _script.js_ against the answer key for your work. It might look a little different depending on the variable names you chose.

> [!CODECHECK]
> ![](images/checkpoint.png ":class=image-border")
>
> Hard to read? Compare your _script.js_ file with our [answer key](https://github.com/KansasCityWomeninTechnology/javascript-101/blob/answerkey-functions/scripts.js).


### Celebrate with a cocktail or mocktail! You deserve it, rockstar!

![](https://media.giphy.com/media/l378qdC4yO0YEv5Re/giphy.gif)

## References and helpful links

[MDN Reference: Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators)

[MDN Reference: if else](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

[Chrome DevTools JavaScript Debugging Reference](https://developers.google.com/web/tools/chrome-devtools/javascript/reference)


