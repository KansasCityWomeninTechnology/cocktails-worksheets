## Functions, Promises and Finally

 
 1. In the utils.js file, try rewriting the fetchInitialRecipes() function using a promise. Hint: Someting needs to be changed when defining the function and in the line beneath that:


 {% codeblock copy %}utils.js{% codeblock %}
```js
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
    const recipes = data.drinks.slice(0, 3).map((drink) => ({
      name: drink.strDrink,
      ingredients: [
        drink.strIngredient1,
        drink.strIngredient2,
        drink.strIngredient3,
        // Add more ingredients as needed
      ].filter(Boolean), // Remove any empty values
      instructions: drink.strInstructions,
    }));
  } catch (error) {
    throw new Error('Error fetching recipes:', error);
  }
}

 ```
## References and helpful links

[MDN Reference: Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

[MDN Reference: Function](https://developer.mozilla.org/en-US/docs/Glossary/Function)
